// import api from './config';
import { apiRest } from './config'

function getUnitData(
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/unit-data`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

function getPageMenus(
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/page-menu`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

function getBurgerMenus(
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/burger-menu`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

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

function getCategoryProducts(
  id,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/products/?category_id=${id}`)
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
    .get(`/products/${id}`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

export {
  getUnitData,
  getPageMenus,
  getBurgerMenus,
  getCategories,
  getProducts,
  getProduct,
  getCategoryProducts,
  getCategoriesProduct,
}
