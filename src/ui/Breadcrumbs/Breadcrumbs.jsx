/**
 * Breadcrumbs components.
 * @module components/theme/Breadcrumbs/Breadcrumbs
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Breadcrumb, Container, Image, Icon, Segment } from 'semantic-ui-react';

import homeIcon from '@eeacms/volto-eea-design-system/../theme/themes/eea/assets/images/home-icon.svg';

const Breadcrumbs = ({ root, sections = [], icon = 'ri-arrow-right-s-line', size = 'tiny' }) => {
  return sections.length > 0 ? (
    <Segment
      role="navigation"
      aria-label={'breadcrumbs'}
      className="breadcrumbs"
      attached
    >
      <Container>
        <Breadcrumb size={size}>
          <Link to={root || '/'} className="section" title={'Home'}>
            <Image src={homeIcon} alt="home" />
          </Link>
          {sections.map((item, index, items) => [
            <Breadcrumb.Divider key={`divider-${item.href}`}>
              <Icon className={icon}></Icon>
            </Breadcrumb.Divider>,
            index < items.length - 1 ? (
              <Link key={item.key} to={item.href} className="section">
                {item.title}
              </Link>
            ) : (
              <Breadcrumb.Section key={item.key} active>
                {item.title}
              </Breadcrumb.Section>
            ),
          ])}
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
