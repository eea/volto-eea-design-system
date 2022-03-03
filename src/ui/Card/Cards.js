import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';

import { getScaleUrl, getPath } from '@eeacms/volto-eea-design-system/utils';

const alignmentTypes = {
  left: 'left',
  right: 'right',
  center: 'centered',
  full: 'left',
};

const Cards = ({ data }) => {
  const { align, cards, image_scale, gridSize = 'one' } = data;

  const makeImage = (item) => {
    const { attachedimage } = item;
    return (
      <img
        src={
          getScaleUrl(getPath(attachedimage), image_scale || 'preview') ||
          DefaultImageSVG
        }
        alt={item.title}
      />
    );
  };

  const makeTextBody = (item) => (
    <>
      <Card.Content>
        <Card.Header>{item.title ? item.title : item.id}</Card.Header>
        {item.meta && <Card.Meta>{item.meta}</Card.Meta>}
        {item.text && <Card.Description>{item.text}</Card.Description>}
      </Card.Content>
      {item.link && (
        <Card.Content extra>
          <UniversalLink href={item.link}>
            <Icon name="linkify" />
            {item.linkTitle || item.link}
          </UniversalLink>
        </Card.Content>
      )}
    </>
  );

  return (
    cards &&
    cards.length > 0 && (
      <div className={`ui fluid ${gridSize || ''} cards`}>
        {cards.map((item) => (
          <Card key={item['@id']} className={alignmentTypes[align] || 'left'}>
            {makeImage(item)}
            {makeTextBody(item)}
          </Card>
        ))}
      </div>
    )
  );
};

export default Cards;
