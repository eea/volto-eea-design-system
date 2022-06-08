import React from 'react';
import Footer from './Footer';

import { Grid, Image } from 'semantic-ui-react';

const SubFooter = (props) => {
  if (props.children) {
    return <div>{props.children}</div>;
  }

  return (
    <div className={'subfooter'}>
      <Grid>
        <Grid.Column mobile={12} tablet={5} computer={6}>
          <div className="item">
            <p className="header text-center logo-header">
              {props.logosHeader}
            </p>

            <Grid>
              {props.managedBy &&
                props.managedBy.map((manager, index) => (
                  <Grid.Column
                    mobile={manager.columnSize.mobile}
                    tablet={manager.columnSize.tablet}
                    computer={manager.columnSize.computer}
                  >
                    <div className={manager.className}>
                      <a href={manager.link}>
                        <Image src={manager.src} alt={manager.alt}></Image>
                      </a>
                    </div>
                  </Grid.Column>
                ))}
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
};

export default SubFooter;
