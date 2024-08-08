import { apiRest } from './config'

function submitOrder(
  orderData,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .post(`/submit-order`, orderData)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

export { submitOrder }
