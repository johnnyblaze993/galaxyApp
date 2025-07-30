import "@/app/globals.css";
import styles from "@/styles/Layout.module.css";
import QueryProvider from "./providers/QueryProvider";

export const metadata = {
	title: "PokedexPyApp",
	description: "Pokémon database and explorer app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<QueryProvider>
					<div className={styles.wrapper}>
						<header className={styles.header}>PokedexPyApp</header>
						<main className={styles.content}>{children}</main>
						<footer className={styles.footer}>
							© {new Date().getFullYear()} PokedexPyApp — Powered by Next.js &
							Django
						</footer>
					</div>
				</QueryProvider>
			</body>
		</html>
	);
}
