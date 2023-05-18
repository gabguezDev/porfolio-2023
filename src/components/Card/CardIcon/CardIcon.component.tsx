import React from "react";

import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

type Props = { Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> };

export const CardIcon = ({ Icon }: Props) => {
	return (
		<div className="p-2 absolute top-0 left-1/2 transform -translate-x-1/2 z-10 rounded-[50%] bg-clip-padding bg-gradient-to-r from-emerald-500 to-slate-400 ">
			<Icon fontSize="large" className="rounded-[50%] m-2" />
		</div>
	);
};
