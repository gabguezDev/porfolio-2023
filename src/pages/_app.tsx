import "@/styles/globals.css";

import type { AppProps } from "next/app";

import dynamic from "next/dynamic";

const DynamicStandardLayout = dynamic(
	() => import("../Layout/StandardLayout"),
	{ ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DynamicStandardLayout>
				<Component {...pageProps} />
			</DynamicStandardLayout>
		</>
	);
}
