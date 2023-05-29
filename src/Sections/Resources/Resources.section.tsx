import React from "react";

import { Card, Grid, Section, SectionTitle } from "@/components";

export const Resources = () => {
	return (
		<Section id="resources">
			<SectionTitle className="hidden">Resources</SectionTitle>
			<Grid>
				<Card
					title="Design Patterns"
					description="Design patterns are typical solutions to common problems
					in software design. Each pattern is like a blueprint
					that you can customize to solve a particular
					design problem in your code. Patterns are a toolkit of solutions to common
					problems in software design. They define
					a common language that helps your team
					communicate more efficiently."
					// imgUrl={queueProject.src}
					// imgWidth={queueProject.width}
					// imgHeight={queueProject.height}
					// imgAlt="QUEUE project image."
					href="https://github.com/gabguezDev/queue-app"
					actionLabel="Go to resource"
				/>
				<Card
					title="Clean Code"
					description="Clean code is clear, understandable, and maintainable. When you write clean code, 
					you're keeping in mind the other people who may read and interpret your code at a later time. 
					You're helping others understand the purpose of your code so that they can make changes to it eventually."
					// imgUrl={crudProject.src}
					// imgWidth={crudProject.width}
					// imgHeight={crudProject.height}
					// imgAlt="CRUD project image."
					href="https://github.com/gabguezDev/basic-rest-server-node"
					actionLabel="Go to resource"
				/>
			</Grid>
		</Section>
	);
};
