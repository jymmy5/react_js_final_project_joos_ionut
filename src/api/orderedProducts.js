import { apiRest } from './config';

function getCustomerOderedProducts(
  cusotmerId,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/api/customer-ordered-products/${cusotmerId}`)
    .then(({ data }) => {
      successCallback(data);
    })
    .catch((err) => errorCallback(err));
}

function getOrderedProduct(
  id,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/api/ordered-product/${id}`)
    .then(({ data }) => {
      successCallback(data);
    })
    .catch((err) => errorCallback(err));
}

export { getCustomerOderedProducts, getOrderedProduct };
