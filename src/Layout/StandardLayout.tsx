import React, { FC, useState, useEffect, ReactNode } from "react";

import { useWindowSize } from "@/hooks";

import { breakpoints } from "@/styles";

import { Footer, Navbar } from "@/components";

type StandarLayoutProps = {
	children: ReactNode;
};

const StandardLayout: FC<StandarLayoutProps> = ({ children }) => {
	const { width } = useWindowSize();

	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default StandardLayout;
