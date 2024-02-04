import item0001 from "../assets/Images/item0001.jpg"
import item0002 from "../assets/Images/item0002.jpg"
import item0003 from "../assets/Images/item0003.jpg"
import { MdArrowRightAlt } from "react-icons/md"
import { IoMdCheckmark } from "react-icons/io"

const Product = ( {prod}: any) => {
  
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
        <span><MdArrowRightAlt/>Item in Cart: <IoMdCheckmark className="check"/></span>
      </div>
      <button>Add to Cart</button>
    </li>
  );
};

export default Product;