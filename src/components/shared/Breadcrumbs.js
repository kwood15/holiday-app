import React from 'react';
import { Flex } from '@rebass/grid';
import { BreadcrumbLink } from './SharedStyles';

export const Breadcrumbs = () => (
  <Flex as="nav" aria-label="Breadcrumb" className="breadcrumbs" pt={3}>
    <Flex as="ol" itemScope itemType="http://schema.org/BreadcrumbList" my={2}>
      <li
        className="breadcrumbs__item"
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/ListItem"
      >
        <BreadcrumbLink
          to="/"
          itemProp="item"
          className="breadcrumbs__link"
          activeClassName="active"
        >
          <span itemProp="name">Home</span>
          <meta itemProp="position" content="1" />
        </BreadcrumbLink>
      </li>
      <li>
        <span className="u-separator">&gt;</span>
      </li>
      <li
        className="breadcrumbs__item"
        itemProp="itemListElement"
        itemScope
        itemType="http://schema.org/ListItem"
      >
        <BreadcrumbLink
          to="/holidays"
          itemProp="item"
          className="breadcrumbs__link"
          activeClassName="active"
        >
          <span itemProp="name">Holidays</span>
          <meta itemProp="position" content="2" />
        </BreadcrumbLink>
      </li>
    </Flex>
  </Flex>
);
