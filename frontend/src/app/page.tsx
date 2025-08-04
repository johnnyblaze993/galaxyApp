// src/app/page.tsx
import "@/styles/components.css";
import "@/styles/global.css";

export default function HomePage() {
	return (
		<section>
			<h1 className="heading">Welcome, Cosmic Explorer! ✨</h1>
			<p className="mb-6 description">
				Explore and discover galaxies, planets, stars, and black holes with this
				interactive demo. <br />
				Choose a category below to begin your cosmic journey.
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
