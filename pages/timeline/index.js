import React, {useState} from "react";

import {
	Container,
	Box,
	Center,
	Flex,
	Grid,
	GridItem,
	Image,
	Heading,
	Text,
	useColorModeValue,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalBody,
	useDisclosure,
} from "@chakra-ui/react";

import {motion} from "framer-motion";

import blogData from "../../data/blog.json";

import Item from "../../components/timeline/Item";

const TimelinePage = () => {
	const blogListData = blogData["data"];
	const headtext = blogData["headtext"];
	const bodytext = blogData["bodytext"];

	const outerAnimContainer0 = {
		hiding: {
			opacity: 0,
			y: -160,
		},
		showing: {
			opacity: 1,
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
				when: "beforeChildren",
				delayChildren: 0.58,
				staggerChildren: 0.17,
			},
		},
	};
	const {isOpen, onOpen, onClose} = useDisclosure();
	const [modalData, setModalData] = useState(null);
	const openMedia = (itemData) => {
		onOpen();
		setModalData(itemData);
	};
	const closeMedia = () => {
		onClose();
		setModalData(null);
	};
	const modeBgColor = useColorModeValue("gray.600", "gray.200");
	const modeTxtClr = useColorModeValue("bodyLight", "bodyDark");
	const modeTxtGradientClr = useColorModeValue("linear(to-r, blue.200, pink.400)", "linear(to-l, pink.400, blue.400)");
	return (
		// BLOG LAYOUT
		<Box pt="6rem">
			<Container maxW="container.xl">
				<Flex direction={["column"]} textAlign={{base: "center", lg: "left"}} pb="8rem">
					<Grid templateColumns="repeat(12,1fr)" autoRows columnGap={{sm: "2vh", md: "2vh"}}>
						{/* SUBDIVISION 1 */}
						<GridItem colSpan={{base: 12, md: 4}} mb="6.8vh" pr={{lg: "4rem"}}>
							<Flex direction={["column"]} alignItems={{base: "center", lg: "start"}}>
								<Heading variant="section-title" fontSize="3.3rem" mb="6vh">
									{headtext}
								</Heading>
								<Text
									// color={modeTxtClr}
									bgGradient={modeTxtGradientClr}
									bgClip="text"
									fontSize="2vh"
									fontWeight="bold"
									variant="section-text"
									maxW="33vh"
									mb="6.8vh"
									lineHeight="4.8vh"
									textAlign={{base: "center", lg: "left"}}
									dangerouslySetInnerHTML={{__html: bodytext}}
								></Text>
							</Flex>
						</GridItem>
						{/* SUBDIVISION 1 */}
						<GridItem colSpan={{base: 12, md: 8}}>
							<motion.div variants={outerAnimContainer0}>
								<motion.div variants={outerAnimContainer}>
									<Box w="100%" bg={modeBgColor}>
										{blogListData && blogListData.map((doc, i) => <Item key={i} itemData={doc} openMedia={openMedia} />)}
									</Box>
								</motion.div>
							</motion.div>
						</GridItem>
						<GridItem colSpan={{base: 12, lg: 4}}></GridItem>
						{/* <GridItem colSpan={{base: 12, lg: 8}} mb="2.8rem">
							<Center>
								<Text textAlign="center" letterSpacing=".2rem" variant="section-text">
									....
								</Text>
							</Center>
						</GridItem> */}
					</Grid>
				</Flex>
				{/* {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />} */}
			</Container>
			{modalData && (
				<Modal onClose={() => closeMedia()} isOpen={isOpen} isCentered>
					<ModalOverlay />
					<ModalContent>
						<ModalCloseButton color="black" bg="white" borderColor="black" borderWidth=".28vh" rounded="0" />
						<ModalBody>
							{modalData.vidUrl ? (
								<iframe
									width="100%"
									height="100%"
									// className="w-auto sm:w-[80%] h-60 sm:h-80 sm:mx-4 sm:mb-4"
									src={
										modalData.vidUrl.includes("/watch?v=")
											? modalData.vidUrl.replace(".com/watch?v=", "-nocookie.com/embed/")
											: modalData.vidUrl
									}
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;nocookie"
									allowFullScreen
								></iframe>
							) : (
								<Image objectFit="cover" src={modalData.imgUrl} minH="100%" minW="100%" alt="uploaded pic" zIndex={2} />
							)}
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</Box>
	);
};

export default TimelinePage;
