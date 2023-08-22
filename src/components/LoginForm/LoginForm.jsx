import { ButtonBox } from "components/Navigation/Navigation.styled"
import { Button } from "components/common/ButtonComponent";
import authLaptopBackground from 'images/laptop/auth-laptop-background.jpg';

export const LoginForm = () =>{
    return (<div style={{backgroundImage:`url(${authLaptopBackground})`, width: '100vw', height: '100vh'}}>
    <h2 style={{textTransform:'uppercase'}}>Log in</h2>
    <form>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <label for="email">Email *
            <input id="email" type="email" />
        </label>
        <label for="password">Password *
            <input id="password" type="password" />
        </label>
        </div>
        <ButtonBox>
            <Button small primary>Log in</Button>
            <Button small>Register</Button>
        </ButtonBox>
        </form>
        
        </div>)
}