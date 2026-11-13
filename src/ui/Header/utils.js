/**
 * Utility functions for Header component
 */

import { useState, useEffect, useMemo } from 'react';

export const DEFAULT_HEADER_SEED_QUESTIONS_CACHE_MINUTES = 10;

/**
 * Finds the best-matching menu item for the current active path.
 * Uses longest-prefix matching with exact match preference to avoid
 * sibling collision issues where multiple items share URL prefixes.
 *
 * @param {Array} menuItems - Array of menu item objects with url/@id properties
 * @param {string} activeItem - Current active path/URL
 * @returns {Object} Object with bestMatchUrl and bestScore properties
 */
export function findBestMatchingMenuItem(menuItems, activeItem) {
  const stripSlash = (p) => (p && p !== '/' ? p.replace(/\/+$/, '') : p);
  const normalizedActiveItem = stripSlash(activeItem);
  let bestMatchUrl = null;
  let bestScore = -1;
  if (menuItems && normalizedActiveItem) {
    menuItems.forEach((item) => {
      const url = stripSlash(item.url || item['@id']);
      if (!url) return;

      let score = -1;
      if (normalizedActiveItem === url) {
        // Exact match gets highest priority
        score = url.length + 1;
      } else if ((normalizedActiveItem || '').indexOf(url + '/') === 0) {
        // Parent-child relationship: current path starts with menu item URL + '/'
        score = url.length;
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatchUrl = url;
      }
    });
  }

  return { bestMatchUrl, bestScore };
}

/**
 * Determines if a menu item should be marked as active based on the best match logic.
 *
 * @param {Object} menuItem - Menu item object with url/@id properties
 * @param {string} bestMatchUrl - The URL of the best-matching menu item
 * @param {number} bestScore - The score of the best match (-1 if no match)
 * @returns {boolean} Whether this menu item should be active
 */
export function isMenuItemActive(menuItem, bestMatchUrl, bestScore) {
  if (bestScore < 0) return false;
  const itemUrl = menuItem['@id'] || menuItem.url;
  return itemUrl === bestMatchUrl;
}

// Helper functions for menuItemColumns conversion (numbers to semantic UI format)
export const numberToColumnString = (num) => {
  const numbers = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  return numbers[num] ? `${numbers[num]} wide column` : '';
};

export const numbersToMenuItemColumns = (numbers) => {
  // Handle both single number and array of numbers for column dimensions
  // Also handle pre-formatted strings (e.g., 'at-a-glance three wide column')
  if (!Array.isArray(numbers)) {
    // If it's already a string containing 'wide column', return it as-is
    if (typeof numbers === 'string' && numbers.includes('wide column')) {
      return numbers;
    }
    return numberToColumnString(numbers);
  }
  return numbers
    .map((num) => {
      // If array element is already a formatted string, return it as-is
      if (typeof num === 'string' && num.includes('wide column')) {
        return num;
      }
      return numberToColumnString(parseInt(num));
    })
    .filter((col) => col !== '');
};

/**
 * Finds the search-input entry of the header search box config that matches
 * the current path (its matchpath, else its path), falling back to the first
 * search-input entry.
 *
 * @param {Array} config - headerSearchBox entries
 * @param {Object} location - object with a pathname
 * @returns {Object} The matched search-input entry, or {}
 */
export const getSearchInput = (config, location) => {
  return (
    config.filter(
      (v) =>
        v.type === 'search-input' &&
        location.pathname.match(v.matchpath ? v.matchpath : v.path),
    )[0] ||
    config.filter((v) => v.type === 'search-input')[0] ||
    {}
  );
};

function getSecureRandomIndex(length) {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] % length;
  }
  return 0;
}

export function getRandomItems(arr, max) {
  if (!arr || !Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  const copy = arr.slice();
  const limit = Math.min(arr.length, max);
  const result = [];
  for (let i = 0; i < limit; i += 1) {
    const randIdx = getSecureRandomIndex(copy.length);
    result.push(copy.splice(randIdx, 1)[0]);
  }
  return result;
}

export function normalizeTopics(topics) {
  if (!topics) return [];
  if (Array.isArray(topics)) {
    return topics
      .map((t) =>
        (typeof t === 'string' ? t.trim() : t?.topic || t?.name || '').trim(),
      )
      .filter(Boolean);
  }
  if (typeof topics === 'string') {
    return topics
      .split('\n')
      .map((t) => t.trim())
      .filter(Boolean);
  }
  return [];
}

export function loadCachedQuestions(
  cacheKey,
  cacheMinutes = DEFAULT_HEADER_SEED_QUESTIONS_CACHE_MINUTES,
) {
  if (typeof window === 'undefined' || !window.localStorage || !cacheKey) {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(cacheKey);
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (
      !entry ||
      !Array.isArray(entry.questions) ||
      entry.questions.length === 0
    ) {
      return null;
    }
    const maxAgeMs =
      (Number(cacheMinutes) > 0
        ? Number(cacheMinutes)
        : DEFAULT_HEADER_SEED_QUESTIONS_CACHE_MINUTES) *
      60 *
      1000;
    const ageMs = Date.now() - (entry.timestamp || 0);
    if (ageMs >= maxAgeMs) {
      return null;
    }
    return entry.questions;
  } catch {
    return null;
  }
}

export function saveCachedQuestions(cacheKey, questions) {
  if (
    typeof window === 'undefined' ||
    !window.localStorage ||
    !cacheKey ||
    !Array.isArray(questions)
  ) {
    return;
  }
  try {
    const entry = {
      timestamp: Date.now(),
      questions,
    };
    window.localStorage.setItem(cacheKey, JSON.stringify(entry));
  } catch {
    // Ignore quota or security errors
  }
}

/**
 * Custom hook to resolve header search suggestions.
 * Supports opt-in dynamic seed questions via POST /_rq/questions with 0ms localStorage caching,
 * falling back to static suggestions.
 *
 * @param {Object} searchInput - search-input entry from headerSearchBox
 * @returns {Array} visible suggestions
 */
export function useHeaderSearchSuggestions(searchInput = {}) {
  const {
    path = '',
    maxToShow,
    suggestions,
    enableGeneratedSeedQuestions,
    topics,
    seedQuestionsCacheMinutes,
  } = searchInput;

  const cacheKey = `eea_header_search_seed_questions_${path || 'default'}`;

  const cached = useMemo(() => {
    if (!enableGeneratedSeedQuestions) return null;
    return loadCachedQuestions(cacheKey, seedQuestionsCacheMinutes);
  }, [enableGeneratedSeedQuestions, cacheKey, seedQuestionsCacheMinutes]);

  const [visibleSuggestions, setVisibleSuggestions] = useState(() => {
    if (cached && cached.length > 0) {
      return cached;
    }
    return getRandomItems(suggestions, maxToShow);
  });

  const [isLoading, setIsLoading] = useState(() => {
    if (!enableGeneratedSeedQuestions) return false;
    return !(cached && cached.length > 0);
  });

  useEffect(() => {
    if (!enableGeneratedSeedQuestions) {
      setVisibleSuggestions(getRandomItems(suggestions, maxToShow));
      setIsLoading(false);
      return;
    }

    const currentCached = loadCachedQuestions(
      cacheKey,
      seedQuestionsCacheMinutes,
    );
    if (currentCached && currentCached.length > 0) {
      setVisibleSuggestions(currentCached);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const normalizedTopics = normalizeTopics(topics);

    const payload = {
      topics: normalizedTopics,
      count: maxToShow || 6,
    };

    fetch('/_rq/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : { questions: [] }))
      .then((data) => {
        clearTimeout(timeoutId);
        if (isMounted) {
          if (Array.isArray(data?.questions) && data.questions.length > 0) {
            saveCachedQuestions(cacheKey, data.questions);
            setVisibleSuggestions(data.questions);
          } else {
            setVisibleSuggestions(getRandomItems(suggestions, maxToShow));
          }
          setIsLoading(false);
        }
      })
      .catch(() => {
        clearTimeout(timeoutId);
        if (isMounted) {
          setVisibleSuggestions(getRandomItems(suggestions, maxToShow));
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [
    enableGeneratedSeedQuestions,
    cacheKey,
    seedQuestionsCacheMinutes,
    maxToShow,
    suggestions,
    topics,
  ]);

  return { suggestions: visibleSuggestions, isLoading };
}
