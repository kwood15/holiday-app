import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Flex, Box } from '@rebass/grid';
import { routes } from '../../../routes';
import {
  HeaderWrapper, Logo, NavigationItem, NavigationLink
} from '../SharedStyles';

import logo from './logo.svg';

export const Header = ({ children }) => (
  <HeaderWrapper className="header">
    <Flex flexDirection="column" alignItems="center">
      <Box className="logo">
        <Link to="/" className="logo__link" title={routes[0].text}>
          <span className="logo__text u-visually-hidden">company logo</span>
          <Logo src={logo} alt="Company logo" />
        </Link>
      </Box>
      <Box py={3} className="search">
        {children}
      </Box>
      <Flex as="nav" className="navigation">
        {routes.map(route => (
          <NavigationItem key={route.key} className="navigation__item">
            <NavigationLink
              to={route.path}
              activeClassName="active"
              className="navigation__link"
              title={route.text}
              exact
            >
              {route.text}
            </NavigationLink>
          </NavigationItem>
        ))}
      </Flex>
    </Flex>
  </HeaderWrapper>
);

Header.propTypes = {
  children: PropTypes.node.isRequired
};
