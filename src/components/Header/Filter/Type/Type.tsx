"use client";
import style from "./Type.module.css";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Type() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const textTypes = {
		popular: "Populares",
		top_rated: "Mejor valorados",
		now_playing: "En cartelera",
		upcoming: "Próximos estrenos",
	};

	const currentType = searchParams.get("type") || "popular";
	const isDisabled = !!searchParams.get("query");

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (isDisabled) return;

		const newType = e.target.value ?? "popular";
		const params = new URLSearchParams(searchParams.toString());
		// Añadir al query params el type
		params.set("type", newType);
		const newSearchParams = params.toString();

		// Actualizar la URL con el nuevo tipo
		router.push(pathname + "?" + newSearchParams);
	};

	return (
		<select className={style.select} value={currentType} onChange={handleChange} disabled={isDisabled}>
			{Object.keys(textTypes).map((type: string) => (
				<option key={type} value={type}>
					{textTypes[type as keyof typeof textTypes]}
				</option>
			))}
		</select>
	);
}
