import QueryProvider from "./providers/QueryProvider";
import "@/styles/global.css";
import "@/styles/layout.css";
import "@/styles/components.css";

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
					<div className="layout-wrapper">
						<header className="header">PokedexPyApp</header>
						<main className="content">{children}</main>
						<footer className="footer">
							© {new Date().getFullYear()} PokedexPyApp — Powered by Next.js &
							Django
						</footer>
					</div>
				</QueryProvider>
			</body>
		</html>
	);
}
