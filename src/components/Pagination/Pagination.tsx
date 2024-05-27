"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./Pagination.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
	totalPages: number;
	page: number;
}

export default function Pagination({ totalPages, page }: PaginationProps) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const setPage = (newPage: number) => {
		// Añadir al query params la page
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", `${newPage}`);
		const newSearchParams = params.toString();

		// Actualizar la URL con la nueva página
		router.push(pathname + "?" + newSearchParams);
	};

	const handleFirstPage = () => {
		if (page > 1) setPage(1);
	};

	const handlePrevPage = () => {
		if (page > 1) setPage(page - 1);
	};

	const handleNextPage = () => {
		if (page < totalPages) setPage(page + 1);
	};

	const handleLastPage = () => {
		console.log("🧐 totalPages", totalPages);
		if (page < totalPages) setPage(totalPages);
	};

	return (
		<nav className={styles.pagination}>
			<button className={styles.button} onClick={handleFirstPage} disabled={page === 1} aria-label="Primera página">
				<IoIosArrowBack />
				1
			</button>
			<button className={styles.button} onClick={handlePrevPage} disabled={page === 1} aria-label="Página anterior">
				<IoIosArrowBack />
			</button>
			<span className={styles.page}>{page}</span>
			<button className={styles.button} onClick={handleNextPage} disabled={page === totalPages} aria-label="Página siguiente">
				<IoIosArrowForward />
			</button>
			<button className={styles.button} onClick={handleLastPage} disabled={page === totalPages} aria-label="Última página">
				{totalPages}
				<IoIosArrowForward />
			</button>
		</nav>
	);
}
