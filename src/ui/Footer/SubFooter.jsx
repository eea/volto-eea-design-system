import React from 'react';
import Footer from './Footer';

import { Grid, Image } from 'semantic-ui-react';

import EIONETLogo from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/EionetFull.svg';
import EEALogo from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/EEA-Logo-White-2.svg';

const SubFooter = (props) => {
  if (props.children) {
    return <div>{props.children}</div>;
  }

  return (
    <div className="subfooter">
      <Grid>
        <Grid.Column mobile={12} tablet={5} computer={6}>
          <div className="item">
            <p className="header text-center logo-header">
              {props.logosHeader}
            </p>

            <Grid>
              <Grid.Column mobile={6} tablet={12} computer={5}>
                <div className="site logo">
                  <Image src={EEALogo} alt="EEA Logo"></Image>
                </div>
              </Grid.Column>
              <Grid.Column mobile={6} tablet={12} computer={7}>
                <div className="eionet logo">
                  <Image src={EIONETLogo} alt="EIONET Logo"></Image>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </Grid.Column>
        <Grid.Column
          mobile={6}
          tablet={2}
          computer={2}
          className="mobile hidden"
        ></Grid.Column>
        <Grid.Column mobile={12} tablet={5} computer={4}>
          <div className="item">
            <Footer.Contact
              contacts={props.contacts}
              header={props.contactHeader}
              address={props.address}
            />
            <Footer.Social social={props.social} />
          </div>
        </Grid.Column>
      </Grid>
      <Grid.Row>
        <Footer.Actions actions={props.actions} />
      </Grid.Row>
    </div>
  );
  // }
};

export default SubFooter;
