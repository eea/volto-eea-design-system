import React from 'react';
import { doesNodeContainClick } from 'semantic-ui-react/dist/commonjs/lib';

/**
 * Call the callback when a click happens outside the referenced element
 */
export default function useClickOutside({ nodeRef, callback }) {
  const handleClickOutside = React.useCallback(
    (e) => {
      if (nodeRef.current && doesNodeContainClick(nodeRef.current, e)) return;
      callback();
    },
    [callback, nodeRef],
  );

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, false);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false);
    };
  }, [handleClickOutside]);

  return null;
}
