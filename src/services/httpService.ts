import Axios from 'axios'

const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api/' : '//localhost:3030/api/'

var axios = Axios.create({
  withCredentials: true,
})

export const httpService = {
  get<T>(endpoint: string, data: T | null = null) {
    return ajax(endpoint, 'GET', data)
  },
  post<T>(endpoint: string, data: T | null = null) {
    return ajax(endpoint, 'POST', data)
  },
  put<T>(endpoint: string, data: T | null = null) {
    return ajax(endpoint, 'PUT', data)
  },
  delete<T>(endpoint: string, data: T | null = null) {
    return ajax(endpoint, 'DELETE', data)
  },
}

async function ajax<T>(
  endpoint: string,
  method = 'GET',
  data: T | null = null
) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === 'GET' ? data : null,
    })
    return res.data
  } catch (err: any) {
    console.log(err)
    throw err
  }
}
