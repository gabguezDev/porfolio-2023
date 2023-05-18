import React, { ReactNode } from "react";

type Props = { children: ReactNode };

export const Grid = ({ children }: Props) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-2">{children}</div>
	);
};
