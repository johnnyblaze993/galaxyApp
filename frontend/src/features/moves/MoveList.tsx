"use client";
import { useMoves } from "./useMoves";

export function MovesList() {
	const { data, isLoading, error } = useMoves();

	if (isLoading) return <div>Loading Moves...</div>;
	if (error) return <div>Failed to load moves.</div>;

	return (
		<ul>
			{data?.map((move) => (
				<li key={move.id}>
					<strong>{move.name}</strong> – {move.type}, Power: {move.power}, Acc:{" "}
					{move.accuracy}
					<div>{move.description}</div>
				</li>
			))}
		</ul>
	);
}
