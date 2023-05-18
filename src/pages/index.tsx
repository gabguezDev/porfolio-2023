import "react-creative-cursor/dist/styles.css";

import { Cursor } from "react-creative-cursor";

import { Hello, MeConnect, Projects, Resources, Whatido } from "@/Sections";

import { MoreThingsSoon } from "@/components";

export default function Home() {
	return (
		<main className={`p-6 md:p-16`}>
			<div className="animation-wrapper">
				<div className="particle particle-1"></div>
				<div className="particle particle-2"></div>
				<div className="particle particle-3"></div>
				<div className="particle particle-4"></div>
			</div>
			<Cursor
				isGelly={true}
				cursorBackgrounColor="rgb(35, 182, 137, .8)"
				cursorInnerColor="#fff"
				stickAnimationAmount={0.001}
			/>
			<Hello />
			<MeConnect />
			<Whatido />
			<Projects />
			<Resources />
			<MoreThingsSoon />
		</main>
	);
}
