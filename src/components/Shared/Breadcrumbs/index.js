import React from 'react';
import { Flex } from '@rebass/grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BreadcrumbItem, BreadcrumbIcon, BreadcrumbLink } from '../SharedStyles';

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
    <Flex as="nav" aria-label="Breadcrumbs" className="breadcrumbs" pt={3}>
      <Flex as="ol" itemScope itemType="http://schema.org/BreadcrumbList" my={2}>
        <BreadcrumbIcon className="breadcrumbs__icon">
          <BreadcrumbLink to="/" title="Home">
            <span className="u-visually-hidden">Home</span>
            <FontAwesomeIcon icon="home" size="sm" />
          </BreadcrumbLink>
        </BreadcrumbIcon>
        {breadcrumbsLinks.map((breadcrumbLink, index) => (
          <BreadcrumbItem
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
              title={breadcrumbLink.text}
              exact
            >
              <span itemProp="name">{breadcrumbLink.text}</span>
              <meta itemProp="position" content={index + 1} />
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Flex>
    </Flex>
  );
};
