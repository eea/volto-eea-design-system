import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import PublicationCard from '../PublicationCard/PublicationCard';

function RelatedContent({ publicationCards }) {
  let cards = publicationCards;
  if (publicationCards.length > 4) {
    cards = cards.slice(0, 4);
  }
  const rows = cards.reduce(function (rows, key, index) {
    return (
      (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <div className="related-content-wrapper">
      <Container>
        {/* desktop grid */}
        <Grid columns={2} className="tablet or lower hidden">
          {cards.length > 2
            ? rows.map((row, rowIndex) => (
                <Grid.Column key={rowIndex} stretched>
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
                <Grid.Column key={index} stretched>
                  <PublicationCard {...item}>
                    <PublicationCard.Header></PublicationCard.Header>
                    <PublicationCard.Info
                      description={item.description}
                      tag={item.tag}
                    ></PublicationCard.Info>
                  </PublicationCard>
                </Grid.Column>
              ))}
        </Grid>

        {/* tablet & mobile grid */}
        <Grid className="tablet only mobile only">
          {cards.map((item, index) => (
            <Grid.Column
              key={index}
              tablet={
                cards.length % 2 !== 0 && index === cards.length - 1
                  ? '12'
                  : '6'
              }
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
        </Grid>
      </Container>
    </div>
  );
}

export default RelatedContent;
