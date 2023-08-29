import React from 'react';
import { render } from '@testing-library/react';
import { Default } from './DownloadLabeledIcon.stories';
import DownloadLabeledIcon from './DownloadLabeledIcon';
import '@testing-library/jest-dom/extend-expect';

describe('Default component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Default {...Default.args} />);
    expect(getByText('Download')).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container, getByText } = render(
      <DownloadLabeledIcon.Dropdown {...Default.args} />,
    );
    Default.args.links.forEach((item) => {
      expect(getByText(item.linkName)).toBeInTheDocument();
    });
    expect(
      container.querySelectorAll(`.${Default.args.downloadIcon}`),
    ).toHaveLength(3);
  });
});
