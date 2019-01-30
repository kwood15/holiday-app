import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Flex, Box } from '@rebass/grid';
import {
  HeaderWrapper, Logo, NavigationItem, NavigationLink
} from './SharedStyles';

import logo from '../../img/logo.svg';

export const Header = ({ children }) => {
  const navigationLinks = [
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
    <HeaderWrapper className="header">
      <Flex flexDirection="column" alignItems="center">
        <Box className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__text u-visually-hidden">logo</span>
            <Logo src={logo} alt="Company logo" />
          </Link>
        </Box>

        <Box py={3} className="search">
          {children}
        </Box>

        <Flex as="nav" className="navigation">
          {navigationLinks.map(navlink => (
            <NavigationItem key={navlink.text} className="navigation__item">
              <NavigationLink
                to={navlink.path}
                activeClassName="active"
                className="navigation__link"
              >
                {navlink.text}
              </NavigationLink>
            </NavigationItem>
          ))}
        </Flex>
      </Flex>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired
};
