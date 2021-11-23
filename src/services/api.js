import axios from "axios";

const auth = {
  username: "ck_4149c771187a4472b12372a205c2ffd2cfa9c095",
  password: "cs_197a285ce0b4273303c01e8ea1c9c73f64bc477f",
};

export const allProductsApi = async () => {
  return await axios
    .get("https://shop.mohitele.com/wp-json/wc/store/products", {
      params: { per_page: 100 },
    })
    .then((response) => response.data)
    .catch((err) => Promise.reject(err.message))
    .then((res) => res);
};

export const allCategoriesApi = async () => {
  return await axios
    .get("https://shop.mohitele.com/wp-json/wc/store/products/categories")
    .then((response) => response.data)
    .catch((err) => Promise.reject(err.message))
    .then((res) => res);
};

export const productBySlug = async (slug) => {
  return await axios
    .get(`https://shop.mohitele.com/wp-json/wc/v3/products/?slug=${slug}`, {
      auth: auth,
    })
    .then((response) => response.data)
    .catch((err) => Promise.reject(err.message))
    .then((res) => res);
};
export const searchProduct = async (query) => {
  return await axios
    .get(`https://shop.mohitele.com/wp-json/wc/v3/products?search=${query}`, {
      auth: auth,
    })
    .then((response) => response.data)
    .catch((err) => Promise.reject(err.message))
    .then((res) => res);
};
// export const searchProduct = async (query) => {
//   return await axios
//     .get(`https://shop.mohitele.com/wp-json/wc/v3/products?search=${query}`, {
//       auth: auth,
//     })
//     .then((response=>response.data))
//     .catch((err) => Promise.reject(err.message))
//     .then((res) => res);
// };
