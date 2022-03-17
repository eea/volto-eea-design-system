import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import PublicationCard from '../PublicationCard/PublicationCard';

function RelatedContent({ children, ...rest }) {
  return (
    <div className="related-content-wrapper">
      <Grid>{children}</Grid>
    </div>
  );
}

RelatedContent.Grid = ({ children, ...rest }) => {
  let cards = rest.publicationCards;
  if (rest.publicationCards.length > 4) {
    cards = cards.slice(0, 4);
  }
  const rows = cards.reduce(function (rows, key, index) {
    return (
      (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);
  return (
    <>
      {cards.length > 2
        ? rows.map((row, rowIndex) => (
            <Grid.Column
              key={rowIndex}
              stretched
              computer={6}
              tablet={12}
              mobile={12}
            >
              {row.map((item, index) => (
                <PublicationCard {...item} key={index}>
                  <PublicationCard.Header></PublicationCard.Header>
                  <PublicationCard.Info
                    description={item.description}
                    tag={item.tag}
                  ></PublicationCard.Info>
                </PublicationCard>
              ))}
            </Grid.Column>
          ))
        : cards.map((item, index) => (
            <Grid.Column
              key={index}
              stretched
              computer={6}
              tablet={12}
              mobile={12}
            >
              <PublicationCard {...item}>
                <PublicationCard.Header></PublicationCard.Header>
                <PublicationCard.Info
                  description={item.description}
                  tag={item.tag}
                ></PublicationCard.Info>
              </PublicationCard>
            </Grid.Column>
          ))}

      {rest.showButton && rest.publicationCards.length > 4 && (
        <Grid.Row className={!rest.showButton ? 'hidden' : null}>
          <Grid.Column>
            <div className="button-wrapper">
              <Button secondary>{rest.buttonText}</Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      )}
    </>
  );
};

export default RelatedContent;
