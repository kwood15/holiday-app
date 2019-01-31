import React from 'react';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTheme } from '../../../utils/themeTest';
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
  BaseLink,
  BadgeWrapper
} from '../SharedStyles';

describe('Styled components', () => {
  it('renders the <GlobalStyles /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<GlobalStyles />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the <UtilitiesStyles /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<UtilitiesStyles />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the <Button /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the <ContainerWrapper /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<ContainerWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the <HeaderWrapper /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<HeaderWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the <BaseLink /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(
      <MemoryRouter>
        <BaseLink to="/test" />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the <NavigationLink /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(
      <MemoryRouter>
        <NavigationLink to="/test" />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the <BreadcrumbLink /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(
      <MemoryRouter>
        <BreadcrumbLink to="/test" />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the <Input /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the <FooterWrapper /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<FooterWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the <BadgeWrapper /> styles based on the {theme} prop values', () => {
    const tree = renderWithTheme(<BadgeWrapper>test</BadgeWrapper>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the <BadgeWrapper /> styles with the {primary} prop values', () => {
    const tree = renderWithTheme(<BadgeWrapper primary="true">test</BadgeWrapper>).toJSON();
    expect(tree).toHaveStyleRule('background-color', '#0ea7b5');
  });

  it('renders the <BadgeWrapper /> styles with the {secondary} prop values', () => {
    const tree = renderWithTheme(<BadgeWrapper secondary="true">test</BadgeWrapper>).toJSON();
    expect(tree).toHaveStyleRule('background-color', '#ffbe4f');
  });
});
