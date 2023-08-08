import { useSelector } from 'react-redux';
import { Divider } from 'components/Divider/Divider';
export const Modal = ({})=>{
    return (
        <ModalContainer>
            <h2>Your recommended daily calorie intake is</h2>
            <p><span>{}</span> ккал</p>
            <Divider />
            <h3>Foods you should not eat</h3>
            <List></List>
            <Button/>
        </ModalContainer>
    )
}