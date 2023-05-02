import { MoreThingsSoon, Presentation, TheProcess } from "@/containers";

import { Whatido } from "@/components";

export default function Home() {
	return (
		<main className={`p-6 md:p-16`}>
			<Presentation />
			<Whatido />
			<TheProcess />
			<MoreThingsSoon />
		</main>
	);
}
