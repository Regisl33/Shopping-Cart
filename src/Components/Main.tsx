import { useContext, useEffect } from "react";
import { useCart, handleTotalItems, handleTotalPrice, ProductContext } from "../Context/ProductContext";
import ProductPage from "./ProductPage";
import Cart  from "./Cart";


const Main = () => {
  const {isCartDisplay} = useCart();

  const { state } = useContext(ProductContext); 

  useEffect(() =>{
    state.totalItems =  handleTotalItems(state);
    state.totalPrice = handleTotalPrice(state);
  } , [state.fullCart]);

  return (
    <main>
      {isCartDisplay ? <Cart/> : <ProductPage/> }
    </main>
  );
};

export default Main;