import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { initProductState, ProductContextProvider } from './Context/ProductContext';


const App = () => {

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


