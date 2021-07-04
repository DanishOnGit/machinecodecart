export const checkIfAlreadyInCart=(array,id)=>{
    const isPresent = array.find(item=>item.id===id)
    return !!isPresent
}