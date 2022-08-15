import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to={action.link} key={index}>
                  {action.title}
                </Link>
              ))}
          </div>
        </Grid.Column>

        <Grid.Column mobile={12} tablet={6} computer={6}>
          <div className="copyright">
            {props.copyright &&
              props.copyright.map((copyright, index) => (
                <Link to={copyright.link}>
                  &copy; Copyright {new Date().getFullYear()} {copyright.site}
                </Link>
              ))}
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default FooterActions;
