import axios from 'axios'

const httpService = baseURL => axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL
})

export class BaseService {
  constructor(baseUrl) {
    this.httpService =  new httpService(`https://localhost:5000/${baseUrl}`)
  }

  get() {
    return this.httpService.get(this.baseUrl)
  }

  post(body) {
    return this.httpService.post(this.baseUrl, body)
  }

  put(body) {
    return this.httpService.put(this.baseUrl, body)
  }

  delete(body) {
    return this.httpService.delete(this.baseUrl, {
      params: body
     })
  }
}