import React from 'react';
import { render } from '@testing-library/react';
import {
  RelatedContentInTab,
  DefaultOdd,
  DefaultEven,
} from './RelatedContent.stories';
import '@testing-library/jest-dom/extend-expect';

describe('RelatedContentInTab component', () => {
  it('renders corectly', () => {
    const { getByText } = render(
      <RelatedContentInTab {...RelatedContentInTab.args} />,
    );

    RelatedContentInTab.args.panes.forEach((element) =>
      expect(getByText(element.menuItem)).toBeInTheDocument(),
    );
  });

  it('renders corectly', () => {
    render(
      <RelatedContentInTab {...RelatedContentInTab.args} panes={undefined} />,
    );
  });
});

describe('DefaultOdd component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<DefaultOdd {...DefaultOdd.args} />);

    DefaultOdd.args.publicationCards.forEach((element) => {
      expect(getByText(element.description)).toBeInTheDocument();
    });
    expect(getByText(DefaultOdd.args.publicationCards[0].tag)).tohaveLength(3);
  });
});

describe('DefaultEven component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<DefaultEven {...DefaultEven.args} />);

    DefaultEven.args.publicationCards.forEach((element) => {
      expect(getByText(element.description)).toBeInTheDocument();
    });
  });
});
