import React, { useState, useEffect } from "react";

export function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;

	return { width, height };
}

export const useWindowSize = () => {
	const [size, setSize] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setSize(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return { ...size };
};
