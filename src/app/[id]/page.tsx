import { fetchMovie, getImageUrlOriginal, getImageUrlW780 } from "@/services/movies.service";
import styles from "./page.module.css";
import BackButton from "@/components/BackButton/BackButton";
import { BsCalendar3, BsCaretLeftFill, BsFillStarFill } from "react-icons/bs";

export default async function MovieDetail({ params }: { params: { id: string } }) {
	const { id } = params;
	const movie = await fetchMovie({ id: parseInt(id as string) });

	const spanishReleaseDate = new Date(movie.release_date).toLocaleDateString("es-ES", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const poster = getImageUrlW780(movie.poster_path);
	const backdrop = getImageUrlOriginal(movie.backdrop_path);

	return (
		<main className={styles.main} style={{ backgroundImage: `url(${backdrop})` }}>
			<section className={styles.content}>
				<article className={styles.poster}>
					<img src={poster} alt={movie.title} />
				</article>
				<article className={styles.info}>
					{movie.title && <h1>{movie.title}</h1>}

					{movie.original_title && <h2>{movie.original_title}</h2>}

					<div className={styles.date_rate}>
						{movie.vote_average && (
							<div className={styles.icon_value}>
								<BsFillStarFill />
								<span className={styles.value}>{movie.vote_average}</span>
							</div>
						)}

						{movie.release_date && (
							<div className={styles.icon_value}>
								<BsCalendar3 />
								<span className={styles.value}>{spanishReleaseDate}</span>
							</div>
						)}
					</div>

					{movie.tagline && <p>{movie.tagline}</p>}

					{movie.overview && <p>{movie.overview}</p>}

					<div className={styles.aditional_info}>
						<h3>Información adicional</h3>
						{movie.genres && (
							<div className={styles.genre_list}>
								<span className={styles.key}>Géneros:</span>

								<ul>
									{movie.genres.map((genre) => (
										<li key={genre.id}>{genre.name}</li>
									))}
								</ul>
							</div>
						)}

						{movie.production_companies && (
							<div className={styles.production_companies_list}>
								<span className={styles.key}>Productoras:</span>

								<ul>
									{movie.production_companies.map((production_company) => (
										<li key={production_company.id}>{production_company.name}</li>
									))}
								</ul>
							</div>
						)}

						{movie.production_countries && (
							<div className={styles.production_country_list}>
								<span className={styles.key}>Países de producción:</span>

								<ul>
									{movie.production_countries.map((production_country) => (
										<li key={production_country.iso_3166_1}>{production_country.name}</li>
									))}
								</ul>
							</div>
						)}

						{movie.spoken_languages && (
							<div className={styles.spoken_language_list}>
								<span className={styles.key}>Idiomas que se hablan:</span>

								<ul>
									{movie.spoken_languages.map((spoken_language) => (
										<li key={spoken_language.iso_639_1}>{spoken_language.name}</li>
									))}
								</ul>
							</div>
						)}
					</div>

					<BackButton>
						<BsCaretLeftFill />
						Ir atrás
					</BackButton>
				</article>
			</section>
		</main>
	);
}
