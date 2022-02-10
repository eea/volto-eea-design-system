import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Logo1 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group.svg';
import Logo2 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-3.svg';
import Logo3 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-154.svg';
import Logo4 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-95.svg';
import Logo5 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-2.svg';
import Logo6 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-98.svg';
import Logo7 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-5.svg';
import Logo8 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-96.svg';
import Logo9 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-4.svg';
import Logo10 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/Footer/Extras/Group-1.svg';

function ThemeSites() {
  return (
    <div className="logos">
      <Grid columns={5}>
        <Grid.Column className="logo">
          <Link to="/#"><Image src={Logo1} alt="Biodiversity"></Image></Link>
        </Grid.Column>
        <Grid.Column className="logo">
          <Image src={Logo2} alt="Climate and energy in the EU"></Image>
        </Grid.Column>
        <Grid.Column className="logo">
          <Image src={Logo3} alt="Copernicus in situ"></Image>
        </Grid.Column>
        <Grid.Column className="logo">
          <Image src={Logo4} alt="Information platform for chemical monitoring"></Image>
        </Grid.Column>
        <Grid.Column className="logo">
          <Image src={Logo5} alt="WISE freshwater"></Image>
        </Grid.Column>
        <Grid.Column className="logo">
          <Image src={Logo6} alt="Forest information system for europe"></Image>
        </Grid.Column>
        <Grid.Column className="logo">
          <Image src={Logo7} alt="Climate adapt"></Image>
        </Grid.Column>
        <Grid.Column className="logo">
          <Image src={Logo8} alt="Copernicus land monitoring service"></Image>
        </Grid.Column>
        <Grid.Column className="logo">
          <Image src={Logo9} alt="European industrial emissions portal"></Image>
        </Grid.Column>
        <Grid.Column className="logo">
          <Image src={Logo10} alt="WISE marine"></Image>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default ThemeSites;
