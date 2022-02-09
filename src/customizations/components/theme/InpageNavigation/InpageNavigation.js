import React, { useState, useEffect, Component } from 'react';
import { Container, Icon } from 'semantic-ui-react';

class InpageNavigation extends Component {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [removeClass, setRemoveClass] = useState('hidden');

  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0,
      removeClass: 'hidden'
    };
  }

  handleInpageNavigationVisibility = () => {
    const position = window.scrollY;
    this.setState({scrollPosition: position})
    //setScrollPosition(position);

    if (this.state.scrollPosition > 50) {
      return this.setState({removeClass: ''});
    } else {
      return this.setState({removeClass: 'hidden'});
    }
  };

  componentDidMount() {
    window.addEventListener("scroll",this.handleInpageNavigationVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll",this.handleInpageNavigationVisibility);
  }

  onInpageNavigationClick = () => {
    //setRemoveClass("hidden",() =>{window.scrollTo(0,0);});
    window.scrollTo(0, 0);
  };

  render() {

    return (
      <Container>
        <div
          id="inpage-navigation"
          onClick={this.onInpageNavigationClick}
          role="none"
          className={this.state.removeClass}
        >
          <div id="navigation-text-tablet">
            <Icon name="chevron up" />
          </div>
          <div id="navigation-text-desktop">
            <Icon name="chevron up" /> Top
          </div>
        </div>
      </Container>
    );
  }
}

export default InpageNavigation;
