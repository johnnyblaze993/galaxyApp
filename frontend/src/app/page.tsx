import "@/styles/components.css";
import "@/styles/global.css";

export default function HomePage() {
	return (
		<section>
			<h1>Welcome Cosmic Explorer: Discover Galaxies, Planets, and Stars!</h1>
			<p className="mb-2">
				This is a sample application demonstrating the integration of Docker,
				Django, and Next.js. Choose an option below to explore detailed
				information about galaxies, planets, stars, or black holes.
			</p>
			<div className="grid">
				<a href="/galaxies" className="link">
					Galaxies
				</a>
				<a href="/stars" className="link">
					Stars
				</a>
				<a href="/planets" className="link">
					Planets
				</a>
				<a href="/blackholes" className="link">
					Black Holes
				</a>
			</div>
		</section>
	);
}
