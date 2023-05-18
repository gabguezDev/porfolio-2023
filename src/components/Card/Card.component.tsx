import React, { ReactNode } from "react";

import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { CardTitle } from "./CardTitle/CardTitle.component";
import { CardContent } from "./CardContent/CardContent.component";
import { CardAction } from "./CardAction/CardAction.component";
import { CardMedia } from "./CardMedia/CardMedia.component";
import { CardIcon } from "./CardIcon/CardIcon.component";

type Props = {
	Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
	title: string;
	className?: string;
	imgAlt?: string;
	imgUrl?: StaticImageData;
	description: ReactNode;
	href?: string;
	actionLabel?: string;
};

export const Card = ({
	Icon,
	title,
	description,
	href,
	imgUrl,
	imgAlt,
	className,
	actionLabel,
}: Props) => {
	const classes = "relative mt-1 pb-8 w-full";

	return (
		<div
			className={className ? classes.concat(" " + className) : classes}
			data-cursor-size="70px"
		>
			{Icon && <CardIcon Icon={Icon} />}

			<CardContent>
				<CardTitle>{title}</CardTitle>

				<p className="text-sm md:text-md lg:text-lg my-5 text-slate-400">
					{description}
				</p>

				{imgUrl && (
					<CardMedia
						imgUrl={imgUrl.src}
						imgAlt={imgAlt || ""}
						imgHeight={imgUrl.height}
						imgWidth={imgUrl.width}
					/>
				)}
				{href && actionLabel && (
					<CardAction href={href}>{actionLabel}</CardAction>
				)}
			</CardContent>
		</div>
	);
};
