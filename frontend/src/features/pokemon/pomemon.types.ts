// src/features/pokemon/pokemon.types.ts
export interface Pokemon {
	id: string;
	name: string;
	pokedex_num: number;
	does_evolve: boolean;
	height: number;
	weight: number;
	base_stats: {
		hp: number;
		atk: number;
		def: number;
	};
	description: string;
	types: string[]; // could also be { id: string, name: string }[] if API is nested
	moves: string[]; // same as above
}
