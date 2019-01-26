import React from 'react';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTheme } from '../helpers';
import { GlobalStyles } from '../GlobalStyles';
import { UtilitiesStyles } from '../UtilitiesStyles';
import {
  ContainerWrapper,
  HeaderWrapper,
  FooterWrapper,
  NavigationLink,
  BreadcrumbLink,
  Button,
  Input,
  BaseLink
} from '../SharedStyles';

describe('Styled components', () => {
  it('renders the correct <GlobalStyles /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<GlobalStyles />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct <UtilitiesStyles /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<UtilitiesStyles />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct <Button /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct <ContainerWrapper /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<ContainerWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct <HeaderWrapper /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<HeaderWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct <BaseLink /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(
      <MemoryRouter>
        <BaseLink to="/test" />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct <NavigationLink /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(
      <MemoryRouter>
        <NavigationLink to="/test" />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct <BreadcrumbLink /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(
      <MemoryRouter>
        <BreadcrumbLink to="/test" />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct <Input /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct <FooterWrapper /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<FooterWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
