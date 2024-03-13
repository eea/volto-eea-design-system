import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { isInternalURL } from '@plone/volto/helpers';

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
              props.actions.map((action, index) =>
                isInternalURL(action.url) ? (
                  <Link to={action.url} key={index}>
                    {action.title}
                  </Link>
                ) : (
                  <a href={action.url} key={index} target={'_blank'}>
                    {action.title}
                  </a>
                ),
              )}
          </div>
        </Grid.Column>

        <Grid.Column mobile={12} tablet={6} computer={6}>
          <div className="copyright">
            {props.copyright &&
              props.copyright.map((copyright, index) =>
                isInternalURL(copyright.url) ? (
                  <Link to={copyright.url} key={index}>
                    {copyright.title}
                  </Link>
                ) : (
                  <a href={copyright.url} key={index} target={'_blank'}>
                    {copyright.title}
                  </a>
                ),
              )}
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default FooterActions;
