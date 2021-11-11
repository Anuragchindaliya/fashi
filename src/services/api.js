import axios from "axios";

const auth = {
  username: 'ck_784db685a0e8635e7b47c8322ce58bc495906def',
  password: 'cs_3f046a48c9f17b9aa737767ceeacef93bc83b6b4'
}

export const allProductsApi = async () => {
  return await axios.get('http://onlinepainmedi.com/wp-json/wc/store/products', {params:{per_page:100}})
  .then((response) => response.data)
  .catch(err=>Promise.reject(err.message))
  .then(res=>res)
}

export const allCategoriesApi = async () => {
return await axios.get('http://onlinepainmedi.com/wp-json/wc/store/products/categories')
.then((response) => response.data)
.catch(err=>Promise.reject(err.message))
.then(res=>res)
}

export const productBySlug = async () => {
  return await axios.get('https://ciostik.com/wp-json/wc/v3/products/categories',{
    auth: auth
  })
  .then((response) => response.data)
  .catch(err=>Promise.reject(err.message))
  .then(res=>res)
}
