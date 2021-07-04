import { useProduct } from "../Contexts/ProductContext";
import { CartCard } from "../Components/CartCard";

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
    </div>
  );
};
