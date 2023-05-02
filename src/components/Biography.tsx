import React from "react";

import { Section } from "@/containers";

export const Biography = () => {
	return (
		<Section
			title="Biography"
			renderContent={() => (
				<p className="text-sm md:text-lg lg:text-[1rem] xl:text-[1.2rem] text-slate-400">
					Fullstack developer with 2+ of experience and 3+ on development.
					<br />
					Loving getting goals and teamwork.
					<br />
					Feel comfortable with <span className="text-blue-500">
						ReactJs
					</span>, <span className="text-slate-300 font-bold">NextJs</span>,{" "}
					<span className="text-yellow-500">Javascript</span>,{" "}
					<span className="text-blue-300">Typescript</span>,{" "}
					<span className="text-green-500">NodeJs</span> and{" "}
					<span className="text-red-400">NestJs</span> among others.
				</p>
			)}
		/>
	);
};
