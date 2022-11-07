import Item from "../ItemList/Item"
import './ItemDetail.css'




const ItemDetail = ({ product }) => {

    return (
        <>  
        <div style={{textAlign:"center",display:"grid",justifyContent:"center",gridGap:"25px"}}>
            <div>
            <Item product={product} /> 
            </div>        
    </div>
        </>
    );
}

export default ItemDetail;




