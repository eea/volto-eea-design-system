import React from 'react';
import { render } from '@testing-library/react';
import { Default, Basic, Corner, Ribbon } from './Label.stories';
import '@testing-library/jest-dom/extend-expect';

describe('Basic component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Basic {...Basic.args} />);
    expect(getByText(Basic.args.content)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { getByText } = render(<Basic {...Basic.args} importance={true} />);
    expect(getByText(Basic.args.content)).toBeInTheDocument();
  });
});

describe('Corner component', () => {
  it('renders correctly', () => {
    const { container } = render(<Corner {...Corner.args} />);
    expect(
      container.querySelector(
        'img[src="https://react.semantic-ui.com/images/wireframe/image.png"]',
      ),
    ).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container } = render(<Corner importance={true} />);
    expect(
      container.querySelector(
        'img[src="https://react.semantic-ui.com/images/wireframe/image.png"]',
      ),
    ).toBeInTheDocument();
  });
});

describe('Ribbon component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<Ribbon {...Ribbon.args} />);
    expect(getByText('Ribbon Label')).toBeInTheDocument();
    expect(container.querySelector('.ribbon.label')).toBeInTheDocument();
    expect(
      container.querySelector(
        'img[src="https://react.semantic-ui.com/images/wireframe/paragraph.png"]',
      ),
    ).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container, getByText } = render(
      <Ribbon {...Ribbon.args} importance={true} />,
    );
    expect(getByText('Ribbon Label')).toBeInTheDocument();
    expect(container.querySelector('.ribbon.label')).toBeInTheDocument();
    expect(
      container.querySelector(
        'img[src="https://react.semantic-ui.com/images/wireframe/paragraph.png"]',
      ),
    ).toBeInTheDocument();
  });
});

describe('Default component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Default {...Default.args} />);
    expect(getByText(Default.args.content)).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <Default {...Default.args} importance={true} />,
    );
    expect(getByText(Default.args.content)).toBeInTheDocument();
  });
});
