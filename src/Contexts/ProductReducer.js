export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_PRODUCTS": {
      return {
        ...state,
        productsList: payload,
      };
    }

    case "UPDATE_CART": {
      const result = state.cart.find((item) => item.id === payload.id);
      if (!result) {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...payload,
              existsInCart: true,
              cartQuantity: 1,
            },
          ],
        };
      }else{
        const result = state.cart.filter(item=>item.id!==payload.id)
        return{
          ...state,
          cart:result
        }
      }
    }

    case "INCREASE_CART_QUANTITY":{
      console.log("increaeing...")
      return{
        ...state,
        cart:state.cart.map(item=>{
          console.log(item)
          if(item.id===payload.id){
            
            return {
              ...item,
              cartQuantity:item.cartQuantity+1
            }
          }return item
        })
      }
    }
    case "DECREASE_CART_QUANTITY":{
     
      return{
        ...state,
        cart:state.cart.map(item=>{
          console.log(item)
          if(item.id===payload.id){
            
            return {
              ...item,
              cartQuantity:item.cartQuantity-1
            }
          }return item
        })
      }
    }

    default:
      return state;
  }
};
