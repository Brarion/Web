export type TGetGames = {
  gameNameStart: string;
  developerNameStart: string;
  publisherNameStart: string;
}

export type TDeveloper = {
  id: number,
  name: string
}

export type TPublisher = {
  id: number,
  name: string
}

export type TGame = {
  description: string,
  developer: TDeveloper,
  id: number,
  name: string,
  price: number,
  publisher: TPublisher
}

export type TGameWithImage = {
  image: string
} & TGame

export type TBuyGame = {
  id: number
  token: string
}

export type TGetPreview = {
  id: number
  token: string
}
