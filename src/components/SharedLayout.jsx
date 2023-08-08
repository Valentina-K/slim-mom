import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./Header/Header";

export const SharedLayout = () => {
  return (
    <Container>
      <Header />        
      <Outlet />
    </Container>
  );
};