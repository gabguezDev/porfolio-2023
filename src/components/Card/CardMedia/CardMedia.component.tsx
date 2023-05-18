import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";
import { Dialog } from "@mui/material";

type Props = {
	imgUrl: StaticImageData["src"] | string;
	imgAlt?: string;
	imgWidth?: StaticImageData["width"] | number;
	imgHeight?: StaticImageData["height"] | number;
};

const Slot = ({ imgUrl, imgAlt, imgHeight, imgWidth }: Props) => {
	return (
		<Image
			src={imgUrl}
			alt={imgAlt || ""}
			width={imgWidth}
			height={imgHeight}
		/>
	);
};

export const CardMedia = ({ imgUrl, imgAlt, imgHeight, imgWidth }: Props) => {
	const [slotOpen, setSlotOpen] = useState(false);

	const handleToggleSlot = () => {
		setSlotOpen(!slotOpen);
	};

	return (
		<>
			<Image
				onClick={() => handleToggleSlot()}
				style={{ objectFit: "contain", maxHeight: 300 }}
				src={imgUrl}
				alt={imgAlt || ""}
				width={imgWidth}
				height={imgHeight}
				className="flex cursor-pointer mx-auto"
			/>
			{slotOpen && (
				<Dialog onClose={handleToggleSlot} open={slotOpen}>
					<Slot
						imgUrl={imgUrl}
						imgAlt={imgAlt || ""}
						imgWidth={imgWidth}
						imgHeight={imgHeight}
					/>
				</Dialog>
			)}
		</>
	);
};
