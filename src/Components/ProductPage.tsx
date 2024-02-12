import Product from './Product';
import { products } from "../../Data/ProductData.json";

type ProductTypeArray = {
  sku: string;
  name: string;
  price: string;
};

const ProductPage = () => {
  const productData: ProductTypeArray[] = products;

  return (
      <ul>
        {productData.map((prod) => <Product key={prod.sku} prod={prod} />)}
      </ul>
  );
};

export default ProductPage;