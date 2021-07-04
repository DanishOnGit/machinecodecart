export const getFinalPrice = (price, discount) => {
    return price - (price * discount) / 100;
  };
