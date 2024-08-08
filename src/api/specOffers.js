// import api from './config';
import { apiRest } from './config'

function getSpecOffers(
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/special-offers`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

export { getSpecOffers }
