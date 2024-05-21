import styles from "./Header.module.css";
import Search from "./Search/Search";

export default function Header() {
	return (
		<header className={styles.header}>
			<Search />
		</header>
	);
}
