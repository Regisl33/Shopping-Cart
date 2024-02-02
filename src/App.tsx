import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductPage from "./Components/ProductPage";
import { initCartState, CartContextProvider } from "./Context/ProductContext";


const App = () => {
  
  return (
    <>
    <CartContextProvider isCartDisplay={initCartState.isCartDisplay}>
      <>
      <Header />
      <ProductPage />
      <Footer />
      </>
      </CartContextProvider>
    </>
  );
};

export default App;


