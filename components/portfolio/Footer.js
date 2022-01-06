import NextLink from "next/link";
import {useRouter} from "next/router";

import {Container, Flex, Grid, GridItem, Box, Text, Icon, useColorModeValue, Divider} from "@chakra-ui/react";
import {FooterNavButton, LinkButton, FooterTopNavButton} from "./Buttons";
import {GithubIcon, LinkedinIcon, MailIcon} from "../Icons";
const Footer = () => {
	const router = useRouter();
	let dividColor = useColorModeValue("rgb(222, 222, 222,1)", "rgb(44, 44, 44,1)");
	const colorScheme = useColorModeValue("dark", "light");
	return (
		<Box pt="2.8rem" variant="" id="Footer">
			<Container maxW="container.xl" centerContent>
				<Divider bg={dividColor} zIndex={0} style={{zIndex: 0}} mb="8vh" />
				<Grid templateColumns="repeat(12,1fr)" autoRows columnGap={{base: "2vh", md: "2vh"}} mb="4rem" w="100%" m="auto">
					<GridItem colSpan={{base: 12, md: 4}} mb="4.8rem">
						<Box m={0} p={0} mb="2.2vh">
							<Text textAlign={{base: "center", md: "left"}} color="bodyDark2ndAlt">
								Browse
							</Text>
						</Box>
						<Flex direction={{base: ["column"], md: ["column"]}} w="100%" alignItems={{base: "center", md: "start"}} justifyContent="start">
							<FooterTopNavButton lbl="Back to top" />
							<FooterNavButton loc="/" lbl="Works" router={router} />
							{/* <FooterNavButton loc="/resume" lbl="Resume" router={router} /> */}
							<FooterNavButton loc="/timeline" lbl="Blog" router={router} />
						</Flex>
					</GridItem>
					<GridItem colSpan={{base: 12, md: 8}} mb="4.8rem">
						<Flex direction={{base: ["column"], md: ["column"]}} w="100%" alignItems={{base: "center", md: "end"}} justifyContent="end" mb="8vh">
							<Box w="100%" m={0} p={0} mb="2.2vh">
								<Text textAlign={{base: "center", md: "right"}} color="bodyDark2ndAlt">
									For whatever, freely contact me via below
								</Text>
							</Box>
							<LinkButton
								loc="https://www.github.com/o1123pq"
								target="_blank"
								lbl="Github"
								colorScheme={colorScheme}
								leftIcon={<Icon fontSize="2.2vh" as={GithubIcon} />}
							/>
							<LinkButton
								loc="https://www.linkedin.com/in/jlim01"
								target="_blank"
								lbl="LinkedIn"
								leftIcon={<Icon fontSize="2.2vh" as={LinkedinIcon} />}
								colorScheme={colorScheme}
							/>
							<LinkButton
								loc="mailto:o1123pq@gmail.com"
								target="_blank"
								lbl="email"
								leftIcon={<Icon fontSize="2.2vh" as={MailIcon} />}
								colorScheme={colorScheme}
							/>
						</Flex>
						<Text color="bodyDark2ndAlt" fontSize="1.6vh" mb="6.8rem" textAlign={{base: "center", md: "right"}}>
							Copyright &copy; 2021
						</Text>
					</GridItem>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
