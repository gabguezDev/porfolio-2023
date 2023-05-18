import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
	imgUrl: StaticImageData;
	alt?: string;
	height?: number;
	width?: number;
};

export const Avatar = ({ imgUrl, alt, width, height }: Props) => {
	return (
		<Image
			className="rounded-[50%] border border-[7px] border-slate-500 my-4"
			src={imgUrl.src}
			alt={alt || ""}
			width={width || imgUrl.width}
			height={height || imgUrl.height}
		/>
	);
};
