import { createGlobalStyle } from 'styled-components';

export const UtilitiesStyles = createGlobalStyle`
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

  .u-text-center {
    text-align: center;
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

  .u-color-primary {
    color: ${props => props.theme.primaryColor};
  }

  .u-color-secondary {
    color: ${props => props.theme.seondaryColor};
  }

  .u-color-tertiary {
    color: ${props => props.theme.tertiaryColor};
  }

  .u-font-bold {
   font-style: bold;
  }

  .u-font-italic {
   font-style: italic;
  }
`;
