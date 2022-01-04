import "../styles/globals.css";
import "@fontsource/poppins";
import "@fontsource/roboto";
import "@fontsource/montserrat";

import {ChakraProvider, CSSReset} from "@chakra-ui/react";
// import { theme } from '@chakra-ui/react'
import theme from "../styles/ChakraTheme";
import {AnimatePresence, motion} from "framer-motion";

import PagesLayout from "../components/PagesLayout";

function Website({Component, pageProps, router}) {
	return (
		<ChakraProvider theme={theme}>
			{/* <CSSReset />  */}
			<AnimatePresence exitBeforeEnter initial={true}>
				<PagesLayout router={router}>
					<Component {...pageProps} />
				</PagesLayout>
			</AnimatePresence>
		</ChakraProvider>
	);
}

export default Website;
