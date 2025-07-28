import styles from "./page.module.css";

export default function PokemonPage() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.heading}>Pokémon</h1>
			<p className={styles.description}>This is the Pokémon list page.</p>
			<div className={styles.grid}>
				{/* map Pokémon here with each item using styles.card */}
			</div>
		</div>
	);
}
