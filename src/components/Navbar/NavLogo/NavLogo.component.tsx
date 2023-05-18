import React, { ReactNode } from "react";

type Props = { children: ReactNode };

export const NavLogo = ({ children }: Props) => {
	return (
		<div className="hidden md:flex grow">
			<h1 className="text-xl hover:text-2xl transition-all duration-700 cursor-pointer">
				{children}
			</h1>
		</div>
	);
};
