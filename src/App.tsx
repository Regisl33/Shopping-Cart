import { useContext, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { initProductState, ProductContext, ProductContextProvider, handleTotalItems, handleTotalPrice } from './Context/ProductContext';


const App = () => {
  const {state} = useContext(ProductContext)

  useEffect(() =>{
    state.totalItems =  handleTotalItems(state);
    state.totalPrice = handleTotalPrice(state);
  } , [state.fullCart]);

  return (
    <>
    <ProductContextProvider isCartDisplay={initProductState.isCartDisplay} totalItems={initProductState.totalItems} totalPrice={initProductState.totalPrice} fullCart={initProductState.fullCart}>
      <>
      <Header />
      <Main />
      <Footer />
      </>
      </ProductContextProvider>
    </>
  );
};

export default App;


