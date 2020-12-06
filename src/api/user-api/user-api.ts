import {http} from '../http'
import {TCache} from "./types";

export const userApi = {
  getCache: async (token: string): Promise<TCache> => {
    const res = await http.get<TCache>('/account/cache', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    return res.data
  }
}
