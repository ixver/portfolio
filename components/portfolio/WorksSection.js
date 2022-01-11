import {useEffect, useRef, useState} from "react";

import {Flex, Grid, GridItem, Box, Heading, Text, Wrap, WrapItem, Button, useColorModeValue} from "@chakra-ui/react";
import {motion} from "framer-motion";
import works from "../../data/works.json";

import WorksItem from "./WorksItem";

const ItemsList = ({listdata, tagFunc}) => {
	return listdata.map((itemData, i) => <WorksItem key={i} itemData={itemData} tagFunc={tagFunc} />);
};

const WorksSection = () => {
	const worksData = works["data"];
	const headtext = works["headtext"];
	const bodytext = works["bodytext"];
	const subtext = works["subtext"];
	let worksDataRef = useRef();
	let workDataTotalRef = useRef();
	const [listdatacurrent, setlistdatacurrent] = useState(worksData);
	const [workDataTotal, setWorkDataTotal] = useState(worksData.length);
	const [currentTag, setCurrentTag] = useState("");
	const tagChoices = [];
	worksData.map(function (vals, index) {
		vals.tech &&
			vals.tech.length > 0 &&
			vals.tech.map(function (t, i) {
				!tagChoices.includes(t) && tagChoices.push(t);
			});
	});

	useEffect(() => {});

	const titleChoices = ["web app", "detection", "scraping", "nlp", "code snippet", "visualization"];
	const handleFilterReset = () => {
		setCurrentTag("");
		setlistdatacurrent(worksData);
		setWorkDataTotal(worksData.length);
	};
	const handleFilterByTitle = (e) => {
		const newtitleddaata = worksData.filter(function (vals, index) {
			return vals.title.length > 0 ? vals.title.toLowerCase().includes(e.target.value) : false;
		});
		setlistdatacurrent(newtitleddaata);
		setWorkDataTotal(newtitleddaata.length);
		setCurrentTag(e.target.value);
	};
	const handleFilterByTags = (e) => {
		const newtaggeddata = worksData.filter(function (vals, index) {
			return vals.tech.length > 0 ? vals.tech.includes(e.target.value) : false;
		});
		setlistdatacurrent(newtaggeddata);
		setWorkDataTotal(newtaggeddata.length);
		setCurrentTag(e.target.value);
	};

	const outerAnimContainer0 = {
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
				delay: 0.28,
				type: "spring",
				ease: "easeIn",
				damping: 11,
			},
		},
	};
	const outerAnimContainer = {
		hiding: {},
		showing: {
			transition: {
				// when: "beforeChildren",
				delayChildren: 0.58,
				staggerChildren: 0.28,
			},
		},
	};
	const tagsOuterAnimContainer = {
		hiding: {},
		showing: {
			transition: {
				// when: "beforeChildren",
				delayChildren: 1,
				staggerChildren: 0.08,
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
				damping: 8,
				duration: 0.08,
			},
		},
	};
	const modeBgColor = useColorModeValue("gray.800", "gray.100");
	const modeTxtClr = useColorModeValue("white", "black");
	const modeTagClr = useColorModeValue("gray.400", "gray.600");
	const modeTagChosenClr = useColorModeValue("white", "black");
	const modeTagHoveredClr = useColorModeValue("white", "black");
	const modeTagHoveredBgClr = useColorModeValue("blue.600", "blue.200");
	const modeItemsTotalLblClr = useColorModeValue("white", "black");
	return (
		<Flex direction={["column"]} textAlign={{base: "center", md: "left"}} pb="8rem">
			<Grid templateColumns="repeat(12,1fr)" autoRows columnGap={{base: "1.4rem", md: "1.4rem"}}>
				{/* SUBDIVISION 1 */}
				<GridItem colSpan={{base: 12, lg: 4}} mb="4.76rem">
					<Flex direction={["column"]} alignItems={{base: "center", lg: "start"}}>
						{/* <Box position="absolute" p={0} m={0} mb="2.8rem" left="-45.6rem" width="260rem" opacity={0.2}>
							<Image src="g1b.png" alt="news image" zIndex={0} />
						</Box> */}
						<Heading variant="section-title" fontSize="3.3rem" mb="3.36rem">
							{headtext}
						</Heading>
						<Text
							variant="section-text"
							color={modeTxtClr}
							fontSize="1.4rem"
							maxW="23.1rem"
							mb="4.76rem"
							lineHeight="2.31rem"
							textAlign={{base: "center", lg: "left"}}
							dangerouslySetInnerHTML={{__html: bodytext}}
						></Text>
						{/* submenu of tags */}
						<motion.div variants={tagsOuterAnimContainer}>
							<Flex
								maxW={{base: "65.6rem", lg: "21.7rem"}}
								justify={{base: "center", lg: "left"}}
								wrap="wrap"
								alignContent="center"
								alignItems="center"
								mb="1.6rem"
							>
								<motion.div variants={tagAnim}>
									<Box>
										<Text
											as="button"
											variant="outline"
											lineHeight="1.1rem"
											fontSize="1rem"
											letterSpacing=".08rem"
											fontWeight="normal"
											_hover={{backgroundColor: modeTagHoveredBgClr, color: modeTagHoveredClr, borderColor: modeTagHoveredClr}}
											py=".1rem"
											px=".4rem"
											mx=".28rem"
											my=".33rem"
											color={modeTagClr}
											borderColor={modeTagClr}
											borderWidth=".08rem"
											onClick={() => handleFilterReset()}
										>
											all
										</Text>
									</Box>
								</motion.div>
								<Box>
									<Text
										variant="outline"
										lineHeight="1.1rem"
										fontSize="1.11rem"
										letterSpacing=".08rem"
										fontWeight="normal"
										py=".1rem"
										px=".4rem"
										mx=".28rem"
										my=".33rem"
										color={modeTagClr}
										borderColor="rgba(1,1,1,0)"
										borderWidth=".08rem"
										onClick={() => handleFilterReset()}
									>
										topics
									</Text>
								</Box>
								{titleChoices.map((v, i) => (
									<motion.div variants={tagAnim} key={i}>
										<Box>
											<Text
												as="button"
												variant="outline"
												key={i}
												lineHeight="1.1rem"
												fontSize="1rem"
												letterSpacing=".08rem"
												fontWeight="normal"
												_hover={{backgroundColor: modeTagHoveredBgClr, color: modeTagHoveredClr, borderColor: modeTagHoveredClr}}
												py=".1rem"
												px=".4rem"
												mx=".28rem"
												my=".33rem"
												bg={currentTag == v ? modeTagHoveredBgClr : "rgba(0,0,0,0)"}
												color={currentTag == v ? modeTagChosenClr : modeTagClr}
												borderColor={currentTag == v ? modeTagChosenClr : modeTagClr}
												borderWidth={currentTag == v ? ".2rem" : ".08rem"}
												value={v}
												onClick={(e) => {
													handleFilterByTitle(e);
												}}
											>
												{v}
											</Text>
										</Box>
									</motion.div>
								))}
								<Box>
									<Text
										variant="outline"
										lineHeight="1.1rem"
										fontSize="1.11rem"
										letterSpacing=".08rem"
										fontWeight="normal"
										py=".1rem"
										px=".4rem"
										mx=".28rem"
										my=".33rem"
										color={modeTagClr}
										borderColor="rgba(1,1,1,0)"
										borderWidth=".08rem"
										onClick={() => handleFilterReset()}
									>
										tools
									</Text>
								</Box>
								{tagChoices.map((v, i) => (
									<motion.div variants={tagAnim} key={i}>
										<Box key={i}>
											<Text
												as="button"
												variant="outline"
												key={i}
												lineHeight="1.1rem"
												fontSize="1rem"
												letterSpacing=".08rem"
												fontWeight="normal"
												_hover={{backgroundColor: modeTagHoveredBgClr, color: modeTagHoveredClr, borderColor: modeTagHoveredClr}}
												py=".1rem"
												px=".4rem"
												mx=".28rem"
												my=".33rem"
												bg={currentTag == v ? modeTagHoveredBgClr : "rgba(0,0,0,0)"}
												color={currentTag == v ? modeTagChosenClr : modeTagClr}
												borderColor={currentTag == v ? modeTagChosenClr : modeTagClr}
												borderWidth={currentTag == v ? ".2rem" : ".08rem"}
												value={v}
												onClick={(e) => {
													handleFilterByTags(e);
												}}
											>
												{v}
											</Text>
										</Box>
									</motion.div>
								))}
								<Text
									ref={workDataTotalRef}
									variant="outline"
									mx=".7rem"
									alignSelf="center"
									fontSize="1.2rem"
									letterSpacing=".08rem"
									fontWeight="normal"
									color={modeItemsTotalLblClr}
									borderColor="rgba(1,1,1,0)"
									borderWidth=".08rem"
									onClick={() => handleFilterReset()}
								>
									{workDataTotal} items
								</Text>
							</Flex>
						</motion.div>
					</Flex>
				</GridItem>

				{/* SUBDIVISION 1 */}
				<GridItem colSpan={{base: 12, lg: 8}} zIndex={2}>
					<motion.div variants={outerAnimContainer0}>
						<motion.div variants={outerAnimContainer}>
							<Box w="100%" bg={modeBgColor} ref={worksDataRef} listdata={listdatacurrent}>
								<ItemsList listdata={listdatacurrent} tagFunc={handleFilterByTags} />
							</Box>
							{/* <Text mb="2.8rem" textAlign="center" letterSpacing=".2rem" variant="section-text">
								more to come..
							</Text> */}
						</motion.div>
					</motion.div>
				</GridItem>
			</Grid>
		</Flex>
	);
};

export default WorksSection;
