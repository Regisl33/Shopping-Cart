import { useContext} from "react";
import { ProductContext } from "../Context/ProductContext";
import  ProductPage  from "./ProductPage";
import Cart  from "./Cart";


const Main = () => {
  const { state } = useContext(ProductContext); 

  return (
    <main>
      {state.isCartDisplay ? <Cart/> : <ProductPage/> }
    </main>
  );
};

export default Main;