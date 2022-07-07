import React, { useState } from 'react';
import FaqContent from './FaqContent';
import TagList from '../TagList/TagList';
import Tag from '../Tag/Tag';
import { Accordion, Button, Icon, Popup } from 'semantic-ui-react';

const CONTENT = `
Elit suspendisse a viverra consequat euismod. Leo ultricies enim pharetra viverra mi cursus lobortis nisl, ornare. Eu imperdiet tincidunt fames commodo. Sit mauris blandit ultrices magnis cras odio consequat, eu. Nibh est massa arcu sollicitudin.
Vitae et ac turpis pharetra. Sit feugiat porta risus sit risus etiam. Dignissim tincidunt aliquet diam fermentum vitae egestas duis. Erat sit pellentesque in urna nibh pulvinar. Cras sed vel purus et. Donec turpis pulvinar duis aenean urna.
Et vestibulum sociis mauris sit. Molestie tortor rutrum adipiscing rhoncus vehicula nunc. Quis sem a vel egestas posuere erat. Odio nulla blandit suspendisse pulvinar quis commodo etiam. Non vitae, felis enim velit amet. 
Aliquam dignissim eget feugiat donec fringilla consequat sed. Sollicitudin habitasse varius bibendum integer integer. Porttitor tincidunt varius augue auctor elit. Lacus ut commodo turpis ultrices magna vitae scelerisque pellentesque. 
Pretium faucibus egestas sit at cras bibendum natoque et. Est pulvinar eget ornare amet morbi massa ut at auctor. Eu sit aliquet pharetra neque, blandit nam enim eget. Integer sapien, varius ut volutpat mi risus purus in eget. 
Vitae, ultrices nunc justo, molestie. Eu sit nunc condimentum habitant facilisis porttitor.
`;

export default {
  title: 'Components/FAQ Content',
  component: FaqContent,
  argTypes: {
    content: {
      name: 'content',
      description: 'This is the FAQ Answer',
      type: { name: 'string', required: true },
    },
    date: {
      description: 'faq content date',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
    toggle: {
      description: 'accordion title',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
    tagOptions: {
      description: 'category tags',
      table: {
        type: {
          summary: 'Object',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
    languageOptions: {
      description: 'language options',
      table: {
        type: {
          summary: 'Object',
        },
        defaultValue: {
          summary: ' "" ',
        },
      },
    },
  },
};

function AccordionContainer({ ...args }) {
  const [activeIndex, setActiveIndex] = useState();

  const toggleOpenAccordion = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Accordion className="faq">
      <Accordion.Title
        active={activeIndex === 2}
        index={2}
        onClick={toggleOpenAccordion}
      >
        {args.toggle}
        <Icon className="ri-arrow-down-s-line" />
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>
        <FaqContent>
          <FaqContent.Info>
            {args.date}
            <FaqContent.Languages
              {...args.languageOptions}
            ></FaqContent.Languages>
          </FaqContent.Info>
          <FaqContent.Content>{args.content}</FaqContent.Content>
          <FaqContent.Actions>
            <TagList className="left">
              <TagList.Title>{args.tagOptions.title}</TagList.Title>
              <TagList.Content>
                {args.tagOptions.tags.map((tag, index) => [
                  <Tag className={tag.class} href={tag.href} key={index}>
                    {tag.category}
                  </Tag>,
                ])}
              </TagList.Content>
            </TagList>
            <Button>
              <Icon className="ri-download-2-line"></Icon>
            </Button>
            <Popup
              className="share-popup"
              trigger={
                <Button>
                  <Icon className="ri-share-fill"></Icon>
                </Button>
              }
              content={() => (
                <>
                  <p>Share to:</p>
                  <FaqContent.Actions>
                    <FaqContent.Action icon="ri-facebook-fill" />
                    <FaqContent.Action icon="ri-twitter-fill" />
                    <FaqContent.Action icon="ri-linkedin-fill" />
                    <FaqContent.Action icon="blogger b" />
                    <FaqContent.Action icon="ri-reddit-line" />
                    <FaqContent.Action icon="stumbleupon circle" />
                  </FaqContent.Actions>
                </>
              )}
              basic
              on="click"
            />
          </FaqContent.Actions>
        </FaqContent>
      </Accordion.Content>
    </Accordion>
  );
}

const AccordionTemplate = (args) => (
  <AccordionContainer {...args}></AccordionContainer>
);

export const Default = AccordionTemplate.bind({});

Default.args = {
  date: '21 SEP 2020',
  toggle: 'What is soil sealing and why is it important to monitor it?',
  content: CONTENT,
  tagOptions: {
    title: 'Tags:',
    tags: [
      { category: 'land use', href: '#' },
      { category: 'land use', href: '#' },
    ],
  },
  languageOptions: {
    default: 'en',
    languages: [
      { text: 'Albanian', key: 'sq' },
      { text: 'Български', key: 'bg' },
      { text: 'Bosnian', key: 'bs' },
      { text: 'čeština', key: 'cs' },
      { text: 'Hrvatski', key: 'hr' },
      { text: 'dansk', key: 'da' },
      { text: 'Nederlands', key: 'nl' },
      { text: 'ελληνικά', key: 'el' },
      { text: 'English', key: 'en' },
      { text: 'eesti', key: 'et' },
      { text: 'Suomi', key: 'fi' },
      { text: 'Français', key: 'fr' },
      { text: 'Deutsch', key: 'de' },
      { text: 'magyar', key: 'hu' },
      { text: 'Íslenska', key: 'is' },
      { text: 'italiano', key: 'it' },
      { text: 'Latviešu', key: 'lv' },
      { text: 'lietuvių', key: 'lt' },
      { text: 'Macedonian', key: 'mk' },
      { text: 'Malti', key: 'mt' },
      { text: 'Norsk', key: 'no' },
      { text: 'polski', key: 'pl' },
      { text: 'Português', key: 'pt' },
      { text: 'Română', key: 'ro' },
    ],
  },
};
