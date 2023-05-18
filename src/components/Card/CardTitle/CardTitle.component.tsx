import React, { ReactNode } from "react";

type Props = { children: ReactNode };

export const CardTitle = ({ children }: Props) => {
	return <p className="font-bold text-md lg:text-xl mt-1">{children}</p>;
};
