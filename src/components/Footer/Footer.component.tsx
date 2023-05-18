import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

type Props = {};

export const Footer = (props: Props) => {
	return (
		<div className="hidden md:flex justify-center items-center flex-col">
			<hr className="w-[90%] border-slate-500" />
			<h4 className="mt-8 text-sm">Reach me out</h4>
			<div className="flex mt-2 mb-10">
				<IconButton
					href="https://github.com/gabguezDev"
					referrerPolicy="no-referrer"
					target="_blank"
				>
					<GitHubIcon fontSize="large" className="text-white" />
				</IconButton>
				<IconButton
					href="https://www.linkedin.com/in/gabrielodominguez/"
					referrerPolicy="no-referrer"
					target="_blank"
				>
					<LinkedInIcon fontSize="large" className="text-white" />
				</IconButton>
			</div>
		</div>
	);
};
