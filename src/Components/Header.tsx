import { useCart } from "../Context/ProductContext";


const Header = () => {
  const {flip} = useCart()

  return (
    <header>
      <h1>Acme Co.</h1>
      <div className="pricing">
        <p>Total Items:</p>
        <p>Total Price:</p>
        <button onClick={flip}>View Cart</button>
      </div>
      <hr />
    </header>
  );
};

export default Header;
