import React from "react";

import avatar from "../../../public/avatar-ok.jpeg";

import { Avatar, HeaderTitle, Section } from "@/components";

type Props = {};

export const Hello = (props: Props) => {
	return (
		<Section id="hello" className="md:flex-row">
			<Avatar imgUrl={avatar} width={200} />
			<HeaderTitle>
				Hi, i&apos;m Gabriel, a special human with some ability to love learning
				and working on teamwork.
			</HeaderTitle>
		</Section>
	);
};
