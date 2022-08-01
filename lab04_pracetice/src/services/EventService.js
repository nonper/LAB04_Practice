import axios from 'axios'

const apiClient = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/se331-2022/passengerdb/passenger',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEventsAir() {
    return apiClient.get('/')
  },
  //Added new call
  getEventsPass(perPage, limit) {
    return apiClient.get('/?_page=' + perPage + '&_limit=' + limit)
  }
}
