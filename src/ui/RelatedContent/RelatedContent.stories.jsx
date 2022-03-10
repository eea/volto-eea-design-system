import React from 'react';
import RelatedContent from './RelatedContent';
import PublicationCard from '../PublicationCard/PublicationCard';

export default {
  title: 'Components/Related Content',
  component: RelatedContent,
  argTypes: {},
};

const Template = (args) => (
  <div>
    <RelatedContent {...args}></RelatedContent>
  </div>
);

export const DefaultEven = Template.bind({});
DefaultEven.args = {
  items: [
    <PublicationCard key="1">
      <PublicationCard.Header />
      <PublicationCard.Info
        tag="Publication"
        descripiton="Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis."
      ></PublicationCard.Info>
    </PublicationCard>,
    <PublicationCard key="2">
      <PublicationCard.Header />
      <PublicationCard.Info
        tag="Publication"
        descripiton="Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis."
      ></PublicationCard.Info>
    </PublicationCard>,
    <PublicationCard key="3">
      <PublicationCard.Header />
      <PublicationCard.Info
        tag="Publication"
        descripiton="Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis."
      ></PublicationCard.Info>
    </PublicationCard>,
    <PublicationCard key="4">
      <PublicationCard.Header />
      <PublicationCard.Info
        tag="Publication"
        descripiton="Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis."
      ></PublicationCard.Info>
    </PublicationCard>,
  ],
};

export const DefaultOdd = Template.bind({});
DefaultOdd.args = {
  items: [
    <PublicationCard key="1">
      <PublicationCard.Header />
      <PublicationCard.Info
        tag="Publication"
        descripiton="Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis."
      ></PublicationCard.Info>
    </PublicationCard>,
    <PublicationCard key="2">
      <PublicationCard.Header />
      <PublicationCard.Info
        tag="Publication"
        descripiton="Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis."
      ></PublicationCard.Info>
    </PublicationCard>,
    <PublicationCard key="3">
      <PublicationCard.Header />
      <PublicationCard.Info
        tag="Publication"
        descripiton="Leo fermentum sollicitudin suspendisse iaculis feugiat. Eget tellus blandit aenean mattis."
      ></PublicationCard.Info>
    </PublicationCard>,
  ],
};
