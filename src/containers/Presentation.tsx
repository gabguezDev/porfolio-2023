import React from "react";

import { Avatar, Biography, Greeting, LetsConnect } from "@/components";

import { useWindowSize } from "../hooks/useWindowSize";

import { breakpoints } from "@/styles";

export const Presentation = () => {
	const { width } = useWindowSize();

	if (width > breakpoints.md) {
		return (
			<div className="md:px-16">
				<Greeting />
				<div className="flex wrap justify-around items-start space-x-5 md:my-10">
					<Avatar />
					<Biography />
					<LetsConnect />
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center justify-between">
			<Avatar />
			<LetsConnect />
			<Greeting />
			<Biography />
		</div>
	);
};
