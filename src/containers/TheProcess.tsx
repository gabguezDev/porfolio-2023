import React from "react";

import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";

import { Card } from "@/components";
import { Section } from "./Section";

const steps = [
	{
		title: "We are Agile",
		icon: LooksOneIcon,
		render: () => (
			<p>
				Agile is a software development approach that focuses on{" "}
				<span className="text-bold text-green-300">delivering value</span> to
				the customer <span className="text-bold text-blue-300">quickly</span>{" "}
				and <span className="text-bold text-yellow-300">efficiently</span>{" "}
				through smaller, focused iterations called sprints. This approach allows
				for quick adaptation to changes and improves project efficiency.
			</p>
		),
	},
	{
		title: "We test & taste reality - UX/UI",
		icon: LooksTwoIcon,
		render: () => (
			<p>
				We follow UX/UI process to determine your solution, verify it fits on
				the market and give the{" "}
				<span className="text-bold text-pink-300">best user experience</span> to
				the public.
			</p>
		),
	},
	{
		title: "Smart development",
		icon: Looks3Icon,
		render: () => (
			<p>
				We choose carefully the tech stack to give you the security of a{" "}
				<span className="text-bold text-purple-300">well done job.</span>
			</p>
		),
	},
	{
		title: "Eagle eye",
		icon: Looks4Icon,
		render: () => (
			<p>
				Mantaining the project is an important step to continue with the{" "}
				<span className="text-bold text-blue-400">
					success of your business.{" "}
				</span>
				<br />
				Besides, looking for optimizations and new features can give the project
				another special fashions to keep competitive and disruptive.
			</p>
		),
	},
];

export const TheProcess = () => {
	return (
		<Section
			title="The Process"
			renderContent={() => (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-1  lg:gap-3">
					{steps.map(({ title, icon, render }) => (
						<Card key={title} title={title} Icon={icon} description={render} />
					))}
				</div>
			)}
		/>
	);
};
