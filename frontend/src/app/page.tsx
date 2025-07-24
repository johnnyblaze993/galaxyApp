import styles from "./page.module.css";

export default function HomePage() {
	return (
		<section className={styles.home}>
			<h1>Welcome to PokedexPyApp!</h1>
			<p>
				Explore, search, and discover all your favorite Pokémon using our modern
				Django + Next.js powered Pokedex.
			</p>
			<div className={styles.links}>
				<a href="/pokemon" className={styles.link}>
					View Pokémon
				</a>
				<a href="/types" className={styles.link}>
					Types
				</a>
				<a href="/moves" className={styles.link}>
					Moves
				</a>
				<a href="/evolutions" className={styles.link}>
					Evolutions
				</a>
			</div>
		</section>
	);
}
