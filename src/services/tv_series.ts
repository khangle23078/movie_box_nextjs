import { instance } from "./instance"

export const getTVSeries = (orderBy: string = "popular") => {
  return instance.get(`${process.env.API_URL}/tv/${orderBy}`)
}
