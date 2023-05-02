import React from "react";

import { IconButton } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import { useWindowSize } from "@/hooks";

import { breakpoints } from "@/styles";

export const LetsConnect = () => {
	const { width } = useWindowSize();

	return (
		<div className="flex flex-col justify-start items-start space-y-5 my-1">
			{width > breakpoints.md && (
				<p className="text-lg lg:text-2xl font-bold whitespace-nowrap">
					Let&apos;s Connect
				</p>
			)}
			<div className="flex gap-2">
				<IconButton
					href="https://www.linkedin.com/in/gabrielodominguez/"
					referrerPolicy="no-referrer"
					target="_blank"
				>
					<LinkedInIcon fontSize="large" className="text-white" />
				</IconButton>
				<IconButton>
					<EmailIcon fontSize="large" className="text-white" />
				</IconButton>
			</div>
		</div>
	);
};
