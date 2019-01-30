import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: relative;

  .loader {
    position: absolute;
    width: 5rem;
    height: 5rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
