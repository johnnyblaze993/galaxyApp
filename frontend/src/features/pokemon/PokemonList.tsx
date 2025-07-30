"use client";
import { usePokemonList } from "./usePokemonList";
import { PokemonCard } from "./PokemonCard";

export function PokemonList() {
	const { data, isLoading, error } = usePokemonList();

	if (isLoading) return <div>Loading Pokémon...</div>;
	if (error) return <div>Failed to load Pokémon. Please try again.</div>;

	return (
		<>
			{data?.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</>
	);
}
