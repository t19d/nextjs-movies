import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import List from "@/components/Movies/List/List";
import { fetchMovies } from "@/services/movies.service";
import { Type } from "@/models/filter.model";

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
	const type = (searchParams?.type as Type) ?? "popular";
	const query = (searchParams?.query as string) ?? "";
	let searchParamPage = searchParams?.page ?? 1;
	// Convertir a número
	searchParamPage = Number(searchParamPage);

	// Llamar a la API
	let data = await fetchMovies({
		opts: {
			page: searchParamPage,
			query,
		},
		type,
	});

	// Si no hay resultados, llamar a la API con la última página
	if (!data.results || data.results.length === 0) {
		// Llamar a la API
		data = await fetchMovies({
			opts: {
				page: data.total_pages,
				query,
			},
			type,
		});
	}

	const movies = data.results;
	const page = data.page;
	const totalPages = data.total_pages;
	const totalResults = data.total_results;

	return (
		<main className={styles.main}>
			<Header />
			<List movies={movies} page={page} totalPages={totalPages} totalResults={totalResults} searchParams={searchParams} />
			<footer>{/* TODO: Pie de pagina */}</footer>
		</main>
	);
}
