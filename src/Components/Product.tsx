import item0001 from "../assets/Images/item0001.jpg"
import item0002 from "../assets/Images/item0002.jpg"
import item0003 from "../assets/Images/item0003.jpg"

const Product = ( {prod}: any) => {
  

  const imageFunc = ():string => {
    switch(prod.sku){
      case "item0001": return  item0001;
      break;
      case "item0002": return item0002;
      break;
      case "item0003": return item0003;
      break;
      default: throw new Error();
    }
  
  }
  
  return (
    <li>
      <h2>{prod.name}</h2>
      <img src={imageFunc()} alt={prod.name} />
      <p>{prod.price}</p>
      <button>Add to Cart</button>
    </li>
  );
};

export default Product;