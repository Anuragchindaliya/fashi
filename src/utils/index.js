import _ from "lodash";

export const apiTypeCreator = (type) => {
  return {
    FETCH: `${type}_FETCH`,
    SUCCESS: `${type}_SUCCESS`,
    ERROR: `${type}_ERROR`,
    RESET: `${type}_RESET`,
  };
};

export const getTotalPrice = (cart) => {
  const keysArr = Object.keys(cart);
  let cartTotalPrice = 0;
  !_.isEmpty(cart) &&
    keysArr.forEach((key) => {
      let price = cart[key].prices?.sale_price || cart[key].price;
      cartTotalPrice += parseInt(price * cart[key].qty);
    });
  return cartTotalPrice;
};
