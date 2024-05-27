import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Buscador de películas",
	description: "Buscador de películas utilizando Next.js y TMDB API.",
	openGraph: {
		type: "website",
		locale: "es_ES",
		url: "https://nextjs-movies-one-mu.vercel.app/",
		title: "Buscador de películas",
		description: "Buscador de películas utilizando Next.js y TMDB API.",
		images: [
			{
				url: "https://nextjs-movies-one-mu.vercel.app/img/og.png",
				width: 1200,
				height: 630,
				alt: "Buscador de películas",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
