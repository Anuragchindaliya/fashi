import axios from "axios";

export const allProductsApi = async () => {
    return await axios.get('https://ciostik.com/wp-json/wc/store/products', {params:{per_page:100}})
    .then((response) => response.data)
    .catch(err=>Promise.reject(err.message))
    .then(res=>res)
}

export const allCategoriesApi = async () => {
  return await axios.get('https://ciostik.com/wp-json/wc/store/products/categories')
  .then((response) => response.data)
  .catch(err=>Promise.reject(err.message))
  .then(res=>res)
}
