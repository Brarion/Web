import axios from 'axios'

export const http = axios.create({ baseURL: '/api' })
export const oauth = axios.create({ baseURL: '/oauth' })
