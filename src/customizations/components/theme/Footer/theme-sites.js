import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

import Logo1 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Group.svg';
import Logo2 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Group-3.svg';
import Logo3 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Group-154.svg';
import Logo4 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Group-95.svg';
import Logo5 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Group-2.svg';
import Logo6 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Group-98.svg';
import Logo7 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Group-5.svg';
import Logo8 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Group-96.svg';
import Logo9 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Group-4.svg';
import Logo10 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Group-1.svg';

function ThemeSites() {
  return (
    <Container>
      <div className="eea-theme-sites">
        <Grid.Row className="footer-logo-row">
          <div className="col-md-5ths col-sm-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo1} alt="Biodiversity"></Image>
          </div>
          <div className="col-md-5ths col-sm-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo2} alt="Climate and energy in the EU"></Image>
          </div>
          <div className="col-md-5ths col-sm-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo3} alt="Copernicus in situ"></Image>
          </div>
          <div className="col-md-5ths col-sm-5ths col-sm-2 eea-theme-site-logo">
            <Image
              src={Logo4}
              alt="Information platform for chemical monitoring"
            ></Image>
          </div>
          <div className="col-md-5ths col-sm-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo5} alt="WISE freshwater"></Image>
          </div>
          <div className="col-md-5ths col-sm-5ths col-sm-2 eea-theme-site-logo">
            <Image
              src={Logo6}
              alt="Forest information system for europe"
            ></Image>
          </div>
          <div className="col-md-5ths col-sm-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo7} alt="Climate adapt"></Image>
          </div>
          <div className="col-md-5ths col-sm-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo8} alt="Copernicus land monitoring service"></Image>
          </div>
          <div className="col-md-5ths col-sm-5ths col-sm-2 eea-theme-site-logo">
            <Image
              src={Logo9}
              alt="European industrial emissions portal"
            ></Image>
          </div>
          <div className="col-md-5ths col-sm-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo10} alt="WISE marine"></Image>
          </div>
        </Grid.Row>
      </div>
    </Container>
  );
}

export default ThemeSites;
