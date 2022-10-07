import Item from "./Item"


const ItemList = ({ products }) => {
 
     return (
      <div className="itemList" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    ); 
  }


export default ItemList