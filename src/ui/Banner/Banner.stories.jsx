import React, { useRef } from 'react';
import cx from 'classnames';
import Banner from './Banner';
// eslint-disable-next-line import/no-unresolved
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/banner.png';
import { Icon, Container } from 'semantic-ui-react';
import Popup from '@eeacms/volto-eea-design-system/ui/Popup/Popup';
import Copyright from '../Copyright/Copyright';

export default {
  title: 'Components/Page Header',
  component: Banner,
  argTypes: {
    title: {
      description: 'banner title',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      },
    },
    metadata: {
      description: 'banner metadata',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'object' },
      },
    },
    image: {
      description: 'set or unset banner image',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'boolean' },
      },
    },
    hideShareButton: {
      description: 'hide/show share button',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'boolean' },
      },
    },
    hideDownloadButton: {
      description: 'hide/show download button',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'boolean' },
      },
    },
    copyright: {
      table: {
        category: 'Copyright',
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      },
    },
    copyrightPrefix: {
      table: {
        category: 'Copyright',
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      },
    },
    copyrightIcon: {
      table: {
        category: 'Copyright',
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      },
    },
    copyrightPosition: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right'],
      },
      type: { name: 'string' },
      table: {
        category: 'Copyright',
        defaultValue: { summary: '"left"' },
      },
    },
  },
};

const Template = (args) => {
  const popupRef = useRef(null);
  return (
    <Banner {...args} image={args.image ? imgUrl : null}>
      <Banner.Content
        actions={
          <>
            {!args.hideShareButton && (
              <Popup
                className="share-popup"
                trigger={
                  <Banner.Action
                    icon="ri-share-fill"
                    title="Share"
                    className="share"
                  />
                }
                content={
                  <>
                    <p>Share to:</p>
                    <div className="actions" ref={popupRef}>
                      <Banner.Action
                        icon="ri-facebook-fill"
                        title={'Share page to Facebook'}
                        titleClass={'hiddenStructure'}
                      />
                      <Banner.Action
                        icon="ri-twitter-x-line"
                        title={'Share page to Twitter'}
                        titleClass={'hiddenStructure'}
                      />
                      <Banner.Action
                        icon="ri-linkedin-fill"
                        title={'Share page to Linkedin'}
                        titleClass={'hiddenStructure'}
                      />
                    </div>
                  </>
                }
                position="top center"
              />
            )}
            {!args.hideDownloadButton && (
              <Banner.Action
                icon="ri-download-2-line"
                title="Download"
                className="download"
              />
            )}
          </>
        }
      >
        {!args.aboveTitle && args.subtitle && (
          <Banner.Subtitle>{args.subtitle}</Banner.Subtitle>
        )}
        {args.aboveTitle}
        <Banner.Title>{args.title}</Banner.Title>
        {args.belowTitle}
        {args.metadata && (
          <Banner.Metadata>
            <>
              {args.metadata.map((meta, index) => (
                <Banner.MetadataField
                  {...meta}
                  key={index}
                ></Banner.MetadataField>
              ))}
            </>
          </Banner.Metadata>
        )}
        <Copyright copyrightPosition={args.copyrightPosition}>
          <Copyright.Prefix>{args.copyrightPrefix}</Copyright.Prefix>
          <Copyright.Icon>
            <Icon className={args.copyrightIcon} />
          </Copyright.Icon>
          <Copyright.Text>{args.copyright}</Copyright.Text>
        </Copyright>
      </Banner.Content>
    </Banner>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  subtitle: 'Lorem ipsum dolor',
  metadata: [
    { hidden: false, value: 'Briefing', type: 'type' },
    { hidden: false, label: 'Published', value: '25 Nov 2022', type: 'date' },
    { hidden: false, label: 'Modified', value: '29 Nov 2022', type: 'date' },
    { hidden: false, value: '5 min read', type: '' },
  ],
  image: true,
  hideShareButton: false,
  hideDownloadButton: false,
  copyrightPrefix: 'Image',
  copyrightPosition: 'left',
  copyrightIcon: 'ri-copyright-line',
  copyright: 'John Smith, Well with Nature /EEA',
};

const InvertedwithHeroTemplate = (args) => (
  <Container
    className={cx(
      'homepage-inverse homepage-header light-header',
      args.heroHeaderSize ? 'hero-header' : '',
    )}
    fluid
  >
    <Template
      {...args}
      hideShareButton
      hideDownloadButton
      aboveTitle={
        !args.hideContentType ? (
          <div className="content-type">{args.content_type}</div>
        ) : (
          ' '
        )
      }
      belowTitle={
        <>
          <Banner.Subtitle>
            <span className="subtitle-light">{args.subtitle}</span>
          </Banner.Subtitle>
        </>
      }
    />
  </Container>
);

export const InvertedHero = InvertedwithHeroTemplate.bind({});
InvertedHero.args = {
  ...Default.args,
  metadata: Default.args.metadata.filter((meta) => meta.type !== 'type'),
  hideContentType: false,
  heroHeaderSize: false,
  content_type: 'Web report',
};

const invertedArgTypes = {
  hideContentType: {
    description: 'hide content type',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
  hideShareButton: {
    description: 'hide/show share button',
    table: {
      disable: true,
    },
    control: false,
  },
  hideDownloadButton: {
    description: 'hide/show download button',
    table: {
      disable: true,
    },
    control: false,
  },
};

InvertedHero.argTypes = {
  ...invertedArgTypes,
  heroHeaderSize: {
    description: 'Make banner size of an hero image',
    table: {
      type: {
        summary: 'boolean',
      },
      defaultValue: {
        summary: true,
      },
    },
  },
};

const InvertedTemplate = (args) => (
  <Container
    className={cx('view-viewview homepage-inverse light-header')}
    fluid
  >
    <Template
      {...args}
      hideShareButton
      hideDownloadButton
      aboveTitle={
        <>
          {!args.hideContentType && (
            <div className="content-type">{args.content_type}</div>
          )}
          <div className="subtitle">{args.subtitle}</div>
        </>
      }
    />
  </Container>
);

export const Inverted = InvertedTemplate.bind({});

Inverted.args = {
  ...Default.args,
  metadata: Default.args.metadata.filter((meta) => meta.type !== 'type'),
  hideContentType: false,
  content_type: 'Web report page',
};

Inverted.argTypes = {
  ...invertedArgTypes,
};
