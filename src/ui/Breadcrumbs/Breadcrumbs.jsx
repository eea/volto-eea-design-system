/**
 * Breadcrumbs components.
 * @module components/theme/Breadcrumbs/Breadcrumbs
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Breadcrumb, Container, Image, Icon, Segment } from 'semantic-ui-react';

import homeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/home-icon.svg';

const Breadcrumbs = ({
  root,
  sections = [],
  icon = 'ri-arrow-right-s-line',
  size = 'tiny',
  linkLevels = 1,
}) => {
  return sections.length > 0 ? (
    <Segment className="breadcrumbs" attached vertical>
      <Container>
        <Breadcrumb size={size} as="nav" aria-label={'Breadcrumbs'}>
          <ol aria-label="Breadcrumbs navigation">
            <li>
              <Link to={root || '/'} className="section" title={'Home'}>
                <Image src={homeIcon} alt="" />
              </Link>
            </li>
            {sections.map((item, index, items) => [
              <li key={index}>
                <Breadcrumb.Divider key={`divider-${item.href}`}>
                  <Icon className={icon}></Icon>
                </Breadcrumb.Divider>
                {index < items.length - linkLevels ? (
                  <Link key={item.key} to={item.href} className="section">
                    {item.title}
                  </Link>
                ) : (
                  <Breadcrumb.Section key={item.key} active>
                    {item.title}
                  </Breadcrumb.Section>
                )}
              </li>,
            ])}
          </ol>
        </Breadcrumb>
      </Container>
    </Segment>
  ) : (
    ''
  );
};

Breadcrumbs.propTypes = {
  root: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      key: PropTypes.string,
    }),
  ).isRequired,
  size: PropTypes.string,
};

export const BreadcrumbsComponent = Breadcrumbs;

export default Breadcrumbs;
