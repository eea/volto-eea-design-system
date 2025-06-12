import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {
  single as Single,
  optional as Optional,
  invalid as Invalid,
} from './Checkbox.stories';
import '@testing-library/jest-dom/extend-expect';

describe('Single', () => {
  it('renders correctly', () => {
    const { container, getByText, queryByText } = render(
      <Single {...Single.args} />,
    );
    expect(getByText(Single.args.label)).toBeInTheDocument();
    expect(queryByText(Single.args.requiredText)).toEqual(null);

    fireEvent.click(container.querySelector('#field4'));
  });

  it('renders correctly', () => {
    const { container, getByText } = render(
      <Single {...Single.args} required={true} invalid={true} />,
    );
    expect(getByText(Single.args.label)).toBeInTheDocument();
    expect(getByText(Single.args.requiredText)).toBeInTheDocument();

    fireEvent.click(container.querySelector('#field4'));
  });
});

describe('Optional', () => {
  it('renders correctly', () => {
    const { container, getByText, queryByText } = render(
      <Optional {...Optional.args} />,
    );
    expect(getByText(Optional.args.label)).toBeInTheDocument();
    expect(queryByText(Optional.args.requiredText)).toEqual(null);

    fireEvent.click(container.querySelector('#field1'));
    fireEvent.click(container.querySelector('#field2'));
    fireEvent.click(container.querySelector('#field3'));
  });

  it('renders correctly', () => {
    const { container, getByText } = render(
      <Optional {...Optional.args} required={true} />,
    );
    expect(getByText(Optional.args.label)).toBeInTheDocument();
    expect(getByText(Optional.args.requiredText)).toBeInTheDocument();

    fireEvent.click(container.querySelector('#field1'));
    fireEvent.click(container.querySelector('#field2'));
    fireEvent.click(container.querySelector('#field3'));
  });
});

describe('Invalid', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Invalid {...Invalid.args} />);
    expect(getByText(Invalid.args.label)).toBeInTheDocument();

    fireEvent.click(container.querySelector('#field1'));
    fireEvent.click(container.querySelector('#field2'));
    fireEvent.click(container.querySelector('#field3'));
  });

  it('renders correctly', () => {
    const { container, getByText } = render(
      <Invalid {...Invalid.args} required={true} />,
    );
    expect(getByText(Invalid.args.label)).toBeInTheDocument();
    expect(getByText(Invalid.args.requiredText)).toBeInTheDocument();

    fireEvent.click(container.querySelector('#field1'));
    fireEvent.click(container.querySelector('#field2'));
    fireEvent.click(container.querySelector('#field3'));
  });
});
