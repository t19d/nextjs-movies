"use client";
import { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Search() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [inputValue, setInputValue] = useState<string>((searchParams.get("query") as string) ?? "");

	// Manejar el cambio de input y establecer el valor del input
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	// Efecto de debounce para actualizar la URL después de 250ms de inactividad
	useEffect(() => {
		const handler = setTimeout(() => {
			const params = new URLSearchParams(searchParams.toString());
			if (!inputValue) {
				// Eliminar el valor del input del query params
				params.delete("query");
			} else {
				// Poner el valor del input en el query params
				params.set("query", inputValue);
			}
			const newSearchParams = params.toString();

			// Actualizar la URL con el nuevo tipo
			router.push(pathname + "?" + newSearchParams);
		}, 250);

		// Limpiar el timeout si el valor del input cambia antes de los 250ms
		return () => {
			clearTimeout(handler);
		};
	}, [inputValue]);

	return (
		<div className={styles.search}>
			<input type="text" value={inputValue} placeholder="Buscar..." onInput={handleInput} />
		</div>
	);
}
