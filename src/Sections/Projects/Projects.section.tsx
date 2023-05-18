import React from "react";
import { Card, Grid, Section, SectionTitle } from "@/components";

import crudProject from "../../assets/projects/CRUD.png";
import queueProject from "../../assets/projects/QUEUE_project.png";

type Props = {};

export const Projects = () => {
	return (
		<Section id="projects">
			<SectionTitle className="hidden">Projects</SectionTitle>
			<Grid>
				<Card
					title="Queue App"
					description="Queue System based on WebSocket Server with Express & Socket.io. Using simply HTML, CSS and JS for Front End."
					imgUrl={queueProject}
					imgAlt="QUEUE project image."
					href="https://github.com/gabguezDev/queue-app"
				/>
				<Card
					title="CRUD (ABM) & Flexible Search"
					description="CRUD and Search System based on ExpressJs & Vanilla JS. Entities involved: Users and its Roles, Products and Categories. Using MongoDB. Documentation by Postman."
					imgUrl={crudProject}
					imgAlt="CRUD project image."
					href="https://github.com/gabguezDev/basic-rest-server-node"
				/>
			</Grid>
		</Section>
	);
};
