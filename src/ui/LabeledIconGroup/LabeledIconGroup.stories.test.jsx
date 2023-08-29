import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './LabeledIconGroup.stories';
import '@testing-library/jest-dom/extend-expect';

describe('Default component', () => {
  it('renders corectly', () => {
    const { container, getByText } = render(<Default {...Default.args} />);

    expect(container.querySelector('.ri-share-box-fill')).toBeInTheDocument();
    expect(getByText('Open in new Tab')).toBeInTheDocument();

    expect(container.querySelector('.ri-download-2-fill')).toBeInTheDocument();
    expect(getByText('Download')).toBeInTheDocument();

    expect(container.querySelector('.ri-global-line')).toBeInTheDocument();
    expect(getByText('Language')).toBeInTheDocument();
  });
});
