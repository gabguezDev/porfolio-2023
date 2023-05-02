import React, { ReactNode } from "react";

type Props = { title?: string; renderContent: () => ReactNode };

export const Section = ({ title, renderContent }: Props) => {
	return (
		<div className="my-2 flex flex-col space-y-2 lg:space-y-4 items-center md:items-start overflow-hidden">
			{title && <p className="text-lg lg:text-2xl font-bold">{title}</p>}
			{renderContent && renderContent()}
		</div>
	);
};
