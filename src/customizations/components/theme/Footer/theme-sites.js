import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

// import Logo1 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo1.png';
// import Logo2 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo2.png';
// import Logo3 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo3.png';
// import Logo4 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo4.png';
// import Logo5 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo5.png';
// import Logo6 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo6.png';
// import Logo7 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo7.png';
// import Logo8 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo8.png';
// import Logo9 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo9.png';
// import Logo10 from '../../../../../theme/themes/eea/assets/images/Footer/Extras/Logo10.png';

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
          <div className="col-md-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo1}></Image>
          </div>
          <div className="col-md-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo2}></Image>
          </div>
          <div className="col-md-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo3}></Image>
          </div>
          <div className="col-md-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo4}></Image>
          </div>
          <div className="col-md-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo5}></Image>
          </div>
          <div className="col-md-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo6}></Image>
          </div>
          <div className="col-md-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo7}></Image>
          </div>
          <div className="col-md-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo8}></Image>
          </div>
          <div className="col-md-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo9}></Image>
          </div>
          <div className="col-md-5ths col-sm-2 eea-theme-site-logo">
            <Image src={Logo10}></Image>
          </div>
        </Grid.Row>
      </div>
    </Container>
  );
}

export default ThemeSites;
