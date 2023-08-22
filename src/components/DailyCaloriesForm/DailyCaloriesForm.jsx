import { useState } from "react";
/* import { useDispatch, useSelector } from 'react-redux'; */
import { FormControl, FormControlLabel,FormLabel, RadioGroup, Radio, Input, Box, Typography } from "@mui/material";
import { dailyCalories } from "utils/dailyCalories";
import { Modal } from "components/Modal/Modal";
import { DailyCalorieIntake } from "components/DailyCalorieIntake/DailyCalorieIntake";
import laptopBackground from 'images/laptop/laptop-background.jpg';
import { Button } from "components/common/ButtonComponent";


const DailyCaloriesForm = ()=>{
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [currentWeight, setCurrentWeight] = useState(0);
  const [disaredWeight, setDisaredWeight] = useState(0);
  const [typeBlood, setTypeBlood] = useState(1);
  /* const [isSubmit,setIsSubmit] = useState(false); */
  const [calories,setCalories] = useState(0);
  const [active,setActive] = useState(false);

  const userData={};

  /* const dispatch = useDispatch(); */
  const handleSubmit = evt => {
    evt.preventDefault();
    userData.height=height;
    userData.currentWeight=currentWeight;
    userData.age=age;
    userData.disaredWeight=disaredWeight;
    userData.typeBlood=typeBlood;
    localStorage.setItem('userData',JSON.stringify(userData));  
    setCalories(dailyCalories(userData)); 
    reset(); 
    /* groupBloodNotAllowed */
    setActive(true);
    /* setIsSubmit(true); */    
  };
  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'age':
        setAge(Number(value));
        break;
      case 'height':
        setHeight(Number(value));
        break;
      case 'currentWeight':
        setCurrentWeight(Number(value));
        break;
      case 'disaredWeight':
        setDisaredWeight(Number(value));
        break;
      case 'typeBlood':
        setTypeBlood(Number(value));
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setHeight(0);
    setCurrentWeight(0);
    setDisaredWeight(0);
    setAge(0);
    setTypeBlood(1);
  };
    return (       
        <>
        <Modal active={active} setActive={setActive}>        
            <DailyCalorieIntake calories={calories} typeBlood={typeBlood}/>
        </Modal>
        <Typography variant="h2" component="h3">Calculate your daily calorie intake right now</Typography>
        
        <Box component="form" autoComplete="off" onSubmit={handleSubmit} sx={{backgroundImage:`url(${laptopBackground})`, width: '100vw', height: '100vh'}}>
        <div style={{display:'flex'}}>
        <div style={{display:'flex', flexDirection:'column'}}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <Input
              id="standard-height"
              label="Height*"
              type='text'  
              name="height" 
              placeholder="Height (sm)*"  
              required onChange={handleChange}                         
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">          
            <Input
              id="standard-age"
              type='text'  
              placeholder="Age*"
              name="age"
              required onChange={handleChange}                                   
            />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">          
            <Input
              id="standard-current-weight"
              type='text' 
              placeholder="Current weight (kg)*" 
              name="currentWeight"  
              required onChange={handleChange}                                 
            />
        </FormControl>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <Input
              id="standard-disared-weight"
              type='text' 
              placeholder="Disared weight (kg)*" 
              name="disaredWeight"   
              required onChange={handleChange}                                
          />
        </FormControl>
        <FormControl>
        <FormLabel id="blood-type-label">Blood type*</FormLabel>
          <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="1" onChange={handleChange}                  
            >
            <FormControlLabel value="1" control={<Radio />} name="typeBlood" label="1" />
            <FormControlLabel value="2" control={<Radio />} name="typeBlood" label="2" />
            <FormControlLabel value="3" control={<Radio />} name="typeBlood" label="3" />
            <FormControlLabel value="4" control={<Radio />} name="typeBlood" label="4" />
          </RadioGroup>
        </FormControl>
        </div>        
        </div>
        <Button primary>Start losing weight</Button>
        </Box>
        </>
    )
}
export default DailyCaloriesForm;

/* color: #212121;
font-family: Verdana;
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: 140%; */