import React, { Fragment, useState } from 'react';
import { Flex } from '@rebass/grid';
import { ThemeProvider } from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { GlobalStyles } from './components/shared/GlobalStyles';
import { UtilitiesStyles } from './components/shared/UtilitiesStyles';
import { Button, Input } from './components/shared/SharedStyles';

import SearchContext from './components/search/SearchContext';
import Container from './components/shared/Container';
import { Header } from './components/shared/Header';
import { Breadcrumbs } from './components/shared/Breadcrumbs';
import { Main } from './components/shared/Main';
import { Footer } from './components/shared/Footer';

import '../node_modules/react-image-gallery/styles/scss/image-gallery.scss';

library.add(faSearch);

export const theme = {
  textColor: '#505050',
  bodyColor: '#f9f9f9',
  primaryColor: '#0ea7b5',
  secondaryColor: '#ffbe4f',
  tertiaryColor: '#0c457d',
  offersColor: '#6bd2db',
  footerColor: '#6bd2db',
  white: '#ffffff',
  black: '#000000',
  lightGrey: '#e0e0e0',
  midGrey: '#808080',
  darkgrey: '#797979',
  headingColor: '#0c457d',
  breakpoints: ['32em', '48em', '64em']
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => setSearchTerm(e.target.value);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <UtilitiesStyles />
        <SearchContext.Provider value={searchTerm}>
          <Header>
            <Flex as="form" className="form form--search">
              <Input
                className="form__input"
                type="search"
                placeholder="Search holidays..."
                onChange={handleChange}
                value={searchTerm}
              />
              <Button type="submit" className="form__btn">
                <FontAwesomeIcon icon="search" />
                <span>Search</span>
              </Button>
            </Flex>
          </Header>
          <Container>
            <Breadcrumbs />
            <Main />
          </Container>
        </SearchContext.Provider>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
