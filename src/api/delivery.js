// import api from './config';
import { apiRest } from './config'

function getDeliveryCond(
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/delivery-conditions`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

function getDeliveryPrices(
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/delivery-prices`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

export { getDeliveryCond, getDeliveryPrices }
