import React, { useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import EventStack from '@semantic-ui-react/event-stack';
import cx from 'classnames';

export const positionsMapping = {
  'top center': 'top',
  'top left': 'top-start',
  'top right': 'top-end',
  'bottom center': 'bottom',
  'bottom left': 'bottom-start',
  'bottom right': 'bottom-end',
  'right center': 'right',
  'left center': 'left',
};

function Popup(props) {
  const triggerRef = useRef(null);
  const popupRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const options = {
    placement: positionsMapping[props.position] || 'bottom-end',
    strategy: props.positionFixed || 'absolute',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: props.offset,
        },
      },
      ...props.popperModifiers,
    ],
  };

  const { styles, attributes, update } = usePopper(
    triggerRef.current,
    popupRef.current,
    options,
  );

  useEffect(() => {
    const updatePlacement = async () => {
      if (typeof update === 'function') await update();
    };
    updatePlacement();
  }, [isOpen, update]);

  const handleClickOutside = (event) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      !triggerRef.current.contains(event.target)
    ) {
      if (isOpen) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const togglePopup = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeOnEscape = (e) => {
    if (e.key === 'Escape') {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }
  };

  const { trigger, className, size, position, basic, content, on } = props;

  const onEvent = 'on' + on.charAt(0).toUpperCase() + on.slice(1);
  return (
    <React.Fragment>
      {trigger && (
        <div className="popup-trigger" ref={triggerRef}>
          {React.cloneElement(trigger, {
            [onEvent]: togglePopup,
          })}
        </div>
      )}

      <div
        className="popup-container"
        ref={popupRef}
        style={styles.popper}
        {...attributes.popper}
      >
        {isOpen && <EventStack name="keydown" on={closeOnEscape} />}
        {isOpen && (
          <React.Fragment>
            <div
              className={cx(
                'ui popup transition',
                className,
                size,
                position,
                basic ? 'basic' : '',
                'visible',
              )}
            >
              {content}
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

Popup.defaultProps = {
  position: 'bottom center',
  basic: false,
  size: 'small',
  offset: [0, 0],
  positionFixed: false,
  className: '',
  wide: false,
  on: 'click',
  popperModifiers: [],
};

export default Popup;
