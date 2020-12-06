import { oauth } from '../http'
import querystring from 'querystring'
import { LoginType } from './types'

export const oauthApi = {
  login: async (credentials: { login: string; password: string }): Promise<LoginType> => {
    const res = await oauth.post<LoginType>(
      'token',
      querystring.stringify({
        grant_type: 'password',
        username: credentials.login,
        password: credentials.password,
        client_id: 'steam-like-app-api-client',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic c3RlYW0tbGlrZS1hcHAtYXBpLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtY2xpZW50LXBhc3N3b3JkMTIzNA==',
        },
      }
    )

    return res.data
  },
}
