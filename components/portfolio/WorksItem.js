import React from "react";

import {Flex, Box, Link, Heading, Text, Image, Center, useColorModeValue} from "@chakra-ui/react";
import {motion, LayoutGroup} from "framer-motion";

const WorksItem = ({itemData, tagFunc}) => {
	var colorSchemes = {
		a: ["brandADark", "brandALight"],
		b: ["brandBDark", "brandBLight"],
	};

	const itemAnim = {
		hiding: {
			opacity: 0,
			y: -160,
		},
		showing: {
			opacity: 1,
			y: 0,
			transition: {
				delayChildren: 0.48,
				staggerChildren: 0.28,
				type: "spring",
				ease: "easeIn",
				damping: 11,
				duration: 0.17,
			},
		},
	};
	const tagAnim = {
		hiding: {
			opacity: 0,
			y: -28,
		},
		showing: {
			opacity: 1,
			y: 0,
			transition: {
				ease: "easeIn",
				type: "spring",
				damping: 6,
				duration: 0.08,
			},
		},
	};
	const modeBgClr = useColorModeValue("rgb(22,22,22)", "white");
	const modeTagClr = useColorModeValue("white", "black");
	const bdrClr = useColorModeValue("rgb(170, 170, 170,1)", "rgb(88, 88, 88,1)");

	// const modeTagClr = useColorModeValue("gray.400", "gray.600");
	const modedescriptionClr = useColorModeValue("gray.400", "gray.600");
	const modeTagHoveredClr = useColorModeValue("white", "black");
	const modeTagHoveredBgClr = useColorModeValue("blue.600", "blue.200");
	return (
		<motion.div variants={itemAnim}>
			{/* SEPARATE PROJECT */}
			<Flex
				variant="section-item"
				direction={{base: ["column"], md: ["column"]}}
				justifyContent="start"
				h="auto"
				mb="3.36rem"
				bg={modeBgClr}
				borderWidth=".12rem"
				borderColor={bdrClr}
			>
				<Flex justify="center" alignItems="center" p=".56rem" m={0} mb="2.8rem" flexWrap="wrap">
					{itemData.videoUrl && (
						<Box width="100%" h="26rem">
							<iframe
								width="100%"
								height="100%"
								src={
									itemData.videoUrl.includes("/watch?v=")
										? itemData.videoUrl.replace(".com/watch?v=", "-nocookie.com/embed/")
										: itemData.videoUrl
								}
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;nocookie"
								allowFullScreen
							></iframe>
						</Box>
					)}
					{Array.isArray(itemData.imgs) && itemData.imgs.length > 0
						? itemData["imgs"].map((t, i) => {
								return (
									<Box key={i} minH="5.6rem" minW="22.8rem" wrap="true">
										<Image
											maxH="22.8rem"
											maxW={{base: "auto", md: "auto"}}
											src={t}
											alt={itemData.title}
											// htmlHeight="auto"
										/>
									</Box>
								);
						  })
						: itemData.imgs.length > 0 && (
								<Image
									minH="25.6rem"
									maxW={{base: "auto", md: "auto"}}
									src={itemData.imgs}
									alt={itemData.title}
									// htmlHeight="auto"
								/>
						  )}
				</Flex>

				<Box>
					<Flex direction={{base: ["column"], md: ["column"]}} justifyContent="start" alignItems="center" mb="3.36rem">
						{/* title */}
						<Heading variant="worksample-title" fontSize="2.31rem" mb="3.36rem" textAlign="center" mx="5.6rem">
							<Link href={itemData.pageurl} target="_blank">
								{itemData.title}
							</Link>
						</Heading>
						{/* description */}
						<Box
							variant="worksample-item-text"
							textAlign="center"
							maxW={{base: "22rem", md: "45.6rem"}}
							p={0}
							mb="1.11rem"
							color={modedescriptionClr}
						>
							<Text dangerouslySetInnerHTML={{__html: itemData.description}}></Text>
						</Box>

						{/* tags */}
						<Flex
							direction={["row"]}
							maxW={{base: "22rem", md: "45.6rem"}}
							justifyContent={{base: "center", md: "center"}}
							flexWrap="wrap"
							mb=".56rem"
						>
							{itemData["tech"].map((t, i) => {
								return (
									<motion.div layout layoutId="tags" key={i} variants={tagAnim}>
										<Text
											as="button"
											key={i}
											lineHeight="1.1rem"
											variant="solid"
											fontSize=".8rem"
											letterSpacing=".08rem"
											fontWeight="normal"
											py=".1rem"
											px=".4rem"
											mx=".2rem"
											my=".33rem"
											color={modeTagClr}
											borderColor={modeTagClr}
											borderWidth=".08rem"
											_hover={{backgroundColor: modeTagHoveredBgClr, color: modeTagHoveredClr, borderColor: modeTagHoveredClr}}
											value={t}
											onClick={(e) => {
												tagFunc(e);
											}}
										>
											{t}
										</Text>
									</motion.div>
								);
							})}
						</Flex>

						{/* source */}
						<Flex alignItems={{base: "center", md: "baseline"}} direction={{base: ["column"], md: ["row"]}} mb="3.36rem" color={modedescriptionClr}>
							{itemData.sourceurl && (
								<Link
									href={itemData.sourceurl}
									target="_blank"
									variant="outline"
									lineHeight="1.1rem"
									fontSize=".88rem"
									letterSpacing=".16rem"
									py=".1rem"
									px=".28rem"
									mx=".2rem"
								>
									<Center>source</Center>
								</Link>
							)}
						</Flex>
						{/* dev */}
						<Flex direction={["row"]} maxW="28rem" justifyContent={{base: "center", md: "end"}} flexWrap="wrap"></Flex>
					</Flex>
				</Box>
			</Flex>
		</motion.div>
	);
};

export default WorksItem;
