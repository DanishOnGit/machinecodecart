import { getFinalPrice } from "../utils/getFinalPrice";

export const OrderDetails = ({ cart }) => {
  let totalPrice = 0;
  let finalPrice = 0;
  let totalDiscount = 0;
  cart.forEach((item) => {
    finalPrice =
      finalPrice + getFinalPrice(item.price, item.discount) * item.cartQuantity;
  });
  cart.forEach((item) => {
    totalPrice = totalPrice + item.price;
  });
  cart.forEach((item) => {
    totalDiscount = totalDiscount + item.price * (item.discount / 100);
  });
  return (
    <div style={{ border: "2px solid black",marginBottom:"3rem",width:"fit-content",padding:"1rem" }}>
      <p>
        {" "}
        Price({cart.length} items): {totalPrice}{" "}
      </p>
      <p>Discount: {totalDiscount} </p>
      <p>Final Amount: {finalPrice} </p>
    </div>
  );
};
