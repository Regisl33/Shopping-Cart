import { useCart } from "../Context/ProductContext";
import ProductPage from "./ProductPage";
import Cart  from "./Cart";

const Main = () => {
  const {isCartDisplay} = useCart();

  return (
    <main>
      {isCartDisplay ? <Cart/> : <ProductPage/> }
    </main>
  );
};

export default Main;