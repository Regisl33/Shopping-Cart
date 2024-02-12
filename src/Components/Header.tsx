import { useContext } from "react";
import { ProductContext, handleTotalItems, handleTotalPrice } from "../Context/ProductContext";

const Header = () => {
  const {state, flip} = useContext(ProductContext)

  return (
    <header>
      <h1>Acme Co.</h1>
      <div className="pricing">
        <p>Total Items: {handleTotalItems(state)}</p>
        <p>Total Price: {handleTotalPrice(state)} $</p>
        <button onClick={flip}>{state.isCartDisplay ? "View Products" : "View Cart"}</button>
      </div>
      <hr />
    </header>
  );
};

export default Header;
