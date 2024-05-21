/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/models/movie.model";
import styles from "./Card.module.css";

interface CardProps {
	movie: Movie;
}

export default function Card({ movie }: CardProps) {
	const poster = process.env.IMG_URL + movie.poster_path;

	// Redondear hasta 1 decimal
	const roundRating = (rating: number) => {
		return Math.round(rating * 10) / 10;
	};

	return (
		<div className={styles.card} style={{ backgroundImage: `url(${poster})` }}>
			<span className={styles.rating}>{roundRating(movie.vote_average)}</span>
			<div className={styles.overlay}>
				<h2 className={styles.title}>{movie.title}</h2>
			</div>
		</div>
	);
}
