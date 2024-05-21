import { Movie } from "@/models/movie.model";
import Card from "../Card/Card";
import styles from "./List.module.css";

interface ListProps {
	movies: Movie[];
	page: number;
	totalPages: number;
	totalResults: number;
}

export default function List({ movies, page, totalPages, totalResults }: ListProps) {
	return (
		<section>
			<main className={styles.list}>
				{movies.map((movie) => (
					<Card key={movie.id} movie={movie} />
				))}
			</main>
			<footer></footer>
		</section>
	);
}
