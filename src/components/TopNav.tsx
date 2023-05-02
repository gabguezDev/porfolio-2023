import React, { ReactNode } from "react";

type NavItemProps = {
	label: string | (() => ReactNode);
	href?: string;
	isLogo?: boolean;
};

const NavItem = ({ label, href, isLogo = false }: NavItemProps) => {
	const className = "px-4";

	return (
		<>
			{typeof label === "string" ? (
				<button className={className}>{label}</button>
			) : (
				label()
			)}
			{isLogo && <div className="flex grow" />}
		</>
	);
};

export const TopNav = () => {
	return (
		<nav
			className={`sticky top-0 flex justify-around w-full py-8 px-14 z-10 bg-black bg-scroll z-20 shadow-md shadow-slate-500`}
		>
			<NavItem
				label={() => (
					<button>
						<h1 className="font-['Montserrat'] text-xl">Gabguez Dev</h1>
					</button>
				)}
				isLogo
			/>
			<NavItem label={"Home"} />
			<NavItem label={"The Process"} />
			<NavItem label={"Portfolio"} />
			<NavItem label={"Resources"} />
			<NavItem label={"Extras"} />
		</nav>
	);
};
