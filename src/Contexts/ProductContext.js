import { createContext, useContext, useReducer } from "react";
import { productReducer } from "./ProductReducer";

const ProductContext = createContext();



export const ProductProvider=({children})=>{
    const initialState = {
        showFullInventory: true,
        sortBy: null,
        filterBy: { size: [], brand: [],idealFor:[] },
        productsList: [],
        cart:[],
        saveForLater:[],
        // cartQuantity:1
      };

    const [state,dispatch]=useReducer(productReducer,initialState)

    return <ProductContext.Provider value={{state,dispatch}}>
        {children}
        </ProductContext.Provider>
}

export const useProduct=()=>{
  return useContext(ProductContext)
}