import React, { ReactNode } from "react";

import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

type Props = {
	Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
	title: string;
	description: string | (() => ReactNode);
};

export const Card = ({ Icon, title, description }: Props) => {
	return (
		<div className="relative mt-4 mb-10 pb-8 w-full">
			<div className="p-2 absolute top-0 left-1/2 transform -translate-x-1/2 z-10 rounded-[50%] bg-clip-padding bg-gradient-to-r from-emerald-500 to-slate-400">
				{Icon && <Icon fontSize="large" className="rounded-[50%] m-2" />}
			</div>
			<div className="rounded-xl bg-slate-800 relative top-8 py-10 px-5 h-full">
				<p className="font-bold text-md lg:text-xl my-1">{title}</p>

				{typeof description === "string" ? (
					<p className="text-sm md:text-md lg:text-lg my-1 text-slate-400">
						{description}
					</p>
				) : (
					description()
				)}
			</div>
		</div>
	);
};
