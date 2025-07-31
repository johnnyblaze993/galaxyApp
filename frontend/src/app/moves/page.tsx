import { BackButton } from "@/components/BackButton";
import { MovesList } from "@/features/moves/MoveList";

export default function MovesPage() {
	return (
		<div className="container">
			<BackButton href="/">Back to Home</BackButton>
			<h1>Moves</h1>
			<p>This is the Moves page.</p>
			<MovesList />
		</div>
	);
}
