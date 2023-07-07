import React from 'react';
import { render } from '@testing-library/react';
import {
  Default,
  DefaultReversed,
  Multiple,
  MultipleReversed,
} from './Timeline.stories';
import '@testing-library/jest-dom/extend-expect';

describe('MultipleReversed component', () => {
  it('renders corectly', () => {
    const { getAllByText } = render(
      <MultipleReversed {...MultipleReversed.args} />,
    );

    expect(getAllByText(MultipleReversed.args.items[0].time)).toHaveLength(3);
  });
});

describe('Multiple component', () => {
  it('renders corectly', () => {
    const { getAllByText } = render(<Multiple {...Multiple.args} />);

    expect(getAllByText(Multiple.args.items[0].time)).toHaveLength(3);
  });
});

describe('DefaultReversed component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<DefaultReversed {...DefaultReversed.args} />);

    expect(getByText(DefaultReversed.args.time)).toBeInTheDocument();
  });
});

describe('Default component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<Default {...Default.args} />);

    expect(getByText(Default.args.time)).toBeInTheDocument();
  });
});
