import { useContext } from "react";
import item0001 from "../assets/Images/item0001.jpg"
import item0002 from "../assets/Images/item0002.jpg"
import item0003 from "../assets/Images/item0003.jpg"
import { MdClear } from "react-icons/md";
import { ProductContext } from "../Context/ProductContext";

const CartProduct = ( {prod}:any) => {
  const context = useContext(ProductContext)
  const totalProductPrice:number = prod.quantity * prod.price;

  const imageFunc = ():string => {
    switch(prod.sku){
      case "item0001": return  item0001;
      case "item0002": return item0002;
      case "item0003": return item0003;
      default: throw new Error();
    }
  }

  return (
    <div className="product">
    <figure>
      <img src={imageFunc()} alt={prod.name} />
      <p>{prod.name}</p>
      </figure>
      <p>${prod.price}</p>
      <select id={prod.sku}onChange={(e) => console.log(e.target.value)} id="quantity">
        <option selected={prod.quantity === 1? true : false}value="1">1</option>
        <option selected={prod.quantity === 2? true : false}value="2">2</option>
        <option selected={prod.quantity === 3? true : false}value="3">3</option>
        <option selected={prod.quantity === 4? true : false}value="4">4</option>
        <option selected={prod.quantity === 5? true : false}value="5">5</option>
        <option selected={prod.quantity === 6? true : false}value="6">6</option>
        <option selected={prod.quantity === 7? true : false}value="7">7</option>
        <option selected={prod.quantity === 8? true : false}value="8">8</option>
        <option selected={prod.quantity === 9? true : false}value="9">9</option>
        <option selected={prod.quantity === 10? true : false}value="10">10</option>
      </select>
      <p>${totalProductPrice}</p>
      <button onClick={(e:any)=> context.del(e.target.id)} id={prod.sku}><MdClear id={prod.sku}/></button>
    </div>
  );
};

export default CartProduct;