import { DiaryProductListItem } from "components/DiaryProductListItem/DiaryProductListItem";
/* import { Ol } from "./DiaryProductList.styled"; */
export const DiaryProductList = ({items})=>{
    return (
        <ol>
        {items.map(item=>(            
            <DiaryProductListItem key={item._id.$oid} title={item.title.ua}/>            
        ))}
        </ol>
    )
}