import { Typography } from "@mui/material";
import { Button } from "components/common/ButtonComponent";
import { ModalContent } from "components/ModalContent/ModalContent";
import { Divider } from "components/Divider/Divider";
import { ListBox } from "components/ListBox/ListBox";
import {getProductsByBlood} from 'utils/getProductsByBlood';
import { DiaryProductList } from "components/DiaryProductList/DiaryProductList";

export const DailyCalorieIntake = (props)=>{
    return (
    <ModalContent>
        <Typography variant="h3" sx={{color: '#212121',
              textAlign: 'center',
              fontFamily: 'Verdana',
              fontSize: '26px',
              fontWeight: 700,
              lineHeight: '36.4px',
              mb:'20px',
              pl:'40px',
              pr:'40px'}}>
                Your recommended daily calorie intake is
            </Typography>
            <Typography variant="h4" sx={{color: '#264061',
                fontFamily: 'Verdana',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: 'normal',
                textAlign: 'center',
                letterSpacing: '0.64px',
                mb:'32px'}}>
              <span style={{fontSize:"48px"}}>
                {props.calories}
              </span>
               ккал
            </Typography>
            <Divider />
            <Typography variant="h5" sx={{
              ml:'98px',              
              color: '#212121',
              fontFamily: 'Verdana',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.56px',
              mb:'20px'
            }}>Foods you should not eat</Typography>
            <ListBox>                          
              <DiaryProductList items={getProductsByBlood(props.typeBlood)}/>
            </ListBox>
            <Button primary>
              Start losing weight
              </Button>
    </ModalContent>)
}