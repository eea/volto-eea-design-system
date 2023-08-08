/* Simplified popup with several options found in the semantic ui implementation
 * https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/modules/Popup/Popup.js
 *  */
import React from 'react';
import { createPopper } from '@popperjs/core';
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

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.triggerRef = React.createRef();
    this.popupRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = {
      isOpen: false,
    };

    this.togglePopup = this.togglePopup.bind(this);
    this.closeOnEscape = this.closeOnEscape.bind(this);
  }

  componentDidMount() {
    this.popper = createPopper(this.triggerRef.current, this.popupRef.current, {
      placement: positionsMapping[this.props.position] || 'bottom-end',
      strategy: this.props.positionFixed || 'absolute',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: this.props.offset,
          },
        },
        ...this.props.popperModifiers,
      ],
    });
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    this.popper && this.popper.destroy();
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    const position = nextProps.position;
    if (
      position &&
      this.popper.state.placement !== positionsMapping[position]
    ) {
      this.popper.setOptions({
        placement: positionsMapping[position] || 'bottom-end',
      });
    }
  }

  handleClickOutside(event) {
    if (
      this.popupRef &&
      !this.popupRef.current.contains(event.target) &&
      !this.triggerRef.current.contains(event.target)
    ) {
      if (this.state.isOpen) {
        this.setState((state) => {
          return {
            isOpen: false,
          };
        });
      }
    }
  }

  togglePopup() {
    this.setState(
      (state) => {
        return {
          isOpen: !state.isOpen,
        };
      },
      () => {
        this.popper.forceUpdate();
      },
    );
  }
  closeOnEscape(e) {
    if (e.key === 'Escape') {
      this.setState((state) => {
        return {
          isOpen: !state.isOpen,
        };
      });
    }
  }

  render() {
    const { trigger, className, size, position, basic, content } = this.props;
    const event = this.props.on;
    const onEvent = 'on' + event.charAt(0).toUpperCase() + event.slice(1);
    return (
      <React.Fragment>
        {trigger && (
          <div className="popup-trigger" ref={this.triggerRef}>
            {React.cloneElement(trigger, {
              [onEvent]: this.togglePopup,
            })}
          </div>
        )}

        <div className="popup-container" ref={this.popupRef}>
          {this.state.isOpen && (
            <EventStack name="keydown" on={this.closeOnEscape} />
          )}
          <React.Fragment>
            <div
              className={cx(
                'ui popup transition',
                className,
                size,
                position,
                basic ? 'basic' : '',
                this.state.isOpen ? 'visible' : '',
              )}
            >
              {content}
            </div>
          </React.Fragment>
        </div>
      </React.Fragment>
    );
  }
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
  // disabled,
  // flowing,
  // header,
  // inverted,
  // pinned,
  // popper,
  // popperDependencies,
  // style,
};

export default Popup;
