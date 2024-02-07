import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { state } = useContext(ProductContext);

  return (
    <div className="cart">
      {state.fullCart.map((prod) => <CartProduct key={prod.sku} prod={prod} />)}
    </div>
  );
};

export default Cart;