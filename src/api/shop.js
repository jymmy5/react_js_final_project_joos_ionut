import { apiRest } from './config'

function getCategories(
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/categories`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

function getCategoryProducts(
  id,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/products/category/${id}`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

function getCategoriesProduct(
  id,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/categories/${id}`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

function getProducts(
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/products`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

function getProduct(
  id,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/product/${id}`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

export {
  getCategories,
  getProducts,
  getProduct,
  getCategoryProducts,
  getCategoriesProduct,
}
