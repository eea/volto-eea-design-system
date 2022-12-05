import React from 'react';
import Banner from './Banner';
// eslint-disable-next-line import/no-unresolved
import imgUrl from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/banner.png';
import { Popup, Icon } from 'semantic-ui-react';
import Copyright from '../Copyright/Copyright';

export default {
  title: 'Components/Page Header',
  component: Banner,
  argTypes: {
    title: {
      description: 'banner title',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    metadata: {
      description: 'banner metadata',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'object' },
      },
    },
    image: {
      description: 'set or unset banner image',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'boolean' },
      },
    },
    hideShareButton: {
      description: 'hide/show share button',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'boolean' },
      },
    },
    hideDownloadButton: {
      description: 'hide/show download button',
      table: {
        defaultValue: { summary: '""' },
        type: { summary: 'boolean' },
      },
    },
    copyrightVariant: {
      name: 'Variation',
      defaultValue: 'default',
      options: ['default', 'primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
      table: {
        category: 'Copyright',
        defaultValue: { summary: 'default' },
        type: { summary: 'string' },
      },
    },
    copyrightPosition: {
      name: 'Position',
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
    copyrightIcon: {
      table: {
        category: 'Copyright',
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
    copyrightText: {
      table: {
        category: 'Copyright',
        defaultValue: { summary: '""' },
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args) => (
  <Banner {...args} image_url={args.image ? imgUrl : null}>
    <Banner.Content
      actions={
        <>
          {' '}
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
              content={() => (
                <>
                  <p>Share to:</p>
                  <div className="actions">
                    <Banner.Action icon="ri-facebook-fill" />
                    <Banner.Action icon="ri-twitter-fill" />
                    <Banner.Action icon="ri-linkedin-fill" />
                  </div>
                </>
              )}
              position="top center"
              basic
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
      <Banner.Subtitle>{args.subtitle}</Banner.Subtitle>
      <Banner.Title>{args.title}</Banner.Title>
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
        <Copyright.Icon>
          <Icon className={args.copyrightIcon} />
        </Copyright.Icon>
        <Copyright.Text>{args.copyrightText}</Copyright.Text>
      </Copyright>
    </Banner.Content>
  </Banner>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  subtitle: 'Lorem ipsum dolor',
  metadata: [
    { hidden: false, value: 'Briefing', type: 'type' },
    { hidden: false, value: 'Published Date', type: 'date' },
    { hidden: false, value: 'Modified Date', type: 'date' },
    { hidden: false, value: '5 min read', type: '' },
  ],
  image: true,
  hideShareButton: false,
  hideDownloadButton: false,

  copyrightVariant: 'default',
  copyrightPosition: 'left',
  copyrightIcon: 'ri-copyright-line',
  copyrightText: 'Image copyright: Velit fusce sed sem ut.',
};
