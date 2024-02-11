import { useContext } from "react";
import { ProductContext, handleTotalItems, handleTotalPrice } from "../Context/ProductContext";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { state, clear } = useContext(ProductContext);

  return (
    <div className="cart">
      {state.fullCart.map((prod) => prod.quantity === 0 ? null : <CartProduct key={prod.sku} prod={prod} />)}
      <p>Total Items: {handleTotalItems(state)}</p>
      <p>Total Price: {handleTotalPrice(state)} $</p>
      <button  onClick={() => clear()} className="place-order-btn">Place Order</button>
    </div>
  );
};

export default Cart;