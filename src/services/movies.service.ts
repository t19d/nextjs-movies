import { Movie, PaginatedMoviesResponse, UrlMoviesParams } from "@/models/movie.model";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export async function fetchMovies({ page = 1, language = "es-ES", region = "ES" }: UrlMoviesParams): Promise<PaginatedMoviesResponse> {
	const url = getUrlListNowPlaying({ page, language });
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

// #region URL MOVIES
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
