import { Me, Connect, Section } from "@/components";
import React from "react";

type Props = {};

export const MeConnect = (props: Props) => {
	return (
		<Section id="me-connect" className="md:flex-row">
			<Me />
			<Connect />
		</Section>
	);
};
