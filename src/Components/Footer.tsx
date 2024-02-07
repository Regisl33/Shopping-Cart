import { useCart } from "../Context/ProductContext";

const Footer = () => {
  const {isCartDisplay, totalItems, totalPrice} = useCart();
  return (
    <footer>
      {isCartDisplay ? null : (
        <div className="princing">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice} $</p>
        </div>
      )}
      <p>Shopping Cart &copy; 2022</p>   
    </footer>
  );
};

export default Footer;