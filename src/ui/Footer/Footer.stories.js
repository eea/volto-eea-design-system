import React from 'react';
import Footer from './Footer';
import { Grid, Image } from 'semantic-ui-react';
import Bise from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/bise.svg';
import Energy from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/energy.svg';
import Insitu from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/insitu.svg';
import ClimateHealth from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/climate-health.svg';
import Freshwater from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/freshwater.svg';
import Fise from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/fise.svg';
import Cca from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/cca.svg';
import Copernicus from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/copernicus.svg';
import Industry from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/industry.svg';
import Marine from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/marine.svg';
import EIONETLogo from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/EionetFull.svg';
import EEALogo from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/logo/EEA-Logo-White-2.svg';

export default {
  title: 'Layout/Footer',
  component: Footer,
  argTypes: {},
};

const Template = (args) => (
  <Footer>
    <Footer.Header>{args.header}</Footer.Header>
    <Footer.Sites sites={args.sites} />
    <Footer.SubFooter>
      <div className="subfooter">
        <Grid>
          <Grid.Column mobile={12} tablet={5} computer={6}>
            <div className="item">
              <p className="header text-center logo-header">
                {args.logosHeader}
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
  header: 'EEA information systems',
  logosHeader: 'Managed by',
  contactHeader: 'Contact Us',
  actions: [
    { link: '/#', title: 'CMS Login', copy: false },
    { link: '/#', title: 'Sitemap', copy: false },
    { link: '/#', title: 'Privacy', copy: false },
    { link: '/#', title: 'Copyright', copy: true },
  ],
  sites: [
    { link: '/#', src: Marine, alt: 'WISE marine' },
    { link: '/#', src: Bise, alt: 'Biodiversity' },
    {
      link: '/#',
      src: ClimateHealth,
      alt: 'Information platform for chemical monitoring',
    },
    { link: '/#', src: Industry, alt: 'European industrial emissions portal' },
    { link: '/#', src: Insitu, alt: 'Copernicus in situ' },
    { link: '/#', src: Freshwater, alt: 'WISE freshwater' },
    { link: '/#', src: Fise, alt: 'Forest information system for europe' },
    { link: '/#', src: Cca, alt: 'Climate adapt' },
    { link: '/#', src: Energy, alt: 'Climate and energy in the EU' },
    { link: '/#', src: Copernicus, alt: 'Copernicus land monitoring service' },
  ],
  social: [
    { name: 'twitter', icon: 'ri-twitter-fill', link: '/#' },
    { name: 'facebook', icon: 'ri-facebook-box-fill', link: '/#' },
    { name: 'linkedin', icon: 'ri-linkedin-fill', link: '/#' },
    { name: 'youtube', icon: 'ri-youtube-fill', link: '/#' },
    { name: 'instagram', icon: 'ri-instagram-fill', link: '/#' },
    { name: 'rss', icon: 'ri-rss-fill', link: '/#' },
  ],
  contacts: [
    { icon: 'ri-chat-1-line', text: 'Ask your question', link: '/#' },
    { icon: 'ri-mail-line', text: 'Sign up to our newsletter', link: '/#' },
  ],
  address: 'Kongens Nytorv 6 1050 Copenhagen K (+45) 33 36 71 00',
};
