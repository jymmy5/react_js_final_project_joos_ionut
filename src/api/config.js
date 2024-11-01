
import axios from 'axios'

const API_URL_REST = 'https://yourAPIaddress'
// const API_KEY = 'yourAPIkey'; // Replace with your actual API key

const apiRest = axios.create({
  baseURL: API_URL_REST,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${API_KEY}` // Assuming the API key is used as a Bearer token
  },
})

// For example, if the API key should be sent as x-api-key, you would change the headers like this:
// headers: {
//   'Content-Type': 'application/json',
//   'x-api-key': API_KEY // Use the custom header name
// },

export { apiRest }
