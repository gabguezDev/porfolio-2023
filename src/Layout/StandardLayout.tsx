import React, { FC, useState, useEffect, ReactNode } from "react";

import { useWindowSize } from "@/hooks";

import { breakpoints } from "@/styles";

import { Footer, TopNav, BottomNav } from "@/components";

type StandarLayoutProps = {
	children: ReactNode;
};

const StandardLayout: FC<StandarLayoutProps> = ({ children }) => {
	const { width } = useWindowSize();

	return (
		<div>
			{width >= breakpoints.md && <TopNav />}
			{children}
			{width < breakpoints.md ? <BottomNav /> : <Footer />}
		</div>
	);
};

export default StandardLayout;
