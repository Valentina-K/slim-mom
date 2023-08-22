import styled, { css } from 'styled-components';
export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(33, 33, 33, 0.12);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  z-index: 99;

  ${props =>
    props.active &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const ModalWindow = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(1)',
  boxShadow: '0px 22px 40px 0px rgba(0, 0, 0, 0.1)',
  width: '90%',
  height: '90%',
  '@media (min-width: 480px)': {
    width: '672px',
    height: '572px',
  },
  '@media (min-width:1200px)': {
    height: '574px',
  },
  backgroundColor: '#fff',
  transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
});
