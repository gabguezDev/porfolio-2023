import React, { FC, useState } from "react";

import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type NavButtonProps = {
	label?: string;
	className?: string;
	Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
	dropdownItems?: any[];
	renderItem?: (item: any) => JSX.Element;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Dropdown = (
	{ dropdownItems, renderItem }: NavButtonProps,
	dropdownClassName: string = ""
) => {
	return (
		<div
			className={
				"mx-auto p-3 bg-white text-black absolute bottom-[110%] right-0 flex flex-col w-full" +
				dropdownClassName
			}
		>
			{dropdownItems?.map(item => {
				if (renderItem) return renderItem(item);
			})}
		</div>
	);
};

export const NavButton: FC<NavButtonProps> = ({
	label,
	className,
	Icon,
	dropdownItems,
	renderItem,
	onClick,
}) => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<div className="relative">
			<button
				onClick={e => {
					dropdownItems && handleToggle();
					onClick && onClick(e);
				}}
				className={"flex flex-col items-center justify-center ".concat(
					className || ""
				)}
			>
				{Icon && <Icon />}
				<span>{label}</span>
			</button>
			{open && (
				<Dropdown renderItem={renderItem} dropdownItems={dropdownItems} />
			)}
		</div>
	);
};
