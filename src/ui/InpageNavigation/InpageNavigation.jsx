import React, { Component } from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';

class InpageNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0,
      removeClass: 'hidden',
    };
  }

  handleInpageNavigationVisibility = () => {
    const position = window.scrollY;
    this.setState({ scrollPosition: position });

    if (this.state.scrollPosition > 50) {
      return this.setState({ removeClass: '' });
    } else {
      return this.setState({ removeClass: 'hidden' });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleInpageNavigationVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleInpageNavigationVisibility);
  }

  onInpageNavigationClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <Container>
        <Button
          id="inpage-navigation"
          onClick={this.onInpageNavigationClick}
          className={this.state.removeClass}
        >
          <div className="mobile tablet only">
            <Icon className="ri-arrow-up-s-line" />
          </div>
          <div className="tablet or lower hidden">
            <Icon className="ri-arrow-up-s-line" />
            <div className="text">top</div>
          </div>
        </Button>
      </Container>
    );
  }
}

export default InpageNavigation;
