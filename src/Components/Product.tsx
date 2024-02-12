import { useContext } from "react"
import item0001 from "../assets/Images/item0001.jpg"
import item0002 from "../assets/Images/item0002.jpg"
import item0003 from "../assets/Images/item0003.jpg"
import { MdArrowRightAlt } from "react-icons/md"
import { IoMdCheckmark } from "react-icons/io"
import { ProductContext } from "../Context/ProductContext"


const Product = ( {prod}: any) => {
  const {state, add} = useContext(ProductContext)

  const imageFunc = ():string => {
    switch(prod.sku){
      case "item0001": return  item0001;
      case "item0002": return item0002;
      case "item0003": return item0003;
      default: throw new Error();
    }
  }
  
  return (
    <li>
      <h2>{prod.name}</h2>
      <img src={imageFunc()} alt={prod.name} />
      <div className="price">
        <p>{prod.price}</p>
        {state.fullCart.map((cartProd) => cartProd.sku !== prod.sku ? null : cartProd.quantity === 0 ? null : <span key={prod.sku}><MdArrowRightAlt/>Item in Cart: <IoMdCheckmark className="check"/></span>)}
      </div>
      <button onClick={(e:any)=> add(e.target.id)}id={prod.sku}>Add to Cart</button>
    </li>
  );
};

export default Product;