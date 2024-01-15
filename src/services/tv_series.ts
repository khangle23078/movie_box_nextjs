import { instance } from "./instance"

export const getTVSeries = (orderBy: string = "popular") => {
  return instance.get(`${process.env.NEXT_PUBLIC_API_URL}/tv/${orderBy}`)
}

export const getTVSeriesById = (id: string | string[] | undefined) => {
  return instance.get(`${process.env.NEXT_PUBLIC_API_URL}/tv/${id}`)
}

