export interface Movie {
  poster_path?: any;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: any;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface ResponseDiscoverMovie {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface ActionDiscoverMovie {
  type: string;
  filter?: string;
  filterTime?: "week" | "day";
  page?: number;
  keyword?: string;
  movieId?: string | number;
}

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export interface ResponseError {
  status_message?: string;
  status_code?: number;
}
