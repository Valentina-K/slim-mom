import { Button } from "components/common/ButtonComponent"

export const DiaryAddProductForm = () =>{
    return (<form>
        <input type='text' id='productName' value='' name='productName' placeholder="Enter product name"/>
        <input type='text' id='grams' value='' name='grams' placeholder="Grams"/>
        <Button primary small>Add</Button>
    </form>)
}