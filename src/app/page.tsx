import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import List from "@/components/Movies/List/List";
import { fetchMovies } from "@/services/movies.service";

export default async function Home() {
	const {
		results: movies,
		page,
		total_pages: totalPages,
		total_results: totalResults,
	} = await fetchMovies({
		page: 1,
	});

	return (
		<main className={styles.main}>
			<Header />
			<List movies={movies} page={page} totalPages={totalPages} totalResults={totalResults} />
			<footer>{/* TODO: Pie de pagina */}</footer>
		</main>
	);
}
