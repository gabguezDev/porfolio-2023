import React from "react";

import HomeIcon from "@mui/icons-material/Home"; // Home
import LightbulbIcon from "@mui/icons-material/Lightbulb"; // Mentorship
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"; // Portfolio
import MoreVertIcon from "@mui/icons-material/MoreVert"; // More

import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

import { NavButton } from "./NavButton";

export type DropDownItemsType = {
	Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
	label: string;
	href: string;
};

const dropdownItems: DropDownItemsType[] = [
	{ label: "Contact", href: "/" },
	{ label: "Socials", href: "/" },
	{ label: "Resources", href: "/" },
	{ label: "Extras", href: "/" },
];

export const BottomNav = () => {
	return (
		<nav className="flex justify-around w-full sticky bottom-0 bg-black py-2 z-10">
			<NavButton Icon={HomeIcon} label="Home" />
			<NavButton Icon={LightbulbIcon} label="TheProcess" />
			<NavButton Icon={BusinessCenterIcon} label="Portfolio" />
			<NavButton
				Icon={MoreVertIcon}
				label="More"
				className=""
				dropdownItems={dropdownItems}
				renderItem={item => (
					<button className="text-black bg-red w-full" key={item.label}>
						{item.label}
					</button>
				)}
			/>
		</nav>
	);
};
