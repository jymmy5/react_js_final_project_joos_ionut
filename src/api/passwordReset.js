import { apiRest } from './config'

// ----------- 1 ---------
function forgotPassword(
  email,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .post('/customer/forgot-password', { email })

    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}
// -------------------
function resetPassword(
  formData,
  token,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .post('/customer/reset-password', { ...formData, token })
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}
// -------------
function updatePassword(
  id,
  formData,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .put(`/customer/update-password/${id}`, formData)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

export { forgotPassword, resetPassword, updatePassword }
