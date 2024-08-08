// import api from './config';
import { apiRest } from './config'

function getShortFacilitys(
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/short-facilitys`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

function getFacilitys(
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/rest-facilitys`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

export { getShortFacilitys, getFacilitys }
