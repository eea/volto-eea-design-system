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
  contentTypesAsBreadcrumbSection = [],
}) => {
  return sections.length > 0 ? (
    <Segment className="breadcrumbs" attached vertical>
      <Container>
        <Breadcrumb size={size} as="nav" aria-label={'Breadcrumbs'}>
          <ol aria-label="Breadcrumbs navigation">
            <li>
              <Link to={root || '/'} className="section" title={'Home'}>
                <Image src={homeIcon} alt="" width="12" height="13" />
              </Link>
            </li>
            {sections.map((item, index, items) => {
              const url = item.url || item.href;
              const lastItem = items.length - 1 === index;
              return (
                <li key={index}>
                  <Breadcrumb.Divider key={`divider-${url}`}>
                    <Icon className={icon}></Icon>
                  </Breadcrumb.Divider>
                  {index < items.length - 1 &&
                  contentTypesAsBreadcrumbSection.indexOf(item.portal_type) ===
                    -1 ? (
                    <Link key={item.key} to={url} className="section">
                      {item.title}
                    </Link>
                  ) : (
                    <Breadcrumb.Section key={item.key} active={lastItem}>
                      {item.title}
                    </Breadcrumb.Section>
                  )}
                </li>
              );
            })}
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
      url: PropTypes.string,
      portal_type: PropTypes.string,
      key: PropTypes.string,
    }),
  ).isRequired,
  size: PropTypes.string,
};

export const BreadcrumbsComponent = Breadcrumbs;

export default Breadcrumbs;
