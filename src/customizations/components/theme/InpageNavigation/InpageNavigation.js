import React, { useState, useEffect } from 'react';
import { Container, Icon } from 'semantic-ui-react';

function InpageNavigation({ linkId }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [removeClass, setRemoveClass] = useState('hidden');

  const handleInpageNavigationVisibility = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (scrollPosition > 50) {
      return setRemoveClass('');
    } else {
      return setRemoveClass('hidden');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleInpageNavigationVisibility);
  });

  const onInpageNavigationClick = () => {
    //setRemoveClass("hidden",() =>{window.scrollTo(0,0);});
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <div
        id="inpage-navigation"
        onClick={onInpageNavigationClick}
        role="none"
        className={removeClass}
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

export default InpageNavigation;
