import { useContext } from "react";
import { ProductContext, handleTotalItems, handleTotalPrice } from "../Context/ProductContext";

const Footer = () => {
  const { state } = useContext(ProductContext)

  return (
    <footer>
      {state.isCartDisplay ? null : (
        <div className="princing">
          <p>Total Items: {handleTotalItems(state)}</p>
          <p>Total Price: {handleTotalPrice(state)} $</p>
        </div>
      )}
      <p>Shopping Cart &copy; 2022</p>   
    </footer>
  );
};

export default Footer;