import React from "react";

import { Card, Grid, Section, SectionTitle } from "@/components";

export const Resources = () => {
	return (
		<Section id="resources">
			<SectionTitle className="hidden">Resources</SectionTitle>
			<Grid>
				<Card
					title="React Patterns"
					description="Queue System based on WebSocket Server with Express & Socket.io. Using simply HTML, CSS and JS for Front End."
					// imgUrl={queueProject.src}
					// imgWidth={queueProject.width}
					// imgHeight={queueProject.height}
					// imgAlt="QUEUE project image."
					href="https://github.com/gabguezDev/queue-app"
				/>
				<Card
					title="Clean Code"
					description="CRUD and Search System based on ExpressJs & Vanilla JS. Entities involved: Users and its Roles, Products and Categories. Using MongoDB. Documentation by Postman."
					// imgUrl={crudProject.src}
					// imgWidth={crudProject.width}
					// imgHeight={crudProject.height}
					// imgAlt="CRUD project image."
					href="https://github.com/gabguezDev/basic-rest-server-node"
				/>
			</Grid>
		</Section>
	);
};
