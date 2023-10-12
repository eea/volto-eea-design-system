import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LanguageLabeledIcon from './LanguageLabeledIcon';
import '@testing-library/jest-dom/extend-expect';

jest.mock('semantic-ui-react', () => {
  return {
    Popup: ({ trigger, content }) => <div>{content}</div>,
  };
});

const items = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'ro',
    name: 'Romania',
  },
];

describe('LanguageLabeledIcon component', () => {
  it('renders corectly', () => {
    render(<LanguageLabeledIcon />);
  });

  it('renders languages dropdown', () => {
    const { getByText } = render(
      <>
        <LanguageLabeledIcon>
          <LanguageLabeledIcon.Dropdown items={items} />
          <LanguageLabeledIcon.Label>
            <p>Test</p>
          </LanguageLabeledIcon.Label>
        </LanguageLabeledIcon>
      </>,
    );

    expect(getByText('English')).toBeInTheDocument();
    expect(getByText('Romania')).toBeInTheDocument();
    expect(getByText('Test')).toBeInTheDocument();

    fireEvent.click(getByText('EN'));
    fireEvent.click(getByText('RO'));
  });

  it('renders languages dropdown', () => {
    const { getByText } = render(
      <>
        <LanguageLabeledIcon>
          <LanguageLabeledIcon.Icon icon={'testIcon'} />
        </LanguageLabeledIcon>
      </>,
    );

    expect(getByText('EN')).toBeInTheDocument();
    expect(getByText('testIcon')).toBeInTheDocument();
  });
});
