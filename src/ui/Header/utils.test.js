/**
 * Tests for Header utility functions
 */

import { findBestMatchingMenuItem, isMenuItemActive } from './utils';

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
});
