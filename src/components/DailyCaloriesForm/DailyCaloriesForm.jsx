import { FormControl, FormControlLabel, RadioGroup, Radio, Input, InputLabel,Box, Typography, Button } from "@mui/material";
const DailyCaloriesForm = ()=>{
    return (       
        <>
        <Typography variant="h2" component="h3">Calculate your daily calorie intake right now</Typography>
        
        <Box component="form" autoComplete="off">
        <div>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <Input
            id="standard-basic"
            label="Height*"
            type='text'   
            placeholder="Height*"  
          />
          </FormControl>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Age*</InputLabel>
          <Input
            id="standard-adornment-password"
            type='text'            
          />
          </FormControl>
          <FormControl>
          <InputLabel htmlFor="standard-adornment-password">Current weight*</InputLabel>
          <Input
            id="standard-adornment-password"
            type='text'            
          />
          </FormControl>
          <FormControl>
          <InputLabel htmlFor="standard-adornment-password">Disared weight*</InputLabel>
          <Input
            id="standard-adornment-password"
            type='text'            
          />
          </FormControl>
          <FormControl>
          <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="1"
      >
        <FormControlLabel value="1" control={<Radio />} label="1" />
        <FormControlLabel value="2" control={<Radio />} label="2" />
        <FormControlLabel value="3" control={<Radio />} label="3" />
        <FormControlLabel value="4" control={<Radio />} label="4" />
      </RadioGroup>
        </FormControl>
        <Button variant="contained">Start losing weight</Button>
        </div>
        </Box>
        </>
    )
}
export default DailyCaloriesForm;