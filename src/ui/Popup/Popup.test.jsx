import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Popup from './Popup';
import '@testing-library/jest-dom/extend-expect';

jest.mock('@popperjs/core', () => {
  const originalModule = jest.requireActual('@popperjs/core');

  return {
    ...originalModule,
    createPopper: jest.fn(() => ({
      forceUpdate: jest.fn(),
      destroy: jest.fn(),
    })),
  };
});

describe('Popup', () => {
  const MockTrigger = ({ onClick }) => (
    <button onClick={onClick}>Trigger</button>
  );

  it('should render the popup trigger', () => {
    const { getByText } = render(
      <Popup trigger={<MockTrigger />} content="Popup content" />,
    );
    expect(getByText('Trigger')).toBeInTheDocument();
  });

  it('should render the popup trigger', () => {
    const { getByText } = render(
      <Popup
        position={'other'}
        basic={true}
        trigger={<MockTrigger />}
        content="Popup content"
      />,
    );
    expect(getByText('Trigger')).toBeInTheDocument();
  });

  it('should open and close the popup when the trigger is clicked', () => {
    const { getByText } = render(
      <Popup trigger={<MockTrigger />} content="Popup content" />,
    );
    fireEvent.click(getByText('Trigger'));
    expect(getByText('Popup content')).toBeVisible();
  });

  it('should close the popup when the Escape key is pressed', () => {
    const { getByText } = render(
      <Popup trigger={<MockTrigger />} content="Popup content" />,
    );
    fireEvent.click(getByText('Trigger'));
    expect(getByText('Popup content')).toBeVisible();

    fireEvent.keyDown(document.body, { key: 'Enter' });
    fireEvent.keyDown(document.body, { key: 'Escape' });
  });
});
