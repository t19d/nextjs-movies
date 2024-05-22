/* eslint-disable @next/next/no-img-element */
import { MovieListItem } from "@/models/movie.model";
import styles from "./Card.module.css";
import Link from "next/link";
import { getImageUrlW780 } from "@/services/movies.service";
import { getRouteWithSearchParams } from "@/tools/utils";

interface CardProps {
	movie: MovieListItem;
	searchParams: { [key: string]: string | string[] | undefined };
}

export default function Card({ movie, searchParams }: CardProps) {
	const poster = getImageUrlW780(movie.poster_path);

	// Redondear hasta 1 decimal
	const roundRating = (rating: number) => {
		return Math.round(rating * 10) / 10;
	};

	let route = getRouteWithSearchParams(`/${movie.id}`, searchParams);

	return (
		<Link href={route}>
			<div className={styles.card} style={{ backgroundImage: `url(${poster})` }}>
				<span className={styles.rating}>{roundRating(movie.vote_average)}</span>
				<div className={styles.overlay}>
					<h2 className={styles.title}>{movie.title}</h2>
				</div>
			</div>
		</Link>
	);
}
