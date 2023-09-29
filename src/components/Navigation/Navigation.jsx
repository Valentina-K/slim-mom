import { NavLink } from "react-router-dom";
import { Logo } from "components/Logo/Logo";
import { NavBox } from "./Navigation.styled";
import { ButtonBox } from "./Navigation.styled";
import { StyledLink } from "./Navigation.styled";
import { useState } from "react";
import { LogoText } from "components/Logo/Logo.styled";
import { UserInfo } from "components/UserInfo/UserInfo";


export const Navigation = ()=>{
    const [isUserInfo,setIsUserInfo] = useState(false);
    return (
<NavBox>
    <ButtonBox>
    <NavLink to="/" end>
        <Logo />
    </NavLink>  
    <NavLink to="/" end>
        <LogoText />
    </NavLink>
    </ButtonBox>
    {isUserInfo && (<UserInfo />)}
    <ButtonBox>      
        <StyledLink to="/login">Log in</StyledLink>
        <StyledLink to="/register">Registration</StyledLink>                    
    </ButtonBox>
</NavBox>
)}
/* <svg xmlns="http://www.w3.org/2000/svg" width="320" height="2" viewBox="0 0 320 2" fill="none">
  <path d="M0 1H320" stroke="#E0E0E0" strokeWidth="2"/>
</svg> */