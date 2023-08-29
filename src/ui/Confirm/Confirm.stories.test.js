import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Default } from './Confirm.stories';
import '@testing-library/jest-dom/extend-expect';

describe('Default component', () => {
  it('renders correctly', () => {
    const { container, getByText, queryByText } = render(
      <Default {...Default.args} />,
    );

    expect(getByText('Show Confirmation')).toBeInTheDocument();
    expect(container.querySelector('.ui.primary.button')).toBeInTheDocument();

    fireEvent.click(container.querySelector('.ui.primary.button'));
    expect(getByText(Default.args.confirmHeader)).toBeInTheDocument();
    expect(getByText(Default.args.content)).toBeInTheDocument();
    expect(getByText(Default.args.cancelButton)).toBeInTheDocument();
    expect(getByText(Default.args.confirmButton)).toBeInTheDocument();

    fireEvent.click(getByText(Default.args.cancelButton));
    expect(queryByText(Default.args.confirmHeader)).toBeNull();
    expect(queryByText(Default.args.content)).toBeNull();
    expect(queryByText(Default.args.cancelButton)).toBeNull();
    expect(queryByText(Default.args.confirmButton)).toBeNull();
  });
});
