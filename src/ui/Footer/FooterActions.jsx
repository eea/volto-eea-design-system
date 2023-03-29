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
                isInternalURL(action.link) ? (
                  <Link to={action.link} key={index}>
                    {action.title}
                  </Link>
                ) : (
                  <a
                    href={action.link}
                    key={index}
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
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
                isInternalURL(copyright.link) ? (
                  <Link to={copyright.link} key={index}>
                    {copyright.title}
                  </Link>
                ) : (
                  <a
                    href={copyright.link}
                    key={index}
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
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
