export interface PaginatedMoviesResponse {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface UrlMoviesParams {
	page?: number;
	sort_by?: string;
	include_adult?: boolean;
	language?: string;
	region?: string; // ISO-3166-1 code
	id?: number;
}
