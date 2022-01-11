import React, {useState} from "react";

import {Container, Box, Flex, Grid, GridItem, Img, Heading, Text, useColorModeValue} from "@chakra-ui/react";

import {motion} from "framer-motion";

import resumeData from "../../data/resume.json";

const TimelinePage = () => {
	const textColor = useColorModeValue("brandBLight", "brandALight");
	const textColorB = useColorModeValue("bodyDark", "bodyLight");
	// const bdrClr = useColorModeValue("bodyLight2nd", "bodyDark2nd");
	const bdrClr = useColorModeValue("rgb(170, 170, 170,1)", "rgb(88, 88, 88,1)");

	const outerAnimContainer = {
		hiding: {},
		showing: {
			transition: {
				when: "beforeChildren",
				delayChildren: 0.28,
				staggerChildren: 0.17,
			},
		},
	};
	const itemAnim = {
		hiding: {
			opacity: 0,
			// scale: 0,
			y: -160,
		},
		showing: {
			opacity: 1,
			// scale: 1,
			y: 0,
			transition: {
				type: "spring",
				ease: "easeIn",
				damping: 11,
				duration: 0.17,
			},
		},
	};
	const resumeLoc = resumeData["imgUrl"];
	const headtext = resumeData["headtext"];
	const bodytext = resumeData["bodytext"];
	const modeTxtClr = useColorModeValue("bodyLight", "bodyDark");
	return (
		// RESUME LAYOUT
		<Box pt="6rem">
			<Container maxW="container.xl">
				<Flex direction={["column"]} textAlign={{base: "center", md: "left"}} pb="8rem">
					<Grid templateColumns="repeat(12,1fr)" autoRows columnGap={{sm: "1.4rem", md: "1.4rem"}}>
						{/* SUBDIVISION 1 */}
						<GridItem colSpan={{base: 12, lg: 4}} mb="4.76rem" pr={{lg: "4rem"}}>
							<Flex direction={["column"]} alignItems={{base: "center", md: "start"}}>
								<Heading variant="section-title" fontSize="3.3rem" mb="3.36rem">
									{headtext}
								</Heading>
								<Text
									variant="section-text"
									color={modeTxtClr}
									maxW="23.1rem"
									mb="4.76rem"
									lineHeight="2.31rem"
									textAlign={{base: "center", lg: "left"}}
									dangerouslySetInnerHTML={{__html: bodytext}}
								></Text>
							</Flex>
						</GridItem>
						{/* SUBDIVISION 1 */}
						<GridItem colSpan={{base: 12, lg: 8}}>
							<motion.div variants={outerAnimContainer}>
								<motion.div variants={itemAnim}>
									<Flex direction={["column"]} mb="2rem">
										<Box flexBasis={1} borderWidth=".11rem" p=".56rem" borderColor={bdrClr}>
											<Img src={resumeLoc} minH="100%" minW="100%" alt="resume" zIndex={2} />
										</Box>
									</Flex>
								</motion.div>
							</motion.div>
						</GridItem>
					</Grid>
				</Flex>
				{/* {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />} */}
			</Container>
		</Box>
	);
};

export default TimelinePage;
