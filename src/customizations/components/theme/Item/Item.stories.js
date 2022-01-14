import React from 'react';
import { Item } from 'semantic-ui-react';
import EUflag from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/europe-flag.svg';

export default {
  title: 'Components/Item',
  component: Item,
  argTypes: {
  },
};

const Template = (args) => <Item.Group {...args}></Item.Group>;

export const DefaultItem = (args) => (
  <Item.Group>
    <Item {...args}></Item>
  </Item.Group>
);
DefaultItem.args = {
  header: 'Header',
  image: EUflag,
  description: 'Description',
  meta: 'Metadata',
  extra: 'Extra',
};

DefaultItem.argTypes = {
  header:{
    description:"item heading",
    table:{
      type:{summary:'string'},
      defaultValue:{summary:' \""\ '}
    }
  },
  image:{
    description:"Path or Url of the image",
    table:{
      type:{summary:'string'},
      defaultValue:{summary:' \""\ '}
    }
  },
  description:{
    description:"item content description",
    table:{
      type:{summary:'string'},
      defaultValue:{summary:' \""\ '}
    }
  },
  meta:{
    description:"item content metadata",
    table:{
      type:{summary:'string'},
      defaultValue:{summary:' \""\ '}
    }
  },
  extra:{
    description:"item extra content",
    table:{
      type:{summary:'string'},
      defaultValue:{summary:' \""\ '}
    }
  },
}

export const DefaultGroup = Template.bind({});
DefaultGroup.args = {
  items: [
    {
      childKey: 0,
      header: 'Header',
      image: EUflag,
      description: 'Description',
      meta: 'Metadata',
      extra: 'Extra',
    },
    {
      childKey: 1,
      header: 'Header',
      image: EUflag,
      description: 'Description',
      meta: 'Metadata',
      extra: 'Extra',
    },
  ],
  divided: false,
  relaxed: false,
  unstackable: false,
  link: false,
};

DefaultGroup.argTypes = {
  items:{
    description:"array of group items",
    table:{
      type:{summary:'Object'},
      defaultValue:{summary:' \""\ '}
    }
  },
  divided:{
    description:"items can be divided to better distinguish between grouped content",
    table:{
      type:{summary:'boolean'},
      defaultValue:{summary:false}
    }
  },
  relaxed:{
    description:"a group of items can relax its padding to provide more negative space",
    table:{
      type:{summary:'boolean'},
      defaultValue:{summary:false}
    }
  },
  unstackable:{
    description:"prevent items from stacking on mobile",
    table:{
      type:{summary:'boolean'},
      defaultValue:{summary:false}
    }
  },
  link:{
    description:"item can be formatted so that the entire contents link to another page",
    table:{
      type:{summary:'boolean'},
      defaultValue:{summary:false}
    }
  },
}
