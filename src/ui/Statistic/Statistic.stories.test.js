import React from 'react';
import { render } from '@testing-library/react';
import {
  Default,
  Group,
  Custom,
  Animation,
  AnimationGroup,
} from './Statistic.stories';
import '@testing-library/jest-dom/extend-expect';

describe('AnimationGroup component', () => {
  let observe;
  let unobserve;
  let callback;
  let disconnect;
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();

  window.IntersectionObserver = jest.fn(function (cb) {
    this.observe = observe;
    this.unobserve = unobserve;
    this.disconnect = disconnect;
    callback = cb;
  });
  it('renders a button with label', () => {
    const { getByText } = render(<AnimationGroup {...AnimationGroup.args} />);

    expect(
      getByText(AnimationGroup.args.elements[0].label),
    ).toBeInTheDocument();
    expect(
      getByText(AnimationGroup.args.elements[1].label),
    ).toBeInTheDocument();
    expect(
      getByText(AnimationGroup.args.elements[2].label),
    ).toBeInTheDocument();
  });
});

describe('Animation component', () => {
  let observe;
  let unobserve;
  let callback;
  let disconnect;
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();

  window.IntersectionObserver = jest.fn(function (cb) {
    this.observe = observe;
    this.unobserve = unobserve;
    this.disconnect = disconnect;
    callback = cb;
  });
  it('renders a button with label', () => {
    const { getByText } = render(<Animation {...Animation.args} />);

    expect(getByText('Count up label')).toBeInTheDocument();
    expect(getByText('Start')).toBeInTheDocument();
    expect(getByText('Reset')).toBeInTheDocument();
    expect(getByText('Pause/Resume')).toBeInTheDocument();
  });
});

describe('Custom component', () => {
  it('renders a button with label', () => {
    const { getByText, getAllByText } = render(<Custom {...Custom.args} />);

    Custom.args.elements.forEach((element) => {
      expect(getByText(element.value)).toBeInTheDocument();
      expect(getByText(element.label)).toBeInTheDocument();
    });
    expect(getAllByText('Text from slate')).toHaveLength(3);
  });
});

describe('Group component', () => {
  it('renders a button with label', () => {
    const { getByText } = render(<Group {...Group.args} />);

    Group.args.elements.forEach((element) => {
      expect(getByText(element.value)).toBeInTheDocument();
      expect(getByText(element.label)).toBeInTheDocument();
    });
  });
});

describe('Default component', () => {
  it('renders a button with label', () => {
    const { getByText } = render(<Default {...Default.args} />);

    expect(getByText(Default.args.label)).toBeInTheDocument();
    expect(getByText(Default.args.value)).toBeInTheDocument();
  });
});
