import React from "react";
import { NavLogo } from "./NavLogo/NavLogo.component";
import { NavLink } from "./NavLink/NavLink.component";

export const Navbar = (): JSX.Element => {
	const classes =
		"fixed bottom-0 md:sticky md:top-0 w-full flex items-center z-20 bg-black py-4 md:p-6";

	return (
		<nav className={classes}>
			<NavLogo>Gabguez Dev</NavLogo>
			<div className="flex items-center justify-around w-full md:w-auto md:space-x-5">
				<NavLink href="#hello" className="hidden md:flex">
					Home
				</NavLink>
				<NavLink href="#what-i-do">What I Do</NavLink>
				<NavLink href="#projects">Projects</NavLink>
				<NavLink href="#resources">Resources</NavLink>
				<NavLink href="#contact">Contact</NavLink>
			</div>
		</nav>
	);
};
