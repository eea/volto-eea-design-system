/**
 * Tests for Header utility functions
 */

import {
  findBestMatchingMenuItem,
  isMenuItemActive,
  numberToColumnString,
  numbersToMenuItemColumns,
} from './utils';

describe('Header utils', () => {
  describe('findBestMatchingMenuItem', () => {
    test('finds exact match over prefix match', () => {
      const menuItems = [
        { url: '/topics', items: [] },
        { url: '/topics/climate', items: [] },
      ];

      const result = findBestMatchingMenuItem(menuItems, '/topics/climate');
      expect(result.bestMatchUrl).toBe('/topics/climate');
      expect(result.bestScore).toBe('/topics/climate'.length + 1);
    });

    test('finds parent match when no exact match', () => {
      const menuItems = [
        { url: '/topics', items: [] },
        { url: '/countries', items: [] },
      ];

      const result = findBestMatchingMenuItem(
        menuItems,
        '/topics/climate/overview',
      );
      expect(result.bestMatchUrl).toBe('/topics');
      expect(result.bestScore).toBe('/topics'.length);
    });

    test('handles @id property', () => {
      const menuItems = [{ '@id': '/topics', url: '/topics', items: [] }];

      const result = findBestMatchingMenuItem(menuItems, '/topics');
      expect(result.bestMatchUrl).toBe('/topics');
    });

    test('returns null for no match', () => {
      const menuItems = [{ url: '/topics', items: [] }];

      const result = findBestMatchingMenuItem(
        menuItems,
        '/completely-different',
      );
      expect(result.bestMatchUrl).toBe(null);
      expect(result.bestScore).toBe(-1);
    });

    test('handles menu items with empty/null urls', () => {
      const menuItems = [
        { url: '', items: [] },
        { url: null, items: [] },
        { '@id': null, url: undefined, items: [] },
        { url: '/valid', items: [] },
      ];

      const result = findBestMatchingMenuItem(menuItems, '/valid');
      expect(result.bestMatchUrl).toBe('/valid');
      expect(result.bestScore).toBe('/valid'.length + 1);
    });

    test('handles empty menuItems array', () => {
      const result = findBestMatchingMenuItem([], '/test');
      expect(result.bestMatchUrl).toBe(null);
      expect(result.bestScore).toBe(-1);
    });

    test('handles null/undefined menuItems', () => {
      const result1 = findBestMatchingMenuItem(null, '/test');
      expect(result1.bestMatchUrl).toBe(null);
      expect(result1.bestScore).toBe(-1);

      const result2 = findBestMatchingMenuItem(undefined, '/test');
      expect(result2.bestMatchUrl).toBe(null);
      expect(result2.bestScore).toBe(-1);
    });

    test('handles empty/null activeItem', () => {
      const menuItems = [{ url: '/topics', items: [] }];

      const result1 = findBestMatchingMenuItem(menuItems, '');
      expect(result1.bestMatchUrl).toBe(null);
      expect(result1.bestScore).toBe(-1);

      const result2 = findBestMatchingMenuItem(menuItems, null);
      expect(result2.bestMatchUrl).toBe(null);
      expect(result2.bestScore).toBe(-1);

      const result3 = findBestMatchingMenuItem(menuItems, undefined);
      expect(result3.bestMatchUrl).toBe(null);
      expect(result3.bestScore).toBe(-1);
    });
  });

  describe('isMenuItemActive', () => {
    test('returns true when item matches best match', () => {
      const menuItem = { url: '/topics/climate', items: [] };
      const result = isMenuItemActive(menuItem, '/topics/climate', 10);
      expect(result).toBe(true);
    });

    test('returns false when item does not match best match', () => {
      const menuItem = { url: '/topics', items: [] };
      const result = isMenuItemActive(menuItem, '/topics/climate', 10);
      expect(result).toBe(false);
    });

    test('returns false when no valid match (score < 0)', () => {
      const menuItem = { url: '/topics', items: [] };
      const result = isMenuItemActive(menuItem, null, -1);
      expect(result).toBe(false);
    });

    test('handles @id property', () => {
      const menuItem = { '@id': '/topics', url: '/topics', items: [] };
      const result = isMenuItemActive(menuItem, '/topics', 10);
      expect(result).toBe(true);
    });
  });

  describe('numberToColumnString', () => {
    test('converts number 1 to "one wide column"', () => {
      expect(numberToColumnString(1)).toBe('one wide column');
    });

    test('converts number 2 to "two wide column"', () => {
      expect(numberToColumnString(2)).toBe('two wide column');
    });

    test('converts number 3 to "three wide column"', () => {
      expect(numberToColumnString(3)).toBe('three wide column');
    });

    test('converts number 4 to "four wide column"', () => {
      expect(numberToColumnString(4)).toBe('four wide column');
    });

    test('converts number 5 to "five wide column"', () => {
      expect(numberToColumnString(5)).toBe('five wide column');
    });

    test('converts number 6 to "six wide column"', () => {
      expect(numberToColumnString(6)).toBe('six wide column');
    });

    test('converts number 7 to "seven wide column"', () => {
      expect(numberToColumnString(7)).toBe('seven wide column');
    });

    test('converts number 8 to "eight wide column"', () => {
      expect(numberToColumnString(8)).toBe('eight wide column');
    });

    test('converts number 9 to "nine wide column"', () => {
      expect(numberToColumnString(9)).toBe('nine wide column');
    });

    test('returns empty string for number 0', () => {
      expect(numberToColumnString(0)).toBe('');
    });

    test('returns empty string for numbers > 9', () => {
      expect(numberToColumnString(10)).toBe('');
      expect(numberToColumnString(100)).toBe('');
    });

    test('returns empty string for negative numbers', () => {
      expect(numberToColumnString(-1)).toBe('');
    });
  });

  describe('numbersToMenuItemColumns', () => {
    test('converts array of numbers to column strings', () => {
      const result = numbersToMenuItemColumns([1, 2, 3]);
      expect(result).toEqual([
        'one wide column',
        'two wide column',
        'three wide column',
      ]);
    });

    test('filters out invalid numbers (0, negative, > 9)', () => {
      const result = numbersToMenuItemColumns([0, 1, 2, 10, -1, 3]);
      expect(result).toEqual([
        'one wide column',
        'two wide column',
        'three wide column',
      ]);
    });

    test('handles string numbers by parsing them', () => {
      const result = numbersToMenuItemColumns(['1', '2', '3']);
      expect(result).toEqual([
        'one wide column',
        'two wide column',
        'three wide column',
      ]);
    });

    test('handles empty array', () => {
      const result = numbersToMenuItemColumns([]);
      expect(result).toEqual([]);
    });

    test('handles array with all invalid numbers', () => {
      const result = numbersToMenuItemColumns([0, 10, -1, 100]);
      expect(result).toEqual([]);
    });
  });
});
