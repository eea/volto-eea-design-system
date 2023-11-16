import { act, renderHook } from '@testing-library/react-hooks';
import useClickOutside from './useClickOutside';
import { doesNodeContainClick } from 'semantic-ui-react/dist/commonjs/lib';

jest.mock('semantic-ui-react/dist/commonjs/lib', () => ({
  doesNodeContainClick: jest.fn(),
}));

describe('useClickOutside', () => {
  let ref;
  let callback;

  beforeEach(() => {
    ref = { current: {} };
    callback = jest.fn();
  });

  it('does not call callback function when clicked inside', () => {
    doesNodeContainClick.mockImplementation(() => true);

    const { rerender } = renderHook(() =>
      useClickOutside({ targetRefs: [ref], callback }),
    );

    act(() => {
      document.dispatchEvent(new MouseEvent('mousedown'));
    });

    rerender();

    expect(callback).not.toHaveBeenCalled();
  });

  it('calls callback function when clicked outside', () => {
    doesNodeContainClick.mockImplementation(() => false);

    const { rerender } = renderHook(() =>
      useClickOutside({ targetRefs: [ref], callback }),
    );

    act(() => {
      document.dispatchEvent(new MouseEvent('mousedown'));
    });

    rerender();

    expect(callback).toHaveBeenCalled();
  });

  it('calls callback function when clicked outside and no refs', () => {
    doesNodeContainClick.mockImplementation(() => false);

    const { rerender } = renderHook(() => useClickOutside({ callback }));

    act(() => {
      document.dispatchEvent(new MouseEvent('mousedown'));
    });

    rerender();

    expect(callback).toHaveBeenCalled();
  });
});
