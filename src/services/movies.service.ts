import { Movie, PaginatedMoviesResponse, UrlMoviesParams } from "@/models/movie.model";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;
type Size = "w45" | "w92" | "w154" | "w185" | "w300" | "w342" | "w500" | "h632" | "w780" | "w1280" | "original";

export async function fetchMovies({ page = 1, language = "es-ES", region = "ES" }: UrlMoviesParams): Promise<PaginatedMoviesResponse> {
	const url = getUrlListTopRated({ page, language });
	const options = getOptions();

	const res = await fetch(url, options);
	const data: PaginatedMoviesResponse = (await res.json()) as PaginatedMoviesResponse;
	return data;
}

export async function fetchMovie({ id, language = "es-ES" }: UrlMoviesParams): Promise<Movie> {
	const url = getUrlDetails({ id, language });
	const options = getOptions();

	const res = await fetch(url, options);
	const data: Movie = (await res.json()) as Movie;
	return data;
}

export function getImageUrl(path: string, size: Size) {
	return `${process.env.IMG_URL}/${size}${path}`;
}

export function getImageUrlOriginal(path: string) {
	return getImageUrl(path, "original");
}

export function getImageUrlW780(path: string) {
	return getImageUrl(path, "w780");
}

// #region utils URL MOVIES
function getUrlListUpcoming({ page = 1, language = "es-ES", region = "ES" }: UrlMoviesParams): string {
	return `${API_URL}/movie/upcoming?language=${language}&page=${page}&region=${region}`;
}

function getUrlListTopRated({ page = 1, language = "es-ES", region = "ES" }: UrlMoviesParams): string {
	return `${API_URL}/movie/top_rated?language=${language}&page=${page}&region=${region}`;
}

function getUrlListPopular({ page = 1, language = "es-ES", region = "ES" }: UrlMoviesParams): string {
	return `${API_URL}/movie/popular?language=${language}&page=${page}&region=${region}`;
}

function getUrlListNowPlaying({ page = 1, language = "es-ES", region = "ES" }: UrlMoviesParams): string {
	return `${API_URL}/movie/now_playing?language=${language}&page=${page}&region=${region}`;
}

function getUrlDetails({ id, language = "es-ES" }: UrlMoviesParams): string {
	return `${API_URL}/movie/${id}?language=${language}`;
}
// #endregion

// #region utils
function getOptions() {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${API_KEY}`,
		},
	};
	return options;
}
// #endregion
