import "@/styles/layout.css";
import "@/styles/components.css";
import { PokemonList } from "@/features/pokemon/PokemonList";
import { BackButton } from "@/components/BackButton";

export default function PokemonPage() {
	return (
		<div className="container">
			<BackButton href="/">Back to Home</BackButton>
			<h1 className="heading">Pokémon</h1>
			<p className="description">This is the Pokémon list page.</p>
			<div className="grid">
				<PokemonList />
			</div>
		</div>
	);
}
