import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  width: 100%;

  .dropdown {
    position: relative;
    cursor: pointer;

    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.6rem;
      border: 2px solid ${props => props.theme.lightGrey};
      background-color: ${props => props.theme.white};
    }

    &-list {
      position: absolute;
      z-index: 1;
      width: 100%;
      max-height: 220px;
      overflow-y: scroll;
      border-left: 1px solid ${props => props.theme.lightGrey};
      border-right: 1px solid ${props => props.theme.lightGrey};
      border-bottom: 1px solid ${props => props.theme.lightGrey};
      box-shadow: 0 2px 5px -1px ${props => props.theme.lightGrey};
      background-color: ${props => props.theme.white};

      &__item {
        padding: 0.4rem 0.6rem;

        &:hover {
          color: ${props => props.theme.white};
          background-color: rgba(14, 167, 181, 0.75);
        }
        
        &--focus {
          &:focus {
            padding-top: 0.1rem;
            padding-bottom: 0.1rem;
          }
        }

        &:first-child {
          padding-top: 0.6rem;
        }

        &:last-child {
          padding-bottom: 0.6rem;
        }
      }
    }
  }
`;
