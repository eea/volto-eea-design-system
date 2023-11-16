import React from 'react';
import { render } from '@testing-library/react';
import { ErrorTextArea, LabeledTextArea, Default } from './Textarea.stories';
import '@testing-library/jest-dom/extend-expect';

describe('ErrorTextArea component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(
      <ErrorTextArea {...ErrorTextArea.args} />,
    );

    expect(getByText(ErrorTextArea.args.label)).toBeInTheDocument();
    expect(getByText('This is a mandatory field')).toBeInTheDocument();
    expect(
      container.querySelector('textarea[placeholder="Type here..."]'),
    ).toBeInTheDocument();
  });
});

describe('LabeledTextArea component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(
      <LabeledTextArea {...LabeledTextArea.args} />,
    );

    expect(getByText(LabeledTextArea.args.label)).toBeInTheDocument();
    expect(
      container.querySelector('textarea[placeholder="Type here..."]'),
    ).toBeInTheDocument();
  });
});

describe('Default component', () => {
  it('renders correctly', () => {
    const { container } = render(<Default {...Default.args} fluid={true} />);

    expect(
      container.querySelector('textarea[placeholder="Type here..."]'),
    ).toBeInTheDocument();
  });
});
