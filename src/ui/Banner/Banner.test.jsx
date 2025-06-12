import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Banner from './Banner';
import { sharePage, getImageSource } from './Banner';
import '@testing-library/jest-dom/extend-expect';

describe('Banner', () => {
  it('renders without errors', () => {
    const { container } = render(<Banner />);
    expect(container).toBeInTheDocument();
  });

  it('renders the children when image prop is not provided', () => {
    const image = 'image-url';
    const properties = {};
    const { getByText } = render(
      <Banner image={image} properties={properties}>
        <div>Content</div>
      </Banner>,
    );
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('renders the image and children when image prop is provided', () => {
    const image = 'image-url';
    const metadata = {
      image: {
        scales: {
          huge: {
            download: 'image-url',
          },
        },
      },
    };
    const { container, getByText } = render(
      <Banner image={image} metadata={metadata}>
        <div>Content</div>
      </Banner>,
    );
    const imageElement = container.querySelector('.eea.banner .image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.style.backgroundImage).toBe(`url(${image})`);
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('calls the onClick function when an action button is clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Banner.Action title="Action" icon="icon-name" onClick={onClick} />,
    );
    const actionButton = getByText('Action');
    fireEvent.click(actionButton);
    expect(onClick).toHaveBeenCalled();
  });

  it('renders only the gradient and children when image prop is not provided', () => {
    const { container, getByText } = render(
      <Banner>
        <div>Content</div>
      </Banner>,
    );
    const imageElement = container.querySelector('.eea.banner .image');
    expect(imageElement).not.toBeInTheDocument();
    const gradientElement = container.querySelector('.eea.banner .gradient');
    expect(gradientElement).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('calls the onClick handler when the action button is clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Banner.Action title="Action" icon="icon-name" onClick={onClick} />,
    );
    const actionButton = getByText('Action');
    fireEvent.click(actionButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders the content and actions correctly', () => {
    const { getByText } = render(
      <>
        <Banner.Title>Test Banner Title</Banner.Title>
        <Banner.Subtitle>Test Banner Subtitle</Banner.Subtitle>
        <Banner.Metadata>Test Banner Metadata</Banner.Metadata>
        <Banner.MetadataField
          hidden={false}
          label={'Test label'}
          value={'02.03.2023'}
          type={'date'}
        >
          Test Banner MetadataField
        </Banner.MetadataField>
        <Banner.Content actions={<div>Actions</div>}>
          <div>Content</div>
        </Banner.Content>
      </>,
    );
    expect(getByText('Content')).toBeInTheDocument();
    expect(getByText('Actions')).toBeInTheDocument();
    expect(getByText('Test Banner Title')).toBeInTheDocument();
    expect(getByText('Test Banner Subtitle')).toBeInTheDocument();
    expect(getByText('Test Banner Metadata')).toBeInTheDocument();
  });

  it('renders the content and actions correctly', () => {
    const { getByText } = render(
      <>
        <Banner.Title>Test Banner Title</Banner.Title>
        <Banner.Subtitle>Test Banner Subtitle</Banner.Subtitle>
        <Banner.Metadata>Test Banner Metadata</Banner.Metadata>
        <Banner.MetadataField
          hidden={false}
          label={'Test label'}
          value={'test'}
          type={'text'}
        >
          Test Banner MetadataField
        </Banner.MetadataField>
        <Banner.Content actions={<div>Actions</div>}>
          <div>Content</div>
        </Banner.Content>
      </>,
    );
    expect(getByText('Content')).toBeInTheDocument();
    expect(getByText('Actions')).toBeInTheDocument();
    expect(getByText('Test Banner Title')).toBeInTheDocument();
    expect(getByText('Test Banner Subtitle')).toBeInTheDocument();
    expect(getByText('Test Banner Metadata')).toBeInTheDocument();
  });

  it('renders the content and actions correctly', () => {
    const { getByText } = render(
      <>
        <Banner.Title>Test Banner Title</Banner.Title>
        <Banner.Subtitle>Test Banner Subtitle</Banner.Subtitle>
        <Banner.Metadata>Test Banner Metadata</Banner.Metadata>
        <Banner.MetadataField
          hidden={true}
          label={'Test label'}
          value={undefined}
          type={undefined}
        >
          Test Banner MetadataField
        </Banner.MetadataField>
        <Banner.Content actions={<div>Actions</div>}>
          <div>Content</div>
        </Banner.Content>
      </>,
    );
    expect(getByText('Content')).toBeInTheDocument();
    expect(getByText('Actions')).toBeInTheDocument();
    expect(getByText('Test Banner Title')).toBeInTheDocument();
    expect(getByText('Test Banner Subtitle')).toBeInTheDocument();
    expect(getByText('Test Banner Metadata')).toBeInTheDocument();
  });
});

describe('sharePage', () => {
  it('should not do anything if an invalid platform is provided', () => {
    document.createElement = jest.fn();
    sharePage('https://example.com', 'invalidPlatform');
    expect(document.createElement).not.toHaveBeenCalled();
  });

  it('should create an anchor element and click it for a valid platform', () => {
    const url = 'https://example.com';
    const platform = 'facebook';

    const mockLink = {
      setAttribute: jest.fn(),
      click: jest.fn(),
    };

    document.createElement = jest.fn(() => mockLink);

    sharePage(url, platform);

    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(mockLink.setAttribute).toHaveBeenNthCalledWith(
      1,
      'href',
      `https://facebook.com/sharer.php?u=${url}`,
    );
    expect(mockLink.setAttribute).toHaveBeenNthCalledWith(
      2,
      'target',
      '_blank',
    );
    expect(mockLink.setAttribute).toHaveBeenNthCalledWith(
      3,
      'rel',
      'noreferrer',
    );
    expect(mockLink.click).toHaveBeenCalled();
  });

  it('should create an anchor element and click it for a valid platform', () => {
    const url = 'https://example.com';
    const platform = 'twitter';

    const mockLink = {
      setAttribute: jest.fn(),
      click: jest.fn(),
    };

    document.createElement = jest.fn(() => mockLink);

    sharePage(url, platform);

    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(mockLink.setAttribute).toHaveBeenNthCalledWith(
      1,
      'href',
      `https://www.twitter.com/share?url=${url}`,
    );
    expect(mockLink.setAttribute).toHaveBeenNthCalledWith(
      2,
      'target',
      '_blank',
    );
    expect(mockLink.setAttribute).toHaveBeenNthCalledWith(
      3,
      'rel',
      'noreferrer',
    );
    expect(mockLink.click).toHaveBeenCalled();
  });

  it('should create an anchor element and click it for a valid platform', () => {
    const url = 'https://example.com';
    const platform = 'linkedin';

    const mockLink = {
      setAttribute: jest.fn(),
      click: jest.fn(),
    };

    document.createElement = jest.fn(() => mockLink);

    sharePage(url, platform);

    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(mockLink.setAttribute).toHaveBeenNthCalledWith(
      1,
      'href',
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    );
    expect(mockLink.setAttribute).toHaveBeenNthCalledWith(
      2,
      'target',
      '_blank',
    );
    expect(mockLink.setAttribute).toHaveBeenNthCalledWith(
      3,
      'rel',
      'noreferrer',
    );
    expect(mockLink.click).toHaveBeenCalled();
  });

  it('should create an anchor element and click it for a valid platform', () => {
    const url = 'https://example.com';
    const platform = 'reddit';

    const mockLink = {
      setAttribute: jest.fn(),
      click: jest.fn(),
    };

    document.createElement = jest.fn(() => mockLink);

    sharePage(url, platform);

    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(mockLink.setAttribute).toHaveBeenNthCalledWith(
      1,
      'href',
      `https://reddit.com/submit?url=${url}`,
    );
    expect(mockLink.setAttribute).toHaveBeenNthCalledWith(
      2,
      'target',
      '_blank',
    );
    expect(mockLink.setAttribute).toHaveBeenNthCalledWith(
      3,
      'rel',
      'noreferrer',
    );
    expect(mockLink.click).toHaveBeenCalled();
  });
});

describe('getImageSource', () => {
  it('returns the base64-encoded image source when given a base64-encoded image', () => {
    const source = getImageSource({
      data: 'base64-encoded-image-data',
      encoding: 'base64',
      contentType: 'image/png',
    });
    expect(source).toBe('data:image/png;base64,base64-encoded-image-data');
  });

  it('returns the URL of the huge image scale when given an image with a huge scale', () => {
    const source = getImageSource({
      scales: {
        huge: { download: '/path/to/huge/image.png' },
      },
    });
    expect(source).toBe('/path/to/huge/image.png');
  });

  it('returns the URL of the great image scale when given an image with a great scale', () => {
    const source = getImageSource({
      scales: {
        great: { download: '/path/to/great/image.png' },
      },
    });
    expect(source).toBe('/path/to/great/image.png');
  });

  it('returns the URL of the large image scale when given an image with a large scale', () => {
    const source = getImageSource({
      scales: {
        large: { download: '/path/to/large/image.png' },
      },
    });
    expect(source).toBe('/path/to/large/image.png');
  });

  it('returns null when given an image with no data or scales', () => {
    const source = getImageSource({});
    expect(source).toBeNull();
  });
});
