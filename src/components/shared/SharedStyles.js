import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Box } from '@rebass/grid';

export const HeaderWrapper = styled.header`
  background: ${props => props.theme.white};
  padding: 20px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
`;

export const Logo = styled.img`
  height: 3rem;
`;

export const ContainerWrapper = styled(Box)`
  width: 100%;
  max-width: 1200px;
  flex: 1;
`;

export const NavigationItem = styled.li`
  padding: 0 16px;
`;

export const BaseLink = styled(Link)`
  color: ${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.white};
  padding: 0.6rem 1rem;
  letter-spacing: 1px;
  font-size: 1rem;
  font-weight: 700;

  &:hover,
  &:focus {
    color: ${props => props.theme.tertiaryColor};
    border-color: ${props => props.theme.tertiaryColor};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    &:hover,
    &:focus {
      color: ${props => props.theme.textColor};
      border-color: ${props => props.theme.textColor};
    }
  }
`;

export const NavigationLink = styled(NavLink)`
  color: ${props => props.theme.textColor};
  text-transform: capitalize;
  &:hover,
  &:focus {
    color: ${props => props.theme.primaryColor};
    border-bottom: 2px solid ${props => props.theme.primaryColor};
  }
`;

export const BreadcrumbLink = styled(NavLink)`
  color: ${props => props.theme.textColor};
  &.active {
    color: ${props => props.theme.primaryColor};
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  color: ${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.white};
  padding: 0.6rem 1rem;
  letter-spacing: 1px;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: lowercase;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${props => props.theme.tertiaryColor};
    border-color: ${props => props.theme.tertiaryColor};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    &:hover,
    &:focus {
      color: ${props => props.theme.textColor};
      border-color: ${props => props.theme.textColor};
    }
  }

  &.modal__close {
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  border: 2px solid ${props => props.theme.lightGrey};
  padding: 0.6rem;
`;

export const QuantityButton = styled(Button)`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
`;

export const QuantityInput = styled(Input)`
  width: 3.35rem;
  height: 2.5rem;
  box-shadow: inset 0px -2px 1px rgba(0, 0, 0, 0.3);
  margin: 0 0.5rem;
  border: 0;
`;

export const FooterWrapper = styled.footer`
  margin-top: 32px;
  background-color: ${props => props.theme.footerColor};
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
`;
