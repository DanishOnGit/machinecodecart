import { useProduct } from "../Contexts/ProductContext";
import { CartCard } from "../Components/CartCard";
import { OrderDetails } from "../Components/OrderDetails";
import { SaveForLater } from "../Components/SaveForLater";

export const Cart = () => {

  const {
    state: { cart },
  } = useProduct();


  return (
    <div style={{margin:"1rem"}}>
        <h3>{cart.length===0?"No items here":""}</h3>
      <ul style={{marginBottom:"3rem",display:"flex",flexWrap:"wrap"}}>
        {cart.map((item) => (
          <CartCard item={item} />
        ))}
      </ul>
      <OrderDetails cart={cart}/>
      <SaveForLater/>
    </div>
  );
};
