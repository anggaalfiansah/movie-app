import { KEY } from "./config";

export const URL_DISCOVER_MOVIE = `/discover/movie?api_key=${KEY}&watch_region=ID`;
export const SCOPE_DISCOVER_MOVIE_POPULAR = "&sort_by=popularity.desc";
export const SCOPE_DISCOVER_MOVIE_BY_TYPE_RENT = "&with_watch_monetization_types=rent";
export const SCOPE_DISCOVER_MOVIE_BY_TYPE_THEATER = "&with_release_type=3|2";
export const SCOPE_DISCOVER_MOVIE_BY_TYPE_STREAM = "&with_watch_monetization_types=flatrate";
export const SCOPE_DISCOVER_MOVIE_FREE = "&with_watch_monetization_types=free";
export const URL_GET_TRENDING_MOVIE = (time: "week" | "day") => `/trending/movie/${time}?api_key=${KEY}`;
export const URL_FIND_MOVIE_BY_KEYWORD = (keyword: string) => `/search/movie?query=${keyword}&api_key=${KEY}`;
export const URL_GET_MOVIE_DETAIL_BY_ID = (movieId: string | number) => `/movie/${movieId}?api_key=${KEY}`;
