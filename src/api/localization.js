// import api from './config';
import { apiRest } from './config'

function getLocalization(
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/where-we-are`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

export { getLocalization }
