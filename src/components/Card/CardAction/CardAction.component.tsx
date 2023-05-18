import React, { ReactNode } from "react";
import Link from "next/link";

type Props = { children: ReactNode; href: string };

export const CardAction = ({ children, href }: Props) => {
	return (
		<a href={href} rel="noopener noreferrer" target="_blank">
			{children}
		</a>
	);
};
