import React from 'react';
import { Grid } from 'semantic-ui-react';

const FooterActions = (props) => {
  if (props.children) {
    return <div>{props.children}</div>;
  }

  return (
    <div className="menu">
      <Grid>
        <Grid.Column mobile={12} tablet={6} computer={6}>
          <div className="actions">
            {props.actions &&
              props.actions.map((action, index) => (
                <a
                  href={action.link}
                  key={index}
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  {action.title}
                </a>
              ))}
          </div>
        </Grid.Column>

        <Grid.Column mobile={12} tablet={6} computer={6}>
          <div className="copyright">
            {props.copyright &&
              props.copyright.map((copyright, index) => (
                <React.Fragment key={index}>
                  <a
                    href={copyright.link}
                    key={index}
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    {copyright.title}
                  </a>
                </React.Fragment>
              ))}
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default FooterActions;
