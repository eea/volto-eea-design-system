import React from 'react';
import { doesNodeContainClick } from 'semantic-ui-react/dist/commonjs/lib';

/**
 * Call the callback when a click happens outside the targetRefs elements
 */
export default function useClickOutside({ targetRefs = [], callback }) {
  const handleClickOutside = React.useCallback(
    (e) => {
      const isInsideTarget =
        targetRefs.findIndex(
          (nodeRef) =>
            nodeRef.current && doesNodeContainClick(nodeRef.current, e),
        ) > -1;

      if (isInsideTarget) return;
      callback();
    },
    [callback, targetRefs],
  );

  React.useLayoutEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, false);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false);
    };
  }, [handleClickOutside]);

  return null;
}
