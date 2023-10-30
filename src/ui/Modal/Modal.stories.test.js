import { render, fireEvent } from '@testing-library/react';
import { Default } from './Modal.stories';
import { Button } from 'semantic-ui-react';
import '@testing-library/jest-dom/extend-expect';

describe('Default component', () => {
  it('renders corectly', () => {
    const { getByText } = render(<Default {...Default.args} />);

    expect(getByText('Show Modal')).toBeInTheDocument();
    fireEvent.click(getByText('Show Modal'));
    expect(getByText('Modal Content')).toBeInTheDocument();
    expect(getByText('No')).toBeInTheDocument();
    expect(getByText('Yes')).toBeInTheDocument();

    fireEvent.click(getByText('No'));
    fireEvent.click(getByText('Show Modal'));
    // fireEvent.click(
    //   container.querySelector('button[title="Close modal dialog"]'),
    // );
  });

  it('renders corectly', () => {
    const { getByText } = render(
      <Default
        header={'Modal Header'}
        content={'Modal Content'}
        size={'mini'}
        trigger={<Button primary>Show Modal</Button>}
      />,
    );

    expect(getByText('Show Modal')).toBeInTheDocument();
    fireEvent.click(getByText('Show Modal'));
    expect(getByText('Modal Content')).toBeInTheDocument();
    expect(getByText('No')).toBeInTheDocument();
    expect(getByText('Yes')).toBeInTheDocument();

    fireEvent.click(getByText('Yes'));
    fireEvent.click(getByText('Show Modal'));
    // fireEvent.click(
    //   container.querySelector('button[title="Close modal dialog"]'),
    // );
  });
});
