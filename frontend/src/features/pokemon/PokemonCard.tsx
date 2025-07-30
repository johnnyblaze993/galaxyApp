import { Pokemon } from "./pomemon.types";
import styles from "./PokemonCard.module.css"; // create this for your card styles

type Props = { pokemon: Pokemon };

export function PokemonCard({ pokemon }: Props) {
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<span className={styles.pokedexNum}>
					#{pokemon.pokedex_num.toString().padStart(3, "0")}
				</span>
				<span className={styles.name}>{pokemon.name}</span>
			</div>
			<div className={styles.types}>
				{pokemon.types.map((type) => (
					<span key={type} className={styles.typeBadge}>
						{type}
					</span>
				))}
			</div>
			<div className={styles.stats}>
				<span>HP: {pokemon.base_stats.hp}</span>
				<span>Atk: {pokemon.base_stats.atk}</span>
				<span>Def: {pokemon.base_stats.def}</span>
			</div>
			<div className={styles.evolve}>
				Evolves: {pokemon.does_evolve ? "✅" : "❌"}
			</div>
			<p className={styles.desc}>{pokemon.description}</p>
		</div>
	);
}
