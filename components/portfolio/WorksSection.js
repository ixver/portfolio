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
	const tagChoices = [];
	worksData.map(function (vals, index) {
		vals.tech &&
			vals.tech.length > 0 &&
			vals.tech.map(function (t, i) {
				!tagChoices.includes(t) && tagChoices.push(t);
			});
	});

	useEffect(() => {});

	const titleChoices = ["detection", "scraping", "nlp", "code snippet", "plotting"];
	const handleFilterReset = () => {
		setlistdatacurrent(worksData);
		setWorkDataTotal(worksData.length);
	};
	const handleFilterByTitle = (e) => {
		const newtitleddaata = worksData.filter(function (vals, index) {
			return vals.title.length > 0 ? vals.title.toLowerCase().includes(e.target.value) : false;
		});
		setlistdatacurrent(newtitleddaata);
		setWorkDataTotal(newtitleddaata.length);
	};
	const handleFilterByTags = (e) => {
		const newtaggeddata = worksData.filter(function (vals, index) {
			return vals.tech.length > 0 ? vals.tech.includes(e.target.value) : false;
		});
		setlistdatacurrent(newtaggeddata);
		setWorkDataTotal(newtaggeddata.length);
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
	const modeTagHoveredClr = useColorModeValue("white", "black");
	const modeTagHoveredBgClr = useColorModeValue("blue.600", "blue.200");
	return (
		<Flex direction={["column"]} textAlign={{base: "center", md: "left"}} pb="8rem">
			<Grid templateColumns="repeat(12,1fr)" autoRows columnGap={{base: "2vh", md: "2vh"}}>
				{/* SUBDIVISION 1 */}
				<GridItem colSpan={{base: 12, lg: 4}} mb="6.8vh">
					<Flex direction={["column"]} alignItems={{base: "center", lg: "start"}}>
						{/* <Box position="absolute" p={0} m={0} mb="4vh" left="-48vh" width="160vh" opacity={0.2}>
							<Image src="g1b.png" alt="news image" zIndex={0} />
						</Box> */}
						<Heading variant="section-title" fontSize="3.3rem" mb="4.8vh">
							{headtext}
						</Heading>
						<Text
							variant="section-text"
							color={modeTxtClr}
							maxW="33vh"
							mb="6.8vh"
							lineHeight="3.3vh"
							textAlign={{base: "center", lg: "left"}}
							dangerouslySetInnerHTML={{__html: bodytext}}
						></Text>
						{/* submenu of tags */}
						<motion.div variants={tagsOuterAnimContainer}>
							<Flex
								maxW={{base: "68vh", lg: "31vh"}}
								justify={{base: "center", lg: "left"}}
								wrap="wrap"
								alignContent="center"
								alignItems="center"
								mb="2.2vh"
							>
								<motion.div variants={tagAnim}>
									<Box>
										<Text
											as="button"
											variant="outline"
											lineHeight="1.1rem"
											fontSize=".8rem"
											letterSpacing=".08rem"
											fontWeight="normal"
											_hover={{backgroundColor: modeTagHoveredBgClr, color: modeTagHoveredClr, borderColor: modeTagHoveredClr}}
											py=".1rem"
											px=".4rem"
											mx=".08rem"
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
										fontSize=".8rem"
										letterSpacing=".08rem"
										fontWeight="normal"
										py=".1rem"
										px=".4rem"
										mx=".08rem"
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
												fontSize=".8rem"
												letterSpacing=".08rem"
												fontWeight="normal"
												_hover={{backgroundColor: modeTagHoveredBgClr, color: modeTagHoveredClr, borderColor: modeTagHoveredClr}}
												py=".1rem"
												px=".4rem"
												mx=".08rem"
												my=".33rem"
												color={modeTagClr}
												borderColor={modeTagClr}
												borderWidth=".08rem"
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
										fontSize=".8rem"
										letterSpacing=".08rem"
										fontWeight="normal"
										py=".1rem"
										px=".4rem"
										mx=".08rem"
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
												fontSize=".8rem"
												letterSpacing=".08rem"
												fontWeight="normal"
												_hover={{backgroundColor: modeTagHoveredBgClr, color: modeTagHoveredClr, borderColor: modeTagHoveredClr}}
												py=".1rem"
												px=".4rem"
												mx=".08rem"
												my=".33rem"
												color={modeTagClr}
												borderColor={modeTagClr}
												borderWidth=".08rem"
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
									mx=".8vh"
									alignSelf="center"
									fontSize="1.6vh"
									letterSpacing=".08rem"
									fontWeight="normal"
									color={modeTagClr}
									borderColor="rgba(1,1,1,0)"
									borderWidth=".08rem"
									onClick={() => handleFilterReset()}
								>
									{workDataTotal} ITEMS
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
							<Text mb="2.8rem" textAlign="center" letterSpacing=".2rem" variant="section-text">
								more to come..
							</Text>
						</motion.div>
					</motion.div>
				</GridItem>
			</Grid>
		</Flex>
	);
};

export default WorksSection;
