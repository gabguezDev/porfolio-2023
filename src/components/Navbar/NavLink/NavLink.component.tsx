import React, { ReactNode } from "react";

type Props = { children: ReactNode; className?: string; href: string };

export const NavLink = ({ children, className, href }: Props) => {
	const classes =
		"relative p-2 rounded rounded-1 hover:bg-slate-300 hover:text-black md:hover:text-lg transition-all duration-400 cursor-pointer";
	return (
		<a
			href={href}
			className={className ? classes.concat(" " + className) : classes}
		>
			{children}
		</a>
	);
};
