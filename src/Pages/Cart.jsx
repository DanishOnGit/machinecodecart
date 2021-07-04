import { useProduct } from "../Contexts/ProductContext";
import { CartCard } from "../Components/CartCard";
import { OrderDetails } from "../Components/OrderDetails";
export const Cart = () => {
  const {
    state: { cart },
  } = useProduct();
  return (
    <div>
      <ul>
        {cart.map((item) => (
          <CartCard item={item} />
        ))}
      </ul>
      <OrderDetails cart={cart}/>
    </div>
  );
};
