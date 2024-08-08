import { apiRest } from './config'

function loginCustomer(
  username,
  password,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .post('/customer/login', { username, password })
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

function getCustomer(
  id,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/customer/${id}`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

function addCustomer(
  customerData,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .post(`/api/customers`, customerData)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

function updateUser(
  id,
  customerData,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .post(`/api/customers/${id}`, customerData)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

function updateUserData(
  id,
  customerData,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .put(`/api/customers/${id}`, customerData)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}
export { loginCustomer, getCustomer, addCustomer, updateUser, updateUserData }
