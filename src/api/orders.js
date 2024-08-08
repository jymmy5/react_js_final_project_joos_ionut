import { apiRest } from './config';

function getOrders(
  cusotmerId,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/api/customer-orders/${cusotmerId}`)
    .then(({ data }) => {
      successCallback(data);
    })
    .catch((err) => errorCallback(err));
}

function getOrder(
  id,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/orders/${id}`)
    .then(({ data }) => {
      successCallback(data);
    })
    .catch((err) => errorCallback(err));
}

export { getOrders, getOrder };
