// import api from './config';
import { apiRest } from './config'

function getAbout(successCallback, errorCallback = (err) => console.log(err)) {
  apiRest
    .get(`/about`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

export { getAbout }
