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
        {props.managedBy &&
          props.managedBy.map((manager, index) => (
            <Grid.Column
              mobile={manager.columnSize.mobile}
              tablet={manager.columnSize.tablet}
              computer={manager.columnSize.computer}
              key={index}
              className="mobile hidden"
            >
              <div className="item">
                <div className={manager.className}>
                  <a href={manager.url}>
                    <Image
                      src={manager.src}
                      alt={manager.alt}
                      loading="lazy"
                    ></Image>
                  </a>
                </div>
              </div>
            </Grid.Column>
          ))}

        <Grid.Column mobile={12} tablet={4} computer={4}>
          <div className="item">
            <Footer.Contact contacts={props.contacts} />
          </div>
        </Grid.Column>
      </Grid>

      <Footer.Description description={props.description} />

      <Footer.Social social={props.social} />

      <Grid className="mobile only">
        {props.managedBy &&
          props.managedBy.map((manager, index) => (
            <Grid.Column
              mobile={manager.columnSize.mobile}
              tablet={manager.columnSize.tablet}
              computer={manager.columnSize.computer}
              key={index}
            >
              <div className="item">
                <div className={manager.className}>
                  <a href={manager.url}>
                    <Image
                      src={manager.src}
                      alt={manager.alt}
                      loading="lazy"
                    ></Image>
                  </a>
                </div>
              </div>
            </Grid.Column>
          ))}
      </Grid>
    </div>
  );
};

export default SubFooter;
