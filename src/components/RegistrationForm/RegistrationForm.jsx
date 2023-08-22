import {Box,FormControl,Input} from '@mui/material';
import { useState } from 'react';
import { ButtonBox } from "components/Navigation/Navigation.styled"
import { Button } from "components/common/ButtonComponent";
import authLaptopBackground from 'images/laptop/auth-laptop-background.jpg';
export const RegistrationForm = () =>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit = evt => {
        evt.preventDefault();
        
        reset();             
      };
      const reset = ()=>{
        setName('');
        setEmail('');
        setPassword('');
      }
      const handleChange = evt => {
        const { name, value } = evt.target;
        switch (name) {
          case 'name':
            setName(value);
            break;
          case 'password':
            setPassword(value);
            break;
          case 'email':
            setEmail(value);
            break;          
          default:
            return;
        }
      };

    return (
    <div style={{backgroundImage:`url(${authLaptopBackground})`, width: '100vw', height: '100vh'}}>
    <h2 style={{textTransform:'uppercase',color: '#FC842D'}}>Register</h2>
    <Box component="form" autoComplete="off" onSubmit={handleSubmit} >
        <div style={{display:'flex', flexDirection:'column'}}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <Input
              id="name"
              label="Name*"
              type='text'  
              name="name" 
              placeholder="Name*"  
              required onChange={handleChange}                         
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">          
            <Input
              id="email"
              type='email'  
              placeholder="Email*"
              name="email"
              required onChange={handleChange}                                   
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">          
            <Input
              id="password"
              type='password' 
              placeholder="Password*" 
              name="password"  
              required onChange={handleChange}                                 
            />
          </FormControl>                 
          <ButtonBox>
            <Button small primary>Register</Button>
            <Button small>Log in</Button>
        </ButtonBox>
        </div>
        </Box>    
    </div>)
}