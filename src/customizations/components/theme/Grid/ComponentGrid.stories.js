import _ from 'lodash';
import React from 'react';
import { Grid } from 'semantic-ui-react';

export default {
  title: 'Layout/Grid/Component Grid',
  component: Grid,
  argTypes: {
  },
};

const getColumns = (number) => {
  const columns = _.times(number, (i) => (
    <Grid.Column key={i}>
      <div
        style={{
          width: '100%',
          height: '20px',
          backgroundColor: '#00928F',
          margin: '0 auto',
        }}
      ></div>
    </Grid.Column>
  ));

  

  return columns;
};

const getDiv = () => {return <div
  style={{
    width: '100%',
    height: '20px',
    backgroundColor: '#00928F',
    margin: '0 auto',
  }}
></div>}

// function GridEEA({
//   rows,
//   celled,
//   centered,
//   container,
//   divided,
//   padded,
//   relaxed,
// }) {
//   return (
//     <Grid
//       celled={celled}
//       centered={centered}
//       container={container}
//       divided={divided}
//       padded={padded}
//       relaxed={relaxed}
//     >
//       {rows.map((row, index) => (
//         <Grid.Row key={index} centered={row.centered} divided={row.divided}>
//           {getColumns(row.columns)}
//         </Grid.Row>
//       ))}
//     </Grid>
//   );
// }

// const Template = (args) => <GridEEA {...args}></GridEEA>;

// export const Default = (args) => (
//   <Grid {...args}>{getColumns(args.columns)}</Grid>
// );
// Default.args = {
//   columns: 12,
//   celled: false,
//   padded: false,
//   relaxed: false,
// };

// export const Playground = Template.bind({});
// Playground.args = {
//   rows: [
//     { columns: 12, centered: false, divided: false },
//     { columns: 12, centered: false, divided: false },
//     { columns: 12, centered: false, divided: false },
//     { columns: 12, centered: false, divided: false },
//   ],
//   celled: false,
//   centered: false,
//   container: false,
//   divided: false,
//   padded: false,
//   relaxed: false,
// };

// export const Example = (args) => (
//   <Grid {...args}>
//     <Grid.Row>
//       <Grid.Column width={4}>
//         <Image
//           src="https://react.semantic-ui.com/images/wireframe/image.png"
//           alt="frame image"
//         />
//       </Grid.Column>
//       <Grid.Column width={9}>
//         <Image
//           src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
//           alt="paragraph image"
//         />
//       </Grid.Column>
//       <Grid.Column width={3}>
//         <Image
//           src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
//           alt="media paragraph image"
//         />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// );
// Example.args = {
//   columns: 12,
//   celled: false,
//   padded: false,
//   relaxed: false,
// };

export const Basic16 = (args) => (
  <Grid>{getColumns(16)}</Grid>
)

export const Basic165 = (args) => (
  <Grid>
    <Grid.Row columns="five">{getColumns(5)}</Grid.Row>
    <Grid.Row columns="three">{getColumns(3)}</Grid.Row>
  </Grid>
)
Basic165.storyName = "16/5";

export const Relaxed484 = (args) => (
  <Grid>
    <Grid.Row columns="four" relaxed>
      <Grid.Column width="four">{getDiv()}</Grid.Column>
      <Grid.Column width="eight">{getDiv()}</Grid.Column>
      <Grid.Column width="four">{getDiv()}</Grid.Column>
    </Grid.Row>
  </Grid>
)
Relaxed484.storyName = "Relaxed 4x8x4";

export const Floated = (args) => (
  <Grid>
    <Grid.Row columns="five">
      <Grid.Column floated="left">{getDiv()}</Grid.Column>
      <Grid.Column floated="right">{getDiv()}</Grid.Column>
    </Grid.Row>
  </Grid>
)

export const EqualWidth = (args) => (
  <Grid columns="equal">
    <Grid.Row columns="equal">{getColumns(3)}</Grid.Row>
    <Grid.Row columns="equal">{getColumns(2)}</Grid.Row>
  </Grid>
)

export const Celled = (args) => (
  <Grid columns="three" celled>
    <Grid.Row columns="equal">{getColumns(3)}</Grid.Row>
    <Grid.Row columns="equal">{getColumns(3)}</Grid.Row>
    <Grid.Row columns="equal">{getColumns(3)}</Grid.Row>
  </Grid>
)

export const InternallyCelled = (args) => (
  <Grid columns="three" celled="internally">
    <Grid.Row columns="equal">{getColumns(3)}</Grid.Row>
    <Grid.Row columns="equal">{getColumns(3)}</Grid.Row>
    <Grid.Row columns="equal">{getColumns(3)}</Grid.Row>
  </Grid>
)

export const Divided = (args) => (
  <Grid columns="three" divided>
    <Grid.Row columns="equal">{getColumns(3)}</Grid.Row>
    <Grid.Row columns="equal">{getColumns(3)}</Grid.Row>
    <Grid.Row columns="equal">{getColumns(3)}</Grid.Row>
  </Grid>
)

export const VerticallyDivided = (args) => (
  <Grid columns="three" divided="vertically">
    <Grid.Row columns="equal">{getColumns(3)}</Grid.Row>
    <Grid.Row columns="equal">{getColumns(3)}</Grid.Row>
    <Grid.Row columns="equal">{getColumns(3)}</Grid.Row>
  </Grid>
)
