import { AppBar, Toolbar, Stack, Button } from "@mui/material";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Logo } from "components/Logo/Logo";

const StyledLink = styled(NavLink)`
  color: #9B9FAA;

  &.active {
    color: #212121;
  }
`;

const Header = ()=>{
    return (
        <AppBar position="static" >
            <Toolbar sx={{ flexGrow: 1 }}>
                <nav >
                    <StyledLink to="/" end>
                    <Logo />
                    </StyledLink>  
                    <Stack direction="row" spacing={2}>      
                        <Button variant="text" color="inherit"><StyledLink to="/login">Log in</StyledLink></Button>
                        <Button variant="text" color="inherit"><StyledLink to="/register">Registration</StyledLink></Button>                    
                    </Stack>
                </nav>
            </Toolbar>
        </AppBar>
    )
}

export default Header;