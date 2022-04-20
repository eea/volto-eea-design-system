import React from 'react';
import Footer from './Footer';
import { Grid, Image } from 'semantic-ui-react';
import Logo1 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/bise.svg';
import Logo2 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/energy.svg';
import Logo3 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/insitu.svg';
import Logo4 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/ipchem.svg';
import Logo5 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/freshwater.svg';
import Logo6 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/fise.svg';
import Logo7 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/cca.svg';
import Logo8 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/copernicus.svg';
import Logo9 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/industry.svg';
import Logo10 from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/marine.svg';
import EIONETLogo from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/EIONETLogo.png';
import EEALogo from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/EEA-Logo-White-2.svg';

export default {
  title: 'Layout/Footer',
  component: Footer,
  argTypes: {},
};

const Template = (args) => (
  <Footer>
    <Footer.Header>The EEA also contributes to</Footer.Header>
    <Footer.Sites sites={args.sites} />
    <Footer.SubFooter>
      <div className="subfooter">
        <Grid>
          <Grid.Column mobile={6} tablet={7} computer={8}>
            <div className="item">
              <div className="site logo">
                <Image src={EEALogo} alt="EEA Logo"></Image>
                <p className="description">An agency of the European Union</p>
              </div>

              <div className="eionet logo">
                <Image src={EIONETLogo} alt="EIONET Logo"></Image>
                <p className="description">
                  European Environment
                  <br />
                  Information and
                  <br />
                  Observation Network
                </p>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column mobile={6} tablet={5} computer={4}>
            <div className="item">
              <Footer.Contact
                contacts={args.contacts}
                header={args.contactHeader}
                address={args.address}
              />
              <Footer.Social social={args.social} />
            </div>
          </Grid.Column>
        </Grid>
        <Grid.Row>
          <Footer.Actions actions={args.actions} />
        </Grid.Row>
      </div>
    </Footer.SubFooter>
  </Footer>
);

export const Default = Template.bind({});
Default.args = {
  header: 'The EEA also contributes to',
  actions: [
    { link: '/#', title: 'CMS Login', copy: false },
    { link: '/#', title: 'Sitemap', copy: false },
    { link: '/#', title: 'Privacy', copy: false },
    { link: '/#', title: 'Copyright', copy: true },
  ],
  sites: [
    { link: '/#', src: Logo1, alt: 'Biodiversity' },
    { link: '/#', src: Logo2, alt: 'Climate and energy in the EU' },
    { link: '/#', src: Logo3, alt: 'Copernicus in situ' },
    {
      link: '/#',
      src: Logo4,
      alt: 'Information platform for chemical monitoring',
    },
    { link: '/#', src: Logo5, alt: 'WISE freshwater' },
    { link: '/#', src: Logo6, alt: 'Forest information system for europe' },
    { link: '/#', src: Logo7, alt: 'Climate adapt' },
    { link: '/#', src: Logo8, alt: 'Copernicus land monitoring service' },
    { link: '/#', src: Logo9, alt: 'European industrial emissions portal' },
    { link: '/#', src: Logo10, alt: 'WISE marine' },
  ],
  social: [
    { name: 'twitter', link: '/#' },
    { name: 'facebook', link: '/#' },
    { name: 'linkedin', link: '/#' },
    { name: 'youtube', link: '/#' },
    { name: 'rss', link: '/#' },
  ],
  contactHeader: 'Contact Us',
  contacts: [
    { icon: 'comment outline', text: 'Ask your question' },
    { icon: 'envelope outline', text: 'Sign up to our newsletter' },
  ],
  address: 'Kongens Nytorv 6 1050 Copenhagen K (+45) 33 36 71 00',
};
