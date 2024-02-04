import Product from "./Product";

type ProductTypeArray = {
    sku: string;
    name: string;
    price: string;
};

const ProductPage = () => {
  const productData: ProductTypeArray[] = [
    {
      "sku": "item0001",
      "name": "Widget",
      "price": "9.99"
    },
    {
      "sku": "item0002",
      "name": "Premium Widget",
      "price": "19.99"
    },
    {
      "sku": "item0003",
      "name": "Deluxe Widget",
      "price": "29.99"
    }
  ]

  
  return (
      <ul>
        {productData.map((prod) => <Product key={prod.sku} prod={prod} />)}
      </ul>
  );
};

export default ProductPage;