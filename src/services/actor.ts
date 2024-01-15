import { instance } from "./instance"

export const getActors = () => {
  return instance.get(`${process.env.NEXT_PUBLIC_API_URL}/person/popular`)
}