import { getFinalPrice } from "../utils/getFinalPrice";

export const OrderDetails=({cart})=>{
let totalPrice=0;
cart.forEach(item => {
    totalPrice = totalPrice+ getFinalPrice(item.price,item.discount)*item.cartQuantity
});
return (
    <div style={{border:"2 px solid black"}}>
     <p>total items: {cart.length}</p>
     <p>to be paid: {totalPrice} </p>
     
    </div>
)
}