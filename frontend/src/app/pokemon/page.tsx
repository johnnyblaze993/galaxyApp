import "@/styles/layout.css";
import "@/styles/components.css";
import { PokemonList } from "@/features/pokemon/PokemonList";

export default function PokemonPage() {
	return (
		<div className="container">
			<h1 className="heading">Pokémon</h1>
			<p className="description">This is the Pokémon list page.</p>
			<div className="grid">
				<PokemonList />
			</div>
		</div>
	);
}
