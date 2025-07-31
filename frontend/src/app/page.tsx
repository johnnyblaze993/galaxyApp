import "@/styles/components.css";
import "@/styles/global.css";

export default function HomePage() {
	return (
		<section>
			<h1>Welcome to PokedexPyApp!</h1>
			<p className="mb-2">
				Explore, search, and discover all your favorite Pokémon using our modern
				Django + Next.js powered Pokedex.
			</p>
			<div className="grid">
				<a href="/pokemon" className="link">
					View Pokémon
				</a>
				{/* <a href="/pokemon-types" className="link">
					Pokemon-types
				</a> */}
				<a href="/moves" className="link">
					Moves
				</a>
				<a href="/evolutions" className="link">
					Evolutions
				</a>
			</div>
		</section>
	);
}
