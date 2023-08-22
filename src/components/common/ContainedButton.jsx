import { Button } from "@mui/material";
export const ContainedButton = ({width,height,children})=>(<Button variant="contained" 
              sx={{borderRadius: '30px',
              width: `${width}`,
              height: `${height}`,              
              ml:'auto',
              mr:'auto',
              p:'13px 25px',
              display:'block',
              background: '#FC842D',
              boxShadow: '0px 4px 10px 0px rgba(252, 132, 45, 0.50)'}}>
              {children}
              </Button>);