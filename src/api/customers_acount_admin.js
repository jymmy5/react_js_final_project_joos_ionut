import { apiRest } from './config'

// ----------------------------

function getDashboardMenus(
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/dashboard-menus`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}
// ----------------------------

function getDashboarMenu(
  id,
  successCallback,
  errorCallback = (err) => console.log(err)
) {
  apiRest
    .get(`/dashboard-menu/${id}`)
    .then(({ data }) => {
      successCallback(data)
    })
    .catch((err) => errorCallback(err))
}

// --------------------------------
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
// ------------------------------

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

export { getDashboardMenus, getDashboarMenu, addCustomer, updateUser }
