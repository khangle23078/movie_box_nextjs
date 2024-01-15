import { instance } from "./instance"

export const getActors = () => {
  return instance.get(`${process.env.API_URL}/person/popular`)
}