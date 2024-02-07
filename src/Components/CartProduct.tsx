import item0001 from "../assets/Images/item0001.jpg"
import item0002 from "../assets/Images/item0002.jpg"
import item0003 from "../assets/Images/item0003.jpg"

const CartProduct = ( {prod}:any) => {

  const imageFunc = ():string => {
    switch(prod.sku){
      case "item0001": return  item0001;
      case "item0002": return item0002;
      case "item0003": return item0003;
      default: throw new Error();
    }
  }

  return (
    <figure>
      <img src={imageFunc()} alt={prod.name} />
      <p>Quantity: {prod.quantity}</p>
    </figure>

  );
};

export default CartProduct;