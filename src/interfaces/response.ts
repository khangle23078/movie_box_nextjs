import {Movie} from "./movie";

export interface Response {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
