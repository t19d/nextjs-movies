"use client";
import { useRouter } from "next/navigation";
import styles from "./BackButton.module.css";

function BackButton({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter();
	return (
		<button className={styles.back_button} onClick={() => router.back()}>
			{children}
		</button>
	);
}

export default BackButton;
