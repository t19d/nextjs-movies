import { MovieListItem } from "@/models/movie.model";
import Card from "../Card/Card";
import styles from "./List.module.css";
import Pagination from "@/components/Pagination/Pagination";
import Link from "next/link";
import BackButton from "@/components/BackButton/BackButton";

interface ListProps {
	movies: MovieListItem[];
	page: number;
	totalPages: number;
	totalResults?: number;
	searchParams: { [key: string]: string | string[] | undefined };
}

export default function List({ movies, page, totalPages, searchParams }: ListProps) {
	return (
		<section>
			{!movies || movies?.length === 0 ? (
				<article className={styles.notFound}>
					<h2>Películas no encontradas</h2>
					<BackButton searchParams={searchParams}>Ir atrás</BackButton>
				</article>
			) : (
				<>
					<header>
						<Pagination page={page} totalPages={totalPages} />
					</header>
					<main className={styles.list}>
						{movies.map((movie) => (
							<Card key={movie.id} movie={movie} searchParams={searchParams} />
						))}
					</main>
					<footer>
						<Pagination page={page} totalPages={totalPages} />
					</footer>
				</>
			)}
		</section>
	);
}
