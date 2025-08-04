// src/app/page.tsx
import "@/styles/components.css";
import "@/styles/global.css";

export default function HomePage() {
	return (
		<section>
			<h1 className="heading">Embark on a Journey Through the Cosmos</h1>

			<p className="description-block">
				Explore a universe of data and discover fascinating details about
				<span className="highlight"> galaxies</span>,
				<span className="highlight"> stars</span>,
				<span className="highlight"> planets</span>, and
				<span className="highlight"> black holes</span>.
				<br />
				<br />
				This demonstration harnesses the power of modern web technologies—
				<span className="highlight"> Docker</span>,
				<span className="highlight"> Django</span>, and
				<span className="highlight"> Next.js</span>—to deliver a seamless,
				interactive exploration of astronomical data.
				<br />
				<br />
				<strong>
					Select a category below to start your journey among the stars.
				</strong>
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
