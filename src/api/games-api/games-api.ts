import {http} from '../http'
import {TBuyGame, TGame, TGameWithImage, TGetGames, TGetPreview} from "./types";
import {TCache} from "../user-api";

export const gamesApi = {
  getGames: async (data: TGetGames): Promise<TGame[]> => {
    const res = await http.get<TGame[]>('/games', {
      params: {
        developerNameStart: data.developerNameStart,
        gameNameStart: data.gameNameStart,
        publisherNameStart: data.publisherNameStart,
      }
    })

    return res.data;
  },

  getPreview: async (games: TGame[]): Promise<TGameWithImage[]> => {
    const images = await games.map(async (game) => {
      const res = await http.get(`games/${game.id}/preview`, {
        responseType: 'arraybuffer',
        headers: {'Cache-Control': 'no-cache'},
      })

      const type = res.headers['content-type']
      const encoded = Buffer.from(res.data, 'binary').toString('base64')

      return `data:${type};base64,${encoded}`
    })

    return Promise.all(images).then((images: string[]) =>
      games.map((game, index) => {
        return {
          description: game.description,
          developer: game.developer,
          id: game.id,
          name: game.name,
          price: game.price,
          publisher: game.publisher,
          image: images[index]
        }
      })
    )
  },

  getPreviewById: async (data: TGetPreview): Promise<string> => {
    const res = await http.get(`games/${data.id}/preview`, {
      responseType: 'arraybuffer',
      headers: {'Cache-Control': 'no-cache'},
    })

    const type = res.headers['content-type']
    const encoded = Buffer.from(res.data, 'binary').toString('base64')

    return `data:${type};base64,${encoded}`
  },

  getById: async (id: number): Promise<TGame> => {
    const res = await http.get(`games/${id}`)
    return res.data
  },

  buyGame: async (data: TBuyGame): Promise<TCache> => {
    const res = await http.put(`/account/bought-games/${data.id}`, null, {
      headers: {
        Authorization: `Bearer ${data.token}`,
      }
    })

    return res.data
  }
}
