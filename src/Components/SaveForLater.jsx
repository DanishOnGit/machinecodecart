import { useProduct } from "../Contexts/ProductContext";
import { SaveForLaterCard } from "./SaveForLaterCard";

export const SaveForLater = ({ item }) => {
    const {state:{saveForLater}}=useProduct();
  return (
    <div>
      <h2>Saved for later:</h2>
      <p>{saveForLater.length===0?"No items here":""}</p>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {saveForLater.map((item) => (
          <SaveForLaterCard item={item} />
        ))}
      </ul>
    </div>
  );
};
