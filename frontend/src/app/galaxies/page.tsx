// src/app/galaxies/page.tsx

"use client";

import { BackButton } from "@/components/BackButton";
import { useGalaxies } from "@/features/galaxies/useGalaxies";
import "@/styles/components.css";

export default function GalaxiesPage() {
	const { data, isLoading, isError } = useGalaxies();

	return (
		<section className="content">
			<h1 className="heading">Galaxies</h1>
			<p className="mb-2 description">
				Explore the galaxies in our Astronomy Data Explorer.
			</p>
			<BackButton href="/">Back to Home</BackButton>
			{isLoading && <div>Loading...</div>}
			{isError && <div>Error loading galaxies.</div>}

			<div className="grid">
				{data &&
					data.map((galaxy) => (
						<div className="card" key={galaxy.id}>
							<div className="card-header">{galaxy.name}</div>
							<div>
								<strong>Type:</strong> {galaxy.type}
							</div>
							<div>
								<strong>Distance:</strong> {galaxy.distance_mly} million light
								years
							</div>
							<div className="description">{galaxy.description}</div>
						</div>
					))}
			</div>
		</section>
	);
}
