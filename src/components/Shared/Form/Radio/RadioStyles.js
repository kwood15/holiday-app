import styled from 'styled-components';

export const RadioWrapper = styled.div`
  .control {
    position: relative;
    padding-left: 2rem;
    margin: 1rem 0;
  }

  .control__input {
    position: absolute;
    opacity: 0;
    left: 0;
  }

  .control__indicator {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.25rem;
    width: 1.25rem;
    background-color: #e6e6e6;
    border-radius: 50%;

    &:after {
      content: ''
      position: absolute;
      display: none;
    }
  }

  .control__input:checked {
    & ~ .control__indicator {
      background-color: ${props => props.theme.primaryColor};

      &:after {
        display: block;
      }
    }
  }

  .control__label {
    cursor: pointer;

    .control__indicator {
      &:after {
        content: '';
        position: absolute;
        left: 0.45rem;
        top: 0.45rem;
        height: 6px;
        width: 6px;
        border-radius: 50%;
        background: ${props => props.theme.white};
      }
    }
  }
`;
