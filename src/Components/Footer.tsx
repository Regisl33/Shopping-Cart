import { useCart } from "../Context/ProductContext";

const Footer = () => {
  const {isCartDisplay} = useCart();
  return (
    <footer>
      {isCartDisplay ? (<div className="princing">
        <p>Total Items:</p>
        <p>Total Price:</p>
      </div>): null}
      <p>Shopping Cart &copy; 2022</p>   
    </footer>
  );
};

export default Footer;