import { useEffect, useState } from "react";
import { useProduct } from "../Contexts/ProductContext";
import axios from "axios";
import { ProductCard } from "./ProductCard";
export const ProductListingPage = () => {
  const [loading, setLoading] = useState(false);
  const {
    state: { productsList },dispatch
  } = useProduct();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const {
          data: { products },
        } = await axios.get("data.json");
        setTimeout(() => {
          dispatch({ type: "GET_PRODUCTS", payload: products });
        }, 2000);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div>
     {loading?<h1>Loading.....</h1>:<ul>
        {productsList.map((product) => (
          <ProductCard product={product} />
        ))}
      </ul>}
    </div>
  );
};
