"use client";
import { useRouter } from "next/navigation";
import styles from "./Pagination.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
	totalPages: number;
	page: number;
}

export default function Pagination({ totalPages, page }: PaginationProps) {
	const router = useRouter();

	const setPage = (newPage: number) => {
		router.push(`/?page=${newPage}`);
	};

	const handlePrevPage = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};

	const handleNextPage = () => {
		if (page < Math.ceil(totalPages / 20)) {
			setPage(page + 1);
		}
	};

	return (
		<nav className={styles.pagination}>
			<button className={styles.button} onClick={handlePrevPage} disabled={page === 1} aria-label="Página anterior">
				<IoIosArrowBack />
			</button>
			<span className={styles.page}>{page}</span>
			<button className={styles.button} onClick={handleNextPage} disabled={page === totalPages} aria-label="Página siguiente">
				<IoIosArrowForward />
			</button>
		</nav>
	);
}
