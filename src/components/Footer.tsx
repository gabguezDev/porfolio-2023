import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

type Props = {};

export const Footer = (props: Props) => {
	return (
		<div className="flex justify-center items-center flex-col">
			<hr className="w-[90%] border-slate-500" />
			<p className="mt-8 text-sm">Reach me out</p>
			<div className="flex mt-2 mb-10">
				<IconButton
					href="https://github.com/gabguezDev"
					referrerPolicy="no-referrer"
					target="_blank"
				>
					<GitHubIcon className="text-white" />
				</IconButton>
				<IconButton
					href="https://www.linkedin.com/in/gabrielodominguez/"
					referrerPolicy="no-referrer"
					target="_blank"
				>
					<LinkedInIcon className="text-white" />
				</IconButton>
			</div>
		</div>
	);
};
