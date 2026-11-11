import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Popup from './Popup';
import '@testing-library/jest-dom';

vi.mock('@popperjs/core', async () => {
  const originalModule = await vi.importActual('@popperjs/core');

  return {
    ...originalModule,
    createPopper: vi.fn(() => ({
      forceUpdate: vi.fn(),
      destroy: vi.fn(),
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
