import React, {useState} from "react";
import {Flex, Box, Heading, Text, Image, useColorModeValue} from "@chakra-ui/react";
import {motion, LayoutGroup} from "framer-motion";

const Item = ({itemData, openMedia}) => {
	const modeBgColor = useColorModeValue("pink.400", "pink.200");

	const modeNeutralBgColor = useColorModeValue("black", "white");
	const neutralTextColorA = useColorModeValue("white", "black");

	const projectTextColorA = useColorModeValue("white", "black");
	const projectTextColorB = useColorModeValue("white", "black");

	const personalTextColorA = useColorModeValue("white", "black");
	const personalTextColorB = useColorModeValue("white", "black");

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

	return (
		<motion.div variants={itemAnim}>
			{itemData.markType == "year" && (
				<Flex direction={{base: ["column"], lg: ["row"]}} bg={modeNeutralBgColor} mb="6.8vh" h="100%">
					<Box p={0} m={0} bg={neutralTextColorA} w={{base: "100%", lg: "34%"}} h={{base: "8vh", lg: "26vh"}}></Box>
					<Box px="8vh" py="4vh" m={0} w={{base: "100%", lg: "66%"}} lineHeight="4vh" textAlign="right">
						<Heading overflowWrap display="inline" fontWeight="bold" color={neutralTextColorA} fontSize={{base: "11vh", xl: "14vh"}}>
							{itemData.title}
						</Heading>
					</Box>
				</Flex>
			)}
			{itemData.markType == "personal" && (
				<Flex direction={{base: ["column"], lg: ["row"]}} bg={modeBgColor} mb="6.8vh" h="100%" w="100%">
					{/* MEDIA */}
					<Flex
						direction={["column"]}
						order={{base: 1, lg: 1}}
						w={{base: "100%", lg: "50%"}}
						m={0}
						p=".8vh"
						justifyContent="center"
						onClick={() => openMedia(itemData)}
						style={{overflow: "hidden"}}
					>
						{itemData.vidUrl ? (
							<iframe
								width="100%"
								height="260vh"
								src={itemData.vidUrl.includes("/watch?v=") ? itemData.vidUrl.replace(".com/watch?v=", "-nocookie.com/embed/") : itemData.vidUrl}
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;nocookie"
								allowFullScreen
							></iframe>
						) : (
							<Image objectFit="cover" src={itemData.imgUrl} h="26vh" minW="100%" alt="uploaded pic" zIndex={2} />
						)}
					</Flex>
					<Box px="4vh" py="4vh" m={0} w={{base: "100%", lg: "50%"}} lineHeight="4vh" textAlign="left" order={{base: 2, lg: 2}}>
						<Text overflowWrap display="inline" fontWeight="extrabold" color={personalTextColorA} fontSize="2.8vh">
							{itemData.title}&nbsp;
						</Text>
						<Text display="inline">&#32;&#32;&#32;&#32;</Text>
						<Text overflowWrap display="inline" color={personalTextColorB}>
							{itemData.text}
						</Text>
					</Box>
				</Flex>
			)}
			{itemData.markType == "project" && (
				<Flex direction={{base: ["column"], lg: ["row"]}} bg={modeBgColor} mb="6.8vh" h="100%" w="100%">
					<Box px="4vh" py="4vh" m={0} w={{base: "100%", lg: "50%"}} lineHeight="4vh" textAlign="right" order={{base: 2, lg: 1}}>
						<Text overflowWrap display="inline" fontWeight="extrabold" color={projectTextColorA} fontSize="2.8vh">
							{itemData.title}&nbsp;
						</Text>
						<Text display="inline">&#32;&#32;&#32;&#32;</Text>
						<Text overflowWrap display="inline" color={projectTextColorB}>
							{itemData.text}
						</Text>
					</Box>
					{/* MEDIA */}
					<Box
						direction={["column"]}
						order={{base: 1, lg: 2}}
						w={{base: "100%", lg: "50%"}}
						m={0}
						p=".8vh"
						justifyContent="center"
						onClick={() => openMedia(itemData)}
						style={{overflow: "hidden"}}
					>
						{itemData.vidUrl ? (
							<iframe
								width="100%"
								height="260vh"
								src={itemData.vidUrl.includes("/watch?v=") ? itemData.vidUrl.replace(".com/watch?v=", "-nocookie.com/embed/") : itemData.vidUrl}
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;nocookie"
								allowFullScreen
							></iframe>
						) : (
							<Image objectFit="cover" src={itemData.imgUrl} h="26vh" minW="100%" alt="uploaded pic" zIndex={2} />
						)}
					</Box>
				</Flex>
			)}
		</motion.div>
	);
};

export default Item;
