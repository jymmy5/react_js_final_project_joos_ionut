// import api from './config';
import { apiRest } from './config'

function getWTimes(successCallback, errorCallback = (err) => console.log(err)) {
  apiRest
    .get(`/working-program`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

export { getWTimes }
