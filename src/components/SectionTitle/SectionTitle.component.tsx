import React, { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export const SectionTitle = ({ children, className }: Props) => {
	const classes = "md:flex text-lg lg:text-2xl font-bold whitespace-nowrap";
	return (
		<h2
			id="stick-title"
			className={className ? classes.concat(" " + classes) : classes}
		>
			{children}
		</h2>
	);
};
