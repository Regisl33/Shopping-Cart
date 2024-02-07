import Product from './Product';
import { ProductTypeArray } from "../Context/ProductContext";
import product from "../../Data/ProductData.json";


const ProductPage = () => {
  const productData: ProductTypeArray[] = product.products;

  return (
      <ul>
        {productData.map((prod) => <Product key={prod.sku} prod={prod} />)}
      </ul>
  );
};

export default ProductPage;