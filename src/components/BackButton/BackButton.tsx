"use client";
import { useRouter } from "next/navigation";
import styles from "./BackButton.module.css";
import { getRouteWithSearchParams } from "@/tools/utils";

function BackButton({
	children,
	searchParams,
}: Readonly<{
	children: React.ReactNode;
	searchParams: { [key: string]: string | string[] | undefined };
}>) {
	const router = useRouter();
	const handleBack = () => {
		let route = getRouteWithSearchParams("/", searchParams);
		router.push(route);
	};

	return (
		<button className={styles.back_button} onClick={handleBack}>
			{children}
		</button>
	);
}

export default BackButton;
