import React from 'react';
import { render } from '@testing-library/react';
import { Playground, Default } from './Hero.st';
import '@testing-library/jest-dom/extend-expect';

describe('Playground component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(
      <Playground {...Playground.args} />,
    );

    expect(getByText(Playground.args.text)).toBeInTheDocument();
    expect(getByText(Playground.args.buttonLabel)).toBeInTheDocument();
    expect(getByText(Playground.args.buttonLabel)).toHaveClass(
      'ui inverted button primary',
    );
    expect(container.querySelector('.eea.copyright')).toBeInTheDocument();
    expect(getByText(Playground.args.copyrightPrefix)).toHaveClass(
      'icon-prefix',
    );
    expect(
      container.querySelector(`.icon.${Playground.args.copyrightIcon}`),
    ).toBeInTheDocument();
    expect(getByText(Playground.args.copyright)).toHaveClass('icon-content');
  });
});

describe('Default component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Default {...Default.args} />);

    expect(getByText(Default.args.text)).toBeInTheDocument();
    expect(getByText(Default.args.buttonLabel)).toBeInTheDocument();
    expect(getByText(Default.args.buttonLabel)).toHaveClass(
      'ui inverted button primary',
    );
    expect(container.querySelector('.eea.copyright')).toBeInTheDocument();
    expect(getByText(Default.args.copyrightPrefix)).toHaveClass('icon-prefix');
    expect(
      container.querySelector(`.icon.${Default.args.copyrightIcon}`),
    ).toBeInTheDocument();
    expect(getByText(Default.args.copyright)).toHaveClass('icon-content');
  });

  it('renders correctly', () => {
    const { container, getByText } = render(
      <Default
        {...Default.args}
        image={false}
        fullWidth={false}
        fullHeight={false}
      />,
    );

    expect(getByText(Default.args.text)).toBeInTheDocument();
    expect(getByText(Default.args.buttonLabel)).toBeInTheDocument();
    expect(getByText(Default.args.buttonLabel)).toHaveClass(
      'ui inverted button primary',
    );
    expect(container.querySelector('.eea.copyright')).toBeInTheDocument();
    expect(getByText(Default.args.copyrightPrefix)).toHaveClass('icon-prefix');
    expect(
      container.querySelector(`.icon.${Default.args.copyrightIcon}`),
    ).toBeInTheDocument();
    expect(getByText(Default.args.copyright)).toHaveClass('icon-content');
  });
});
