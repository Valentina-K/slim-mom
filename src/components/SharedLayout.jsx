import { Outlet } from "react-router-dom";
import { Container } from "components/Container/Container.styled";
import Header from "./Header/Header";

export const SharedLayout = () => {
  return (    
    <>
      <Header />        
      <Container>
        <Outlet />
      </Container>
    </>
  );
};