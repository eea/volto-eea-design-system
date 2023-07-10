import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Default } from './Accordion.stories';
import '@testing-library/jest-dom/extend-expect';

describe('Default component', () => {
  it('renders correctly and fires keyDown Enter events', () => {
    const { getByText, getAllByText } = render(<Default {...Default.args} />);

    Default.args.panels.forEach((panel) => {
      expect(getByText(panel.title)).toBeInTheDocument();
    });

    expect(getAllByText(Default.args.panels[0].content)).toHaveLength(3);
    fireEvent.keyDown(getByText(Default.args.panels[0].title), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    });

    fireEvent.keyDown(getByText(Default.args.panels[0].title), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    });
  });

  it('renders correctly and fires keyDown A event', () => {
    const { getByText, getAllByText } = render(
      <Default {...Default.args} title_size={'h1'} />,
    );

    Default.args.panels.forEach((panel) => {
      expect(getByText(panel.title)).toBeInTheDocument();
    });

    expect(getAllByText(Default.args.panels[0].content)).toHaveLength(3);
    fireEvent.keyDown(getByText(Default.args.panels[0].title), {
      key: 'A',
      code: 'KeyA',
    });
  });
});
