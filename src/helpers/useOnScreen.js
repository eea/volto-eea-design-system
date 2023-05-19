/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (mounted === false) {
          setIntersecting(entry.isIntersecting);
          if (entry.isIntersecting === true) setMounted(true);
        }
      },
      {
        rootMargin,
        threshold: 0,
        root: null,
      },
    );
    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref?.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, [ref, rootMargin, mounted]);
  return isIntersecting;
}

export default useOnScreen;
