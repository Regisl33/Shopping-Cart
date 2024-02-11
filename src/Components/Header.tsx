import { useContext } from "react";
import { ProductContext, handleTotalItems, handleTotalPrice } from "../Context/ProductContext";

const Header = () => {
  const context = useContext(ProductContext)

  return (
    <header>
      <h1>Acme Co.</h1>
      <div className="pricing">
        <p>Total Items: {handleTotalItems(context.state)}</p>
        <p>Total Price: {handleTotalPrice(context.state)} $</p>
        <button onClick={context.flip}>{context.state.isCartDisplay ? "View Products" : "View Cart"}</button>
      </div>
      <hr />
    </header>
  );
};

export default Header;
