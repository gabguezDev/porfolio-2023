import React, { ReactNode } from "react";

type Props = { children: ReactNode };

export const HeaderTitle = ({ children }: Props) => {
	const classes =
		"text-2xl lg:text-4xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-slate-400 my-5";
	return <h3 className={classes}>{children}</h3>;
};
