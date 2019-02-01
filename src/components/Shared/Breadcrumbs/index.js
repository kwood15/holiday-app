import React from 'react';
import { Flex } from '@rebass/grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { routes } from '../../../routes';
import { BreadcrumbItem, BreadcrumbIcon, BreadcrumbLink } from '../SharedStyles';

export const Breadcrumbs = () => (
  <Flex as="nav" aria-label="Breadcrumbs" className="breadcrumbs" pt={3}>
    <Flex as="ol" itemScope itemType="http://schema.org/BreadcrumbList" my={2}>
      <BreadcrumbIcon className="breadcrumbs__icon">
        <BreadcrumbLink to="/" title="Home">
          <span className="u-visually-hidden">{routes[0].text}</span>
          <FontAwesomeIcon icon="home" size="sm" />
        </BreadcrumbLink>
      </BreadcrumbIcon>
      {routes.map(route => (
        <BreadcrumbItem
          key={route.key}
          className="breadcrumbs__item"
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          <BreadcrumbLink
            to={route.path}
            itemProp="item"
            className="breadcrumbs__link"
            activeClassName="active"
            title={route.text}
            exact
          >
            <span itemProp="name">{route.text}</span>
            <meta itemProp="position" content={route.key} />
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Flex>
  </Flex>
);
