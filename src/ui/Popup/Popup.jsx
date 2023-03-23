import React from 'react';
import { createPopper } from '@popperjs/core';
import EventStack from '@semantic-ui-react/event-stack';

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.triggerRef = React.createRef();
    this.popupRef = React.createRef();

    this.state = {
      isOpen: false,
    };

    this.togglePopup = this.togglePopup.bind(this);
    this.closeOnEscape = this.closeOnEscape.bind(this);
  }

  componentDidMount() {
    this.popper = createPopper(this.triggerRef.current, this.popupRef.current, {
      placement: this.props.position || 'bottom-end',
      strategy: this.props.positionFixed || 'absolute',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: this.props.offset || [0, 0],
          },
        },
        ...(this.props.popperModifiers || []),
      ],
    });
  }

  componentWillUnmount() {
    this.popper && this.popper.destroy();
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
    return (
      <React.Fragment>
        {this.props.trigger &&
          React.cloneElement(this.props.trigger, {
            onClick: this.togglePopup,
            ref: this.triggerRef,
          })}

        <div className="popup-container" ref={this.popupRef}>
          {this.state.isOpen && (
            <EventStack name="keydown" on={this.closeOnEscape} />
          )}
          <React.Fragment>
            <div
              className={`ui bottom center small popup transition ${
                this.props.className ? this.props.className : ''
              } ${this.state.isOpen ? 'visible' : ''}`}
            >
              {this.props.content}
            </div>
          </React.Fragment>
        </div>
      </React.Fragment>
    );
  }
}

export default Popup;
