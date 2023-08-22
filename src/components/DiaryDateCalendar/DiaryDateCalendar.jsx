import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';
export const DiaryDateCalendar = ()=>{
const [selectedDate,setSelectedDate]=useState(dayjs());
console.log(selectedDate)
const  onChangeDate= (value)=>{
    setSelectedDate(value);
}
    return (<DatePicker defaultValue={selectedDate} onChange={onChangeDate}/>)};
    
