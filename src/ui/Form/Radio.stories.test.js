import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Default, invalid as Invalid, BinaryRadio } from './Radio.stories';
import '@testing-library/jest-dom/extend-expect';

describe('BinaryRadio component', () => {
  it('renders corectly', () => {
    const { container, getByText, queryByText } = render(
      <BinaryRadio {...BinaryRadio.args} />,
    );

    expect(getByText(BinaryRadio.args.label)).toBeInTheDocument();
    expect(queryByText(BinaryRadio.args.requiredText)).toEqual(null);

    fireEvent.click(container.querySelector('#radio-yes'));
  });

  it('renders corectly', () => {
    const { getByText } = render(
      <BinaryRadio {...BinaryRadio.args} required={true} invalid={true} />,
    );

    expect(getByText(BinaryRadio.args.label)).toBeInTheDocument();
    expect(getByText(BinaryRadio.args.requiredText)).toBeInTheDocument();
  });
});

describe('Invalid component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<Invalid {...Invalid.args} />);

    expect(getByText(Invalid.args.label)).toBeInTheDocument();
    expect(getByText(Invalid.args.requiredText)).toBeInTheDocument();
  });
});

describe('Default component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<Default {...Default.args} />);

    expect(getByText(Default.args.label)).toBeInTheDocument();
    expect(getByText(Default.args.requiredText)).toBeInTheDocument();
  });

  it('renders corectly', () => {
    const { container, getByText, queryByText } = render(
      <Default {...Default.args} required={false} />,
    );

    expect(getByText(Default.args.label)).toBeInTheDocument();
    expect(queryByText(Default.args.requiredText)).toEqual(null);

    fireEvent.click(container.querySelector('#field1'));
  });
});
