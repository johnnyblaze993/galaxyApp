import "@/styles/components.css";

export default function HomePage() {
	return (
		<section className="home">
			<h1>Welcome to PokedexPyApp!</h1>
			<p>
				Explore, search, and discover all your favorite Pokémon using our modern
				Django + Next.js powered Pokedex.
			</p>
			<div className="links">
				<a href="/pokemon" className="link">
					View Pokémon
				</a>
				<a href="/types" className="link">
					Types
				</a>
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
