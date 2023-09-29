import { styled } from 'styled-components';
export const Button = styled.button`
  width: ${props => (props.small ? '182px' : '211px')};
  height: ${props => (props.small ? '44px' : '43px')};
  padding: ${props => (props.small ? '13px 51px' : '13px 25px')};
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30px;
  background: ${props => (props.primary ? '#fc842d' : '#fff')};
  color: ${props => (props.primary ? '#fff' : '#fc842d')};
  box-shadow: ${props =>
    props.primary ? '0px 4px 10px 0px rgba(252, 132, 45, 0.5)' : 'none'};
  border: ${props => (props.primary ? 'none' : '2px solid #fc842d')};
  text-align: center;
  font-family: Verdana;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
`;
