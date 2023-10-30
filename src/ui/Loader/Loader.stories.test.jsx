import React from 'react';
import { render } from '@testing-library/react';
import { FullPageLoader, Default } from './Loader.stories';
import '@testing-library/jest-dom/extend-expect';

describe('FullPageLoader component', () => {
  it('renders corectly', () => {
    const { container, getByText } = render(
      <FullPageLoader {...FullPageLoader.args} />,
    );

    expect(container.querySelector('.dimmer .loader')).toBeInTheDocument();
    expect(getByText(FullPageLoader.args.content)).toBeInTheDocument();
    expect(
      container.querySelector(
        'img[src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"]',
      ),
    ).toBeInTheDocument();
  });
});

describe('Default component', () => {
  it('renders corectly', () => {
    const { container } = render(<Default {...Default.args} />);

    expect(
      container.querySelector(`.${Default.args.size}.active`),
    ).toBeInTheDocument();
  });
});
