import React from 'react';
import { render } from '@testing-library/react';
import { DividerWithContent, Default } from './Divider.stories';
import '@testing-library/jest-dom/extend-expect';

describe('DividerWithContent component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(
      <DividerWithContent {...DividerWithContent.args} />,
    );

    expect(getByText('Divider Content')).toBeInTheDocument();
    expect(container.querySelector('.ui.container p')).toBeInTheDocument();
    expect(container.querySelector('.ui.divider')).toBeInTheDocument();
  });

  it('renders correctly with className', () => {
    const { container, getByText } = render(
      <DividerWithContent {...DividerWithContent.args} theme={'primary'} />,
    );

    expect(getByText('Divider Content')).toBeInTheDocument();
    expect(container.querySelector('.ui.container p')).toBeInTheDocument();
    expect(container.querySelector('.ui.divider.primary')).toBeInTheDocument();
  });
});

describe('Default component', () => {
  it('renders correctly', () => {
    const { container } = render(<Default {...Default.args} />);

    expect(container.querySelector('.ui.container p')).toBeInTheDocument();
    expect(container.querySelector('.ui.divider')).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container } = render(
      <Default {...Default.args} theme={'primary'} short={true} />,
    );

    expect(container.querySelector('.ui.container p')).toBeInTheDocument();
    expect(container.querySelector('.ui.divider')).toBeInTheDocument();
  });
});
