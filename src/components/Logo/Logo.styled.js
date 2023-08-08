import styled from 'styled-components';
export const LogoImage = styled.div`
  width: 46px;
  height: 44px;
  background-image: url('../../images/mobile/logo.png');

  @media screen and (min-width: 768px) {
    background-image: url('../../images/laptop/logo.png');
  }

  @media screen and (min-width: 1200px) {
    background-image: url('../../images/desktop/logo.png');
  }
`;
