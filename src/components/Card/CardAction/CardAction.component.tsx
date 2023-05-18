import React, { ReactNode } from "react";

type Props = { children: ReactNode; href: string };

export const CardAction = ({ children, href }: Props) => {
	const classes =
		"flex justify-center items-center mt-3 rounded rounded-3 p-2 hover:bg-slate-300 hover:text-black transition transition-all";

	return (
		<a
			href={href}
			rel="noopener noreferrer"
			target="_blank"
			className={classes}
		>
			{children}
		</a>
	);
};
