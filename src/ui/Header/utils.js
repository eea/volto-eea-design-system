/**
 * Utility functions for Header component
 */

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
