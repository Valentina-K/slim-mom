import styled from 'styled-components';
import logoM from 'images/mobile/logo.png';
import logoD from 'images/desktop/logo.png';
import logoL from 'images/laptop/logo.png';
import logoText from 'images/logo-text.png';
export const LogoImage = styled.div`
  width: 46px;
  height: 44px;
  background-size: cover;
  margin-right: 10px;
  background-image: url(${logoM});

  @media (min-width: 768px) {
    background-image: url(${logoL});
  }

  @media (min-width: 1200px) {
    background-image: url(${logoD});
  }
`;

export const LogoText = styled.div`
  @media (min-width: 768px) {
    background-image: url(${logoText});
    width: 105px;
    height: 16px;
    background-size: cover;
  }
`;
