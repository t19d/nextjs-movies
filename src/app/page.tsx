import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import List from "@/components/Movies/List/List";
import { fetchMovies } from "@/services/movies.service";

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
	let searchParamPage = searchParams?.page ?? 1;
	// Convertir a número
	searchParamPage = Number(searchParamPage);

	// Llamar a la API
	const {
		results: movies,
		page,
		total_pages: totalPages,
		total_results: totalResults,
	} = await fetchMovies({
		page: searchParamPage,
	});

	return (
		<main className={styles.main}>
			<Header />
			<List movies={movies} page={page} totalPages={totalPages} totalResults={totalResults} />
			<footer>{/* TODO: Pie de pagina */}</footer>
		</main>
	);
}
