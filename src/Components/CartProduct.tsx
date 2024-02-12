import { useContext } from "react";
import item0001 from "../assets/Images/item0001.jpg"
import item0002 from "../assets/Images/item0002.jpg"
import item0003 from "../assets/Images/item0003.jpg"
import { MdClear } from "react-icons/md";
import { ProductContext, cartProduct, productState } from "../Context/ProductContext";

const CartProduct = ( {prod}:any) => {
  const {del, state, change} = useContext(ProductContext)
  const totalProductPrice:number = parseFloat((prod.quantity * prod.price).toFixed(2));

  const handleQuantity = (state:productState, id:string, quantity:string) => {
    let newCart:cartProduct[] = state.fullCart.map((prod) => prod.sku === id ? {...prod, quantity: parseInt(quantity) }: prod )
    change(newCart)
  }

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
      <select defaultValue={prod.quantity} onChange={(e) => handleQuantity(state, prod.sku, e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
      </select>
      <p>${totalProductPrice}</p>
      <button onClick={(e:any)=> del(e.target.id)} id={prod.sku}><MdClear id={prod.sku}/></button>
    </div>
  );
};

export default CartProduct;