import React from "react";

import { IconButton } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import { useWindowSize } from "@/hooks";

import { breakpoints } from "@/styles";
import { SectionTitle } from "../SectionTitle/SectionTitle.component";

export const Connect = () => {
	return (
		<div className="flex flex-col justify-start items-center md:w-1/2">
			<SectionTitle className="hidden">Let&apos;s Connect</SectionTitle>
			<div className="flex gap-2">
				<IconButton
					href="https://www.linkedin.com/in/gabrielodominguez/"
					referrerPolicy="no-referrer"
					target="_blank"
					rel="noopener norel"
				>
					<LinkedInIcon fontSize="large" className="text-white" />
				</IconButton>
				<IconButton
					href=""
					referrerPolicy="no-referrer"
					target="_blank"
					rel="noopener norel"
				>
					<EmailIcon fontSize="large" className="text-white" />
				</IconButton>
			</div>
		</div>
	);
};
