import React, { ReactNode } from "react";

type Props = {
	children: ReactNode;
	id?: string;
	className?: string;
};

export const Section = ({ children, id, className }: Props) => {
	const classes =
		"my-5 flex flex-col items-center justify-between space-y-2 md:space-x-4";
	return (
		<div
			id={id}
			className={className ? classes.concat(" " + className) : classes}
			data-cursor-stick="#stick-title"
		>
			{children}
		</div>
	);
};
