

export const addToCart=(cart,item,dispatch)=>{

dispatch({type:"UPDATE_CART",payload:item})
}