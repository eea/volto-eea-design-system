import { useCallback, useEffect, useState } from 'react';

/**
 * AI Summary opt-in/opt-out state.
 *
 * Shared contract with the AI summary gating in
 * @eeacms/volto-searchlib (lib/aiSummaryToggle):
 * - the header search icons in this addon use the state to decide between
 *   the AI sparkle and the plain magnifier
 * - the advanced-search AI Summary box (volto-searchlib) hosts the
 *   user-facing opt-in/opt-out controls
 * - localStorage key: `eea-ai-summary-enabled` ("1" on, "0" off, default on)
 * - CustomEvent `eea:ai-summary-toggle` (detail: boolean) for same-tab sync
 * - native `storage` event for cross-tab sync
 */

export const AI_SUMMARY_STORAGE_KEY = 'eea-ai-summary-enabled';
export const AI_SUMMARY_TOGGLE_EVENT = 'eea:ai-summary-toggle';

// The hooks render during SSR, where window/localStorage do not exist;
// storage access defaults to the enabled state until the client re-reads it.
const getStorage = () =>
  typeof window === 'undefined' ? null : window.localStorage;

export const readAISummaryEnabled = (storage = getStorage()) =>
  storage ? storage.getItem(AI_SUMMARY_STORAGE_KEY) !== '0' : true;

export const writeAISummaryEnabled = (enabled, storage = getStorage()) => {
  if (!storage) return;
  storage.setItem(AI_SUMMARY_STORAGE_KEY, enabled ? '1' : '0');
  window.dispatchEvent(
    new CustomEvent(AI_SUMMARY_TOGGLE_EVENT, { detail: enabled }),
  );
};

export const useAISummaryToggle = () => {
  const [enabled, setEnabled] = useState(readAISummaryEnabled);

  useEffect(() => {
    const onToggleEvent = (event) => {
      if (typeof event?.detail === 'boolean') setEnabled(event.detail);
    };
    const onStorageEvent = (event) => {
      if (event.key === AI_SUMMARY_STORAGE_KEY) {
        setEnabled(event.newValue !== '0');
      }
    };
    window.addEventListener(AI_SUMMARY_TOGGLE_EVENT, onToggleEvent);
    window.addEventListener('storage', onStorageEvent);
    return () => {
      window.removeEventListener(AI_SUMMARY_TOGGLE_EVENT, onToggleEvent);
      window.removeEventListener('storage', onStorageEvent);
    };
  }, []);

  const toggle = useCallback(() => {
    const next = !readAISummaryEnabled();
    writeAISummaryEnabled(next);
    setEnabled(next);
  }, []);

  return [enabled, toggle];
};
