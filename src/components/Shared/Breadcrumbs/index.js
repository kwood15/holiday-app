import React from 'react';
import { Flex } from '@rebass/grid';
import { BreadcrumbLink } from '../SharedStyles';

export const Breadcrumbs = () => {
  const breadcrumbsLinks = [
    {
      path: '/',
      text: 'Home'
    },
    {
      path: '/holidays',
      text: 'Holidays'
    }
  ];
  return (
    <Flex as="nav" aria-label="Breadcrumb" className="breadcrumbs" pt={3}>
      <Flex as="ol" itemScope itemType="http://schema.org/BreadcrumbList" my={2}>
        {breadcrumbsLinks.map((breadcrumbLink, index) => (
          <li
            key={breadcrumbLink.text}
            className="breadcrumbs__item"
            itemProp="itemListElement"
            itemScope
            itemType="http://schema.org/ListItem"
          >
            <BreadcrumbLink
              to={breadcrumbLink.path}
              itemProp="item"
              className="breadcrumbs__link"
              activeClassName="active"
            >
              <span itemProp="name">{breadcrumbLink.text}</span>
              <meta itemProp="position" content={index + 1} />
            </BreadcrumbLink>
          </li>
        ))}
      </Flex>
    </Flex>
  );
};
