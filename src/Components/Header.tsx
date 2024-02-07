import { useCart } from "../Context/ProductContext";

const Header = () => {
  const {flip, totalItems, totalPrice} = useCart()

  return (
    <header>
      <h1>Acme Co.</h1>
      <div className="pricing">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice} $</p>
        <button onClick={flip}>View Cart</button>
      </div>
      <hr />
    </header>
  );
};

export default Header;
