import React from 'react';
import { Grid, Button, Card, Image } from 'semantic-ui-react';

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
                <Card className="publication tertiary" key={index}>
                  <Image
                    as="a"
                    href={item.href}
                    src={item.image}
                    wrapped
                    ui={false}
                    alt="card image"
                  />
                  <Card.Content>
                    <Card.Meta>
                      <a href={item.href}>{item.tag}</a>
                    </Card.Meta>
                    <Card.Description>
                      <a href={item.href}>{item.description}</a>
                    </Card.Description>
                  </Card.Content>
                </Card>
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
              <Card className="publication tertiary">
                <Image
                  as="a"
                  href={item.href}
                  src={item.image}
                  wrapped
                  ui={false}
                  alt="card image"
                />
                <Card.Content>
                  <Card.Meta>
                    <a href={item.href}>{item.tag}</a>
                  </Card.Meta>
                  <Card.Description>
                    <a href={item.href}>{item.description}</a>
                  </Card.Description>
                </Card.Content>
              </Card>
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
