import React, { ReactNode } from "react";

type Props = { children: ReactNode };

export const CardContent = ({ children }: Props) => {
	const classes = "rounded-xl bg-slate-800 relative top-8 py-10 px-5 h-full";

	return <div className={classes}>{children}</div>;
};
