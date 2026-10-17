/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

function useFirstVisited(ref, rootMargin = '0px') {
  const [intersected, setIntersected] = React.useState(false);

  React.useEffect(() => {
    if (intersected) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersected(intersected === false ? entry.isIntersecting : true);
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
      if (ref?.current && typeof observer.unobserve === 'function') {
        observer.unobserve(ref.current);
      }
      if (typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, [ref, rootMargin, intersected]);
  return intersected;
}

export default useFirstVisited;
