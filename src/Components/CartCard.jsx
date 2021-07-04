import { useProduct } from "../Contexts/ProductContext"
import {getFinalPrice} from "../utils/getFinalPrice";

export const CartCard=({item})=>{

const {state:{cartQuantity},dispatch}=useProduct();

const removeFromCartHandler=(item)=>{
    dispatch({type:"UPDATE_CART",payload:item})
}
const increaseQuantityHandler=(item,quantity)=>{
    dispatch({type:"INCREASE_CART_QUANTITY",payload:{item,quantity}})
}

    return(
        <div>
            <div className="outlined resized margin-bottom" style={{width:"15rem"}} key={item.id}>
      <div className="image-and-details-wrapper-cart">
        <div className="card-image resized-image">
          <img className="cart-card-image resized-card-image" src={item.image} alt="..." />
        </div>
        <div className="details-wrapper">
          <h4 className="brand">{item.brand}</h4>
          <p className="offer-wrapper">
            <span>Rs.{getFinalPrice(item.price, item.discount)}</span>
            <span className="line-through small">Rs.{item.price}</span>
            <span className="discount">{item.discount}% OFF</span>
          </p>
          <button
            // onClick={() => decreaseQuantityHandler(item, cartQuantity)}
            className="btn btn-secondary decrease"
          >
            -
          </button>{" "}
          <span className="quantity">{item.cartQuantity}</span>{" "}
          <button
            onClick={() => increaseQuantityHandler(item,cartQuantity)}
            className="btn btn-secondary increase"
          >
            +
          </button>
        </div>
      </div>
      <div className="cta-wrapper">
        <button
          onClick={() => removeFromCartHandler(item)}
          className="btn btn-link btn-link-hover remove"
        >
          REMOVE
        </button>

        <button
          
        //   onClick={() => movetowishlist(item)}
          className="btn btn-link btn-link-hover wishlist"
        >
          Save for later
        </button>
      </div>
    </div>
        </div>
    )
}