import React, { Fragment, useState, useEffect } from 'react';
import { Flex } from '@rebass/grid';
import { ThemeProvider } from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';

import { LoaderWrapper } from './components/Shared/Loader/LoaderStyles';
import { GlobalStyles } from './components/Shared/GlobalStyles';
import { UtilitiesStyles } from './components/Shared/UtilitiesStyles';
import { Button, Input } from './components/Shared/SharedStyles';

import SearchContext from './components/Shared/Search';
import { Loader } from './components/Shared/Loader';
import Container from './components/Shared/Container';
import { Header } from './components/Shared/Header';
import { Breadcrumbs } from './components/Shared/Breadcrumbs';
import { Main } from './components/Shared/Main';
import { Footer } from './components/Shared/Footer';

import '../node_modules/react-image-gallery/styles/scss/image-gallery.scss';

library.add(faSearch, faHome);

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

  const [isLoading, setLoadingStatus] = useState(true);

  useEffect(() => {
    setLoadingStatus(false);
  });

  const handleChange = ({ target }) => setSearchTerm(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      alert(`Submitted with: ${searchTerm}`);
    } else {
      alert('Please enter at least one character');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <UtilitiesStyles />
        <SearchContext.Provider value={searchTerm}>
          <Header>
            <Flex as="form" className="form form--search">
              <label htmlFor="site-search" className="u-visually-hidden">
                Search for a holiday
              </label>
              <Input
                id="site-search"
                className="form__input"
                type="search"
                placeholder="Search holidays..."
                onChange={handleChange}
                value={searchTerm}
              />
              <Button type="submit" className="form__btn" onClick={handleSubmit}>
                <span>Search</span>
                <FontAwesomeIcon icon="search" size="lg" flip="horizontal" pull="right" />
              </Button>
            </Flex>
          </Header>
          <Container>
            {isLoading && (
              <LoaderWrapper>
                <Loader />
              </LoaderWrapper>
            )}
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
