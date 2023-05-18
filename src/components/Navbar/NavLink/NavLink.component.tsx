import React, { ReactNode } from "react";

type Props = { children: ReactNode; className?: string; href: string };

export const NavLink = ({ children, className, href }: Props) => {
	const classes =
		"p-2 rounded rounded-1 hover:bg-slate-300 hover:text-black md:hover:text-xl transition-all duration-700 cursor-pointer";
	return (
		<div className={className ? classes.concat(" " + className) : classes}>
			<h1 className="text-center">
				<a href={href}>{children}</a>
			</h1>
		</div>
	);
};
