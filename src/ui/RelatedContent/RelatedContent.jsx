import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

function RelatedContent({ items }) {
  const rows = items.reduce(function (rows, key, index) {
    return (
      (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <div className="related-content-wrapper">
      <Container>
        <h3 style={{ color: '#0A3D61' }}>Related Content</h3>

        {/* desktop grid */}
        <Grid columns={2} className="tablet or lower hidden">
          {items.length > 2
            ? rows.map((row, rowIndex) => (
                <Grid.Column key={rowIndex} stretched>
                  {row.map((item, index) => item)}
                </Grid.Column>
              ))
            : items.map((item, index) => (
                <Grid.Column key={index} stretched>
                  {item}
                </Grid.Column>
              ))}
        </Grid>

        {/* mobile grid */}
        <Grid className="mobile only" columns={1}>
          {items.map((item, index) => (
            <Grid.Column key={index}>{item}</Grid.Column>
          ))}
        </Grid>

        {/* tablet grid */}
        <Grid className="tablet only">
          {items.map((item, index) => (
            <Grid.Column
              key={index}
              tablet={
                items.length % 2 !== 0 && index === items.length - 1
                  ? '12'
                  : '6'
              }
            >
              {item}
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default RelatedContent;
