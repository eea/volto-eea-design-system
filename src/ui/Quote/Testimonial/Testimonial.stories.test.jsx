import React from 'react';
import { render } from '@testing-library/react';
import { Inline } from './Testimonial.stories';
import '@testing-library/jest-dom/extend-expect';

describe('Inline component', () => {
  it('renders corectly', () => {
    const { container, getByText } = render(<Inline {...Inline.args} />);

    expect(
      container.querySelector(`div[quote="${Inline.args.quote}"]`),
    ).toBeInTheDocument();
    expect(getByText(Inline.args.avatartitle)).toBeInTheDocument();
    expect(getByText(Inline.args.avatarinfo)).toBeInTheDocument();
    expect(getByText(Inline.args.title)).toBeInTheDocument();
    expect(getByText(Inline.args.quote)).toBeInTheDocument();
  });
});
