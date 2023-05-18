import React from "react";

import ComputerIcon from "@mui/icons-material/Computer";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import { Card } from "../../components/Card/Card.component";
import { Section } from "../../components/Section/Section.component";
import { Grid } from "@/components";

type Props = {};

export const Whatido = (props: Props) => {
	return (
		<Section id="what-i-do" className="md:flex-row">
			<div className="flex flex-col space-y-5 items-center">
				<h2 className="text-lg lg:text-2xl font-bold whitespace-nowrap">
					What I Do
				</h2>
				<p className="text-sm md:text-lg text-center">
					Build and maintain <span className="text-red-500">web</span> and{" "}
					<span className="text-green-300">mobile</span> projects. I also upload
					resources and own content about dev tips, tech and computer science.
				</p>
			</div>
			<Grid>
				<Card
					title="Web Development"
					description="We can work together to make your idea a reality. With PHP, NodeJs, Java at back end and Angular, React or NextJs at front end, we will work organised and put all the effort to get well comunication. That's the best way."
					Icon={ComputerIcon}
				/>
				<Card
					title="Mobile Development"
					description="Mobile apps are the best solution to arrive at another market. We will create it with React Native to arrive at iOS and Android very well with the best performance."
					Icon={PhoneIphoneIcon}
				/>
			</Grid>
			{/* TODO: REFACTOR THIS COMPONENT TO MAKE CARDGRID REUSABLE */}
		</Section>
	);
};
