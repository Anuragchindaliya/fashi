import axios from "axios";

const auth = {
  username: "ck_abddcaf90fa487a6d9f193c680394f9ca8f3ea01",
  password: "cs_b319f241c3bec84ada8c929d0f31a1d465740fea",
};

// export const allProductsApi = async () => {
//   return await axios
//     .get("https://shop.mohitele.com/wp-json/wc/store/products", {
//       params: { per_page: 100 },
//     })
//     .then((response) => response.data)
//     .catch((err) => Promise.reject(err.message))
//     .then((res) => res);
// };

export const allProductsApi = async () => {
  return await axios
    .get("http://web2rise.q2w.in:100/mohitele/wp-json/wc/store/products", {
      params: { per_page: 100 },
    })
    .then((response) => response.data)
    .catch((err) => Promise.reject(err.message))
    .then((res) => res);
};

export const allCategoriesApi = async () => {
  return await axios
    .get(
      "http://web2rise.q2w.in:100/mohitele/wp-json/wc/store/products/categories"
    )
    .then((response) => response.data)
    .catch((err) => Promise.reject(err.message))
    .then((res) => res);
};

export const productBySlug = async (slug) => {
  return await axios
    .get(
      `http://web2rise.q2w.in:100/mohitele/wp-json/wc/store/products/?slug=${slug}`
    )
    .then((response) => response.data)
    .catch((err) => Promise.reject(err.message))
    .then((res) => res);
};

export const searchProduct = async (params) => {
  let paramString = ``;
  const { search, category } = params;
  paramString += search && "search=" + search + "&";
  paramString += category !== "0" && "category=" + category + "&";
  return await axios
    .get(
      `http://web2rise.q2w.in:100/mohitele/wp-json/wc/store/products?${paramString}`,
      {
        auth: auth,
      }
    )
    .then((response) => response.data)
    .catch((err) => Promise.reject(err.message))
    .then((res) => res);
};

export const createAccountApi = async (formData) => {
  return await axios({
    method: "POST",
    url: "http://localhost/meapi/account.php",
    data: JSON.stringify(formData),
  }).then((response) => response.data);
  // return await axios
  //   .post(`http://localhost/meapi/account.php`, JSON.stringify(formData))
  //   .then((response) => response.json())
  //   .catch((err) => Promise.reject(err.message))
  //   .then((res) => res);
};
export const loginApi = async (formData) => {
  return await axios({
    method: "POST",
    url: "http://localhost/meapi/login.php",
    data: JSON.stringify(formData),
  }).then((response) => response.data);
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
