import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Pokemon } from "./pomemon.types";

// API endpoint matches your Django router config!
export function usePokemonList() {
	return useQuery<Pokemon[]>({
		queryKey: ["pokemonList"],
		queryFn: async () => {
			const { data } = await axios.get<Pokemon[]>(
				"http://localhost:8000/api/pokemon/"
			);
			return data;
		},
	});
}
