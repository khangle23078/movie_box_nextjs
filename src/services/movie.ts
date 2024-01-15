import { instance } from "./instance";

export const getMovies = (type: string, order: string) => {
  return instance.get(`${process.env.API_URL}/${type}/${order}`);
};

export const getMovie = (id: string | string[] | undefined) => {
  return instance.get(`${process.env.API_URL}/movie/${id}`);
};

export const getMovieByRecommend = (id: string | string[] | undefined) => {
  return instance.get(`${process.env.API_URL}/movie/${id}/recommendations`)
}

export const getVideosByMovieId = (id: string | string[] | undefined) => {
  return instance.get(`${process.env.API_URL}/movie/${id}/videos`)
}