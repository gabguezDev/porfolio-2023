import React from "react";

import ComputerIcon from "@mui/icons-material/Computer";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import { Section } from "@/containers";
import { Card } from "./Card";

type Props = {};

export const Whatido = (props: Props) => {
	return (
		<Section
			renderContent={() => (
				<div className="flex flex-col md:flex-row items-center md:space-x-4">
					<div className="flex flex-col items-center md:items-start md:w-2/3 space-y-3">
						<p className="font-extrabold text-lg">What I Do</p>
						<p className="text-sm md:text-lg">
							Build and maintain <span className="text-red-500">web</span> and{" "}
							<span className="text-green-300">mobile</span> projects. I also
							upload resources and own content about dev tips, tech and computer
							science.
						</p>
					</div>
					<div className="w-full grid grid-cols-2 gap-1">
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
					</div>
				</div>
			)}
		/>
	);
};
