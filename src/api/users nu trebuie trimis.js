import { apiRest } from './config'

function loginUser(
  username,
  password,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .post('/api/login', { username, password })
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

function getUser(
  id,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/users/${id}`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

export { loginUser, getUser }
