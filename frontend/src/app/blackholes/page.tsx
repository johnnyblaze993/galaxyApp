"use client";
import { BackButton } from "@/components/BackButton";
import { useBlackHoles } from "@/features/blackholes/useBlackHole";
import "@/styles/components.css";

export default function BlackHolesPage() {
	const { data, isLoading, isError } = useBlackHoles();

	return (
		<section className="content">
			<h1 className="heading">Black Holes</h1>
			<p className="mb-2 description">
				Explore the black holes cataloged in our universe.
			</p>
			<BackButton href="/">Back to Home</BackButton>

			{isLoading && <div>Loading...</div>}
			{isError && <div>Error loading black holes.</div>}

			<div className="grid">
				{data &&
					data.map((bh) => (
						<div className="card" key={bh.id}>
							<div className="card-header">{bh.name}</div>
							<div>
								<strong>Type:</strong> {bh.type}
							</div>
							<div>
								<strong>Mass:</strong> {bh.mass_solar} solar masses
							</div>
							<div>
								<strong>Distance from center:</strong>{" "}
								{bh.distance_from_center_ly} light years
							</div>
							<div className="description">{bh.description}</div>
						</div>
					))}
			</div>
		</section>
	);
}
