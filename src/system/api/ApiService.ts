import axios, { AxiosResponse } from 'axios'
import { baseUrl } from 'app/system/helpers'

export const ApiService = axios.create({
  baseURL: baseUrl,
})

ApiService.interceptors.response.use((response: AxiosResponse) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data
  } else {
    
  }
})