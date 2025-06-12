import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Default, Sortable, Responsive } from './Table.stories';
import '@testing-library/jest-dom/extend-expect';

describe('Responsive component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<Responsive {...Responsive.args} />);

    Responsive.args.headers.forEach((element) => {
      expect(getByText(element.name)).toBeInTheDocument();
    });

    Responsive.args.tableData.forEach((element) => {
      expect(getByText(element.col1)).toBeInTheDocument();
      expect(getByText(element.col2)).toBeInTheDocument();
      expect(getByText(element.col3)).toBeInTheDocument();
    });
  });
});

describe('Sortable component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<Sortable {...Sortable.args} />);

    Sortable.args.headers.forEach((element) => {
      expect(getByText(element.name)).toBeInTheDocument();
    });

    Sortable.args.tableData.forEach((element) => {
      expect(getByText(element.col1)).toBeInTheDocument();
      expect(getByText(element.col2)).toBeInTheDocument();
      expect(getByText(element.col3)).toBeInTheDocument();
    });

    fireEvent.click(getByText(Sortable.args.headers[0].name));
  });
});

describe('Default component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<Default {...Default.args} />);

    Default.args.headers.forEach((element) => {
      expect(getByText(element.name)).toBeInTheDocument();
    });

    Default.args.tableData.forEach((element) => {
      expect(getByText(element.col1)).toBeInTheDocument();
      expect(getByText(element.col2)).toBeInTheDocument();
      expect(getByText(element.col3)).toBeInTheDocument();
    });
  });
});
