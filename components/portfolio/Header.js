import {useEffect, useState} from "react";

import {Container, Flex, Box, Spacer, useColorModeValue, Divider} from "@chakra-ui/react";

import {ThemeToggleButton, HomeButton, NavButton, NavContactButton} from "./Buttons";
import {motion} from "framer-motion";

const Header = ({router}) => {
	useEffect(() => {});

	let dividColor = useColorModeValue("rgb(222, 222, 222,1)", "rgb(44, 44, 44,1)");
	// const modeDividerGradientClr = useColorModeValue("linear(to-tl, black, white)", "linear(to-tr, black, white)");

	return (
		<Box p={0} id="Header">
			<Container maxW="container.xl">
				<motion.div
					initial={{opacity: 0, y: "-25.6rem"}}
					animate={{opacity: 1, y: "0vh"}}
					transition={{delay: 0.48, duration: 0.48, type: "spring", ease: "easeIn", when: "beforeChildren"}}
				>
					<Flex direction={{base: ["column"], md: ["row"]}} alignItems="center" alignContent="center" pt="1.4rem" pb="1.96rem">
						<HomeButton loc="/" lbl="JUNG&nbsp;LIM" />
						<Spacer p={0} m={0} />

						<Flex direction={{base: ["column"], md: ["row"]}} alignItems="center" alignContent="center">
							<ThemeToggleButton order={{base: 4, md: 1}} />
							<NavButton loc="/" lbl="Works" order={{base: 1, md: 2}} router={router} />
							{/* <NavButton loc="/resume" lbl="Resume" order={{base: 2, md: 3}} router={router} /> */}
							<NavButton loc="/timeline" lbl="Blog" order={{base: 2, md: 3}} router={router} />
							<NavContactButton lbl="Contact" order={{base: 3, md: 4}} />
						</Flex>
					</Flex>
				</motion.div>
				<motion.div
					initial={{x: "-85.6rem"}}
					animate={{x: "0vh"}}
					transition={{duration: 0.68, type: "spring", ease: "easeIn", when: "beforeChildren"}}
					zIndex={0}
				>
					{/* CUSTON DIVIDER */}
					{/* <Box
						w="100%"
						// bg={dividColor}
						zIndex={0}
						style={{zIndex: 0}}
						bgGradient={modeDividerGradientClr}
						// bgClip="text"
						h=".056rem"
						overflow="hidden"
					>
						.
					</Box> */}
					<Divider bg={dividColor} zIndex={0} style={{zIndex: 0}} />
				</motion.div>
			</Container>
		</Box>
	);
};

export default Header;
