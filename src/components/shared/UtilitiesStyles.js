import { createGlobalStyle } from 'styled-components';

export const UtilitiesStyles = createGlobalStyle`
  *:focus {
    outline: 2px dotted ${props => props.theme.primaryColor};
  }

  .u-separator {
    color: ${props => props.theme.textColor};
    padding: 0 4px;
    font-size: 0.85em;
  }

  .u-lock-scroll {
    overflow: hidden !important;
  }

  .u-visible {
    display: block;
  }

  .u-hidden {
    display: none;
  }

  .u-margin-top-none {
    margin-top: 0;
  }

  .u-visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    top: 0;
    left: 0;
  }
`;
