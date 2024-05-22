import styles from "./Header.module.css";
import Filter from "./Filter/Filter";

export default function Header() {
	return (
		<header className={styles.header}>
			<Filter />
		</header>
	);
}
