import { useNavigate } from "react-router";
import { useProduct } from "../Contexts/ProductContext";
import { checkIfAlreadyInCart } from "../utils/checkIfAlreadyInCart";
import { addToCart } from "../utils/addToCart";
export const ProductCard = ({ product }) => {
  const sizeArr = product.size.map((size) => <span>{size} </span>);
  const {
    state: { cart },dispatch
  } = useProduct();
  const navigate = useNavigate();

  const getFinalPrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  return (
    <div class="image-card-wrapper outlined" style={{ width: "15rem" }}>
      <div class="card-image greater-height">
        <img src={product.image} alt="..." />
        <span class="badge-success">New</span>
      </div>
      <div class="product-details-wrapper">
        <p class="strong">{product.brand}</p>
        <p>{product.type}</p>
        <p>
          <span class="strong">
            Rs{getFinalPrice(product.price, product.discount)}{" "}
          </span>
          <span class="line-through">{product.price}</span>
          <span style={{ color: "#fc452e" }}>{product.discount} % OFF</span>
        </p>
        <p>{sizeArr}</p>
      </div>
      <button
      className="btn btn-primary"
        onClick={() => {
          const result = checkIfAlreadyInCart(cart, product.id);
          if (!result) {
            addToCart(cart,product,dispatch);
          } else {
            navigate("/cart");
          }
        }}
      >
        {" "}
        {checkIfAlreadyInCart(cart, product.id) ? "Go to cart" : "Add to cart"}
      </button>
    </div>
  );
};
