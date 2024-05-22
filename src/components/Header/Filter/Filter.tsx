import styles from "./Filter.module.css";
import Search from "./Search/Search";
import Type from "./Type/Type";

export default function Filter() {
	return (
		<div className={styles.filter}>
			<Type />
			<Search />
		</div>
	);
}
