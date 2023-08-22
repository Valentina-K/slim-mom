import { Button } from "@mui/material";
export const OutlinedButton = ({children})=>(<Button variant="outlined" 
              sx={{borderRadius: '30px',
              width: '182px',
              height: "44px",
              ml:'auto',
              mr:'auto',
              p:'13px 25px',
              display:'block',
              background: 'inherit',
              border: '2px solid #FC842D',
              color: '#FC842D'}}>
              {children}
              </Button>);