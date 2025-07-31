import { Pokemon } from "./pomemon.types";
import "@/styles/components.css";

type Props = { pokemon: Pokemon };

export function PokemonCard({ pokemon }: Props) {
	return (
		<div className="card">
			<div className="card-header">
				<span className="pokedex-num">
					#{pokemon.pokedex_num.toString().padStart(3, "0")}
				</span>
				<span className="poke-name">{pokemon.name}</span>
			</div>
			{/* <div className="type-list">
				{pokemon.types.map((type) => (
					<span key={type} className={`type-badge type-${type.toLowerCase()}`}>
						{type}
					</span>
				))}
			</div> */}
			<div className="stats">
				<span>HP: {pokemon.base_stats.hp}</span>
				<span>Atk: {pokemon.base_stats.atk}</span>
				<span>Def: {pokemon.base_stats.def}</span>
			</div>
			<div className="evolve">Evolves: {pokemon.does_evolve ? "✅" : "❌"}</div>
			<p className="poke-desc">{pokemon.description}</p>
		</div>
	);
}
