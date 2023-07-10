import React from 'react';
import { render } from '@testing-library/react';
import {
  FlexGroup,
  DefaultGroup,
  DefaultItem,
} from './ItemGroupWithIcons.stories';
import '@testing-library/jest-dom/extend-expect';

describe('FlexGroup component', () => {
  it('renders correctly', () => {
    const { container, queryAllByText } = render(
      <FlexGroup {...FlexGroup.args} />,
    );

    expect(
      container.querySelector('.ui.unstackable.items.row.flex-items-wrapper'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[src="globe-eco.svg"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[src="sustainable.svg"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[src="data-analytics.svg"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[src="network.svg"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[src="globe-eco.svg"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[src="knowledge.svg"]'),
    ).toBeInTheDocument();

    FlexGroup.args.Items.forEach((item) => {
      expect(queryAllByText(item.description)).not.toBeNull();
    });
  });
});

describe('DefaultGroup component', () => {
  it('renders correctly', () => {
    const { container, queryAllByText } = render(
      <DefaultGroup {...DefaultGroup.args} stackable={true} />,
    );

    expect(
      container.querySelector('.ui.unstackable.items.row'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[src="globe-eco.svg"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[src="sustainable.svg"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[src="data-analytics.svg"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[src="network.svg"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[src="globe-eco.svg"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[src="knowledge.svg"]'),
    ).toBeInTheDocument();

    DefaultGroup.args.ColumnLeft.forEach((item) => {
      expect(queryAllByText(item.description)).not.toBeNull();
    });
    DefaultGroup.args.ColumnRight.forEach((item) => {
      expect(queryAllByText(item.description)).not.toBeNull();
    });
  });
});

describe('DefaultGroup component', () => {
  it('renders correctly', () => {
    const { container, queryAllByText } = render(
      <DefaultGroup {...DefaultGroup.args} mediaType={'icon'} />,
    );

    expect(
      container.querySelector('.icon.medium.ri-earth-line.secondary'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.icon.medium.ri-leaf-line.secondary'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.icon.medium.ri-pie-chart-line.secondary'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.icon.medium.ri-pin-distance-line.secondary'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.icon.medium.ri-line-chart-line.secondary'),
    ).toBeInTheDocument();

    DefaultGroup.args.ColumnLeft.forEach((item) => {
      expect(queryAllByText(item.description)).not.toBeNull();
    });
    DefaultGroup.args.ColumnRight.forEach((item) => {
      expect(queryAllByText(item.description)).not.toBeNull();
    });
  });
});

describe('DefaultItem component', () => {
  it('renders correctly', () => {
    const { container } = render(<DefaultItem {...DefaultItem.args} />);
    expect(
      container.querySelector('.ui.unstackable.items.row'),
    ).toBeInTheDocument();
  });
});
