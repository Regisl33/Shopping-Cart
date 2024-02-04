import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { initProductState, CartContextProvider } from "./Context/ProductContext";


const App = () => {
  
  return (
    <>
    <CartContextProvider isCartDisplay={initProductState.isCartDisplay} totalItems={initProductState.totalItems} totalPrice={initProductState.totalPrice}>
      <>
      <Header />
      <Main />
      <Footer />
      </>
      </CartContextProvider>
    </>
  );
};

export default App;


