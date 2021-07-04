import { useProduct } from "../Contexts/ProductContext";
import { getFinalPrice } from "../utils/getFinalPrice";


export const SaveForLaterCard = ({ item }) => {
const {dispatch}=useProduct();

const removeFromSaveForLater=(item)=>{
dispatch({type:"UPDATE_SAVE_FOR_LATER",payload:item})
}

const moveToCart=(item)=>{
    removeFromSaveForLater(item)
    dispatch({type:"UPDATE_CART",payload:item})
}

  return (
    <div>
      <div
        className="outlined resized margin-bottom"
        style={{ width: "15rem",padding:"1rem",margin:"1rem"}}
        key={item.id}
      >
          
        <div className="image-and-details-wrapper-cart">
          <div className="card-image resized-image">
            <img
              className="cart-card-image resized-card-image"
              src={item.image}
              alt="..."
            />
          </div>
          <div className="details-wrapper">
            <h4 className="brand">{item.brand}</h4>
            <p className="offer-wrapper">
              <span>Rs.{getFinalPrice(item.price, item.discount)}</span>
              <span className="line-through small">Rs.{item.price}</span>
              <span className="discount">{item.discount}% OFF</span>
            </p>
            <button disabled className="btn btn-secondary decrease">
              -
            </button>{" "}
            <span className="quantity">{item.cartQuantity}</span>{" "}
            <button disabled className="btn btn-secondary increase">
              +
            </button>
          </div>
        </div>
        <div className="cta-wrapper">
          <button
            onClick={() => removeFromSaveForLater(item)}
            className="btn btn-link btn-link-hover remove"
          >
            REMOVE
          </button>

          <button
              onClick={() => moveToCart(item)}
            className="btn btn-link btn-link-hover wishlist"
          >
            Move to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
