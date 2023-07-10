import { renderHook } from '@testing-library/react-hooks';
import useFirstVisited from './useFirstVisited';

describe('useFirstVisited', () => {
  let observe;
  let unobserve;
  let callback;
  let disconnect;

  beforeEach(() => {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();

    window.IntersectionObserver = jest.fn(function (cb) {
      this.observe = observe;
      this.unobserve = unobserve;
      this.disconnect = disconnect;
      callback = cb;
    });
  });
  it('should set intersected to true when element is intersecting', async () => {
    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() => useFirstVisited(ref));
    const entry = { isIntersecting: true };

    expect(result.current).toBe(false); // Initial state
    callback([entry]);
    expect(result.current).toBe(true);
  });

  it('should unobserve and disconnect when ref changes or component unmounts', () => {
    const ref = { current: document.createElement('div') };
    const newRef = { current: document.createElement('div') };
    const { unmount, rerender } = renderHook(
      ({ ref }) => useFirstVisited(ref),
      {
        initialProps: { ref },
      },
    );

    expect(unobserve).not.toHaveBeenCalled();
    expect(disconnect).not.toHaveBeenCalled();

    rerender({ ref: newRef });
    expect(unobserve).toHaveBeenCalled();
    expect(disconnect).toHaveBeenCalled();

    unmount();

    expect(unobserve).toHaveBeenCalledTimes(2);
    expect(disconnect).toHaveBeenCalledTimes(2);
  });
});
