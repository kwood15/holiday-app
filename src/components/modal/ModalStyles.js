import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  z-index: 2;
`;

export const ModalBody = styled.div`
  position: fixed;
  background: ${props => props.theme.white};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 64px 20px 40px;
  max-width: 600px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: default;
`;
