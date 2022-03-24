import React from 'react';
import ContentBox from './ContentBox';
import { Container } from 'semantic-ui-react';
// eslint-disable-next-line import/no-unresolved

export default {
  title: 'Components/ContentBox',
  component: ContentBox,
  argTypes: {
    title: { description: 'Title' },
  },
};

const DefaultTemplate = (args) => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>
    <ContentBox {...args}>
      <h3>{args.title}</h3>
      <p>{args.content}</p>
    </ContentBox>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
      viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
      Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
    </p>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Lorem ipsum dolor sit amet',
  content:
    'Nullam orci magna congue facilisis fermentum tellus tincidunt. Elit, aliquet sit volutpat eu, nisi. Sed pretium mi et, ut. In consequat sit turpis tortor, pulvinar facilisis hendrerit risus vestibulum. Et at venenatis quis etiam purus. Quam mattis hendrerit enim nunc ullamcorper vestibulum, dictum purus aliquam. Felis ipsum habitasse non risus sapien facilisis augue auctor. Montes, vel aenean ultrices in in. Dolor a, id sapien, porttitor in quisque rutrum donec laoreet. Vestibulum sagittis, convallis posuere gravida odio. Ac et mattis scelerisque scelerisque neque scelerisque pellentesque nullam in. At nullam nec risus elementum.',
  container: false,
};
