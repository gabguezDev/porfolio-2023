import Image from "next/image";
import React from "react";

import avatarOk from "../../public/avatar-ok.jpeg";

type Props = {};

export const Avatar = (props: Props) => {
	return (
		<Image
			src={avatarOk.src}
			alt={"Avatar ok."}
			width={130}
			height={130}
			className="rounded-[50%] border border-[7px] border-slate-500 my-4"
		/>
	);
};
