import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from '@rebass/grid';
import {
  HeaderWrapper,
  Logo,
  BaseLink,
  NavigationItem,
  NavigationLink
} from './SharedStyles';

import logo from '../../img/logo.svg';

export const Header = ({ children }) => (
  <HeaderWrapper className="header">
    <Flex flexDirection="column" alignItems="center">
      <Box className="logo">
        <BaseLink to="/" className="logo__link">
          <span className="logo__text u-visually-hidden">logo</span>
          <Logo src={logo} alt="Company logo" />
        </BaseLink>
      </Box>

      <Box py={3} className="search">
        {children}
      </Box>

      <Flex as="nav" className="navigation">
        <NavigationItem className="navigation__item">
          <NavigationLink
            to="/"
            activeClassName="active"
            className="navigation__link"
          >
            Home
          </NavigationLink>
        </NavigationItem>
        <NavigationItem className="navigation__item">
          <NavigationLink
            to="/holidays"
            activeClassName="active"
            className="navigation__link"
          >
            Holidays
          </NavigationLink>
        </NavigationItem>
      </Flex>
    </Flex>
  </HeaderWrapper>
);

Header.propTypes = {
  children: PropTypes.node.isRequired
};
