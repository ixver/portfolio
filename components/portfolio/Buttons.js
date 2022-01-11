import {useState, useEffect} from "react";

import NextLink from "next/link";
import {useRouter} from "next/router";

import {
	Box,
	Link,
	Button,
	IconButton,
	Tooltip,
	useColorModeValue,
	useColorMode,
	Img,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

import {SunIcon, MoonIcon} from "@chakra-ui/icons";

import {motion} from "framer-motion";

import {AnimatedWord} from "../Animations";
import {scroller} from "react-scroll";

export const HomeButton = ({loc, lbl}) => {
	return (
		<Box mb={{base: ".01rem", md: "0rem"}}>
			<NextLink href={loc}>
				<Link fontSize="1.4rem" fontFamily="montserrat" variant="showcase-nav" px={0} mx="1rem" zIndex={99}>
					<AnimatedWord text={lbl} />
				</Link>
			</NextLink>
		</Box>
	);
};

export const NavButton = ({loc, lbl, order, router}) => {
	const [currentColor, setCurrentColor] = useState("");

	let linkColor = useColorModeValue("rgb(222, 222, 222,1)", "rgb(44, 44, 44,1)");
	let linkFocusedColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");
	let linkHvrColor = useColorModeValue("rgb(4, 4, 4,1)", "rgb(233, 233, 233,1)");
	let linkHvrBGColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");

	useEffect(() => {}, [router]);

	return (
		<Box order={order} mb={{base: "1rem", md: "0rem"}}>
			<NextLink href={loc}>
				<Link variant="showcase-nav" px={0} mx="1rem" pb=".1rem" fontSize="1.4rem" colorScheme={useColorModeValue("light", "dark")}>
					{lbl}
				</Link>
			</NextLink>
		</Box>
	);
};

export const NavContactButton = ({lbl, order}) => {
	const scrollToSection = () => {
		scroller.scrollTo("Footer", {
			duration: 80,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};

	return (
		<Box order={order} mb={{base: "1rem", md: "0rem"}}>
			<Link
				variant="showcase-nav"
				px={0}
				mx="1rem"
				pb=".1rem"
				fontSize="1.4rem"
				colorScheme={useColorModeValue("light", "dark")}
				onClick={scrollToSection}
			>
				{lbl}
			</Link>
		</Box>
	);
};

export const ResumeButton = ({lbl, order, router}) => {
	const [resumeOn, setResumeOn] = useState(false);
	const [currentColor, setCurrentColor] = useState("bodyDark2ndAlt");

	let linkColor = useColorModeValue("bodyLight2nd", "bodyDark2nd");
	let linkFocusedColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");
	let linkHvrColor = useColorModeValue("rgb(4, 4, 4,1)", "rgb(233, 233, 233,1)");
	let linkHvrBGColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");
	useEffect(() => {}, [router]);
	return (
		<>
			<Box order={order} mb={{base: "1rem", md: "0rem"}}>
				<Link variant="showcase-nav" px={0} mx="1rem" pb=".1rem" colorScheme={useColorModeValue("light", "dark")}>
					{lbl}
				</Link>
				{/* <Button p={0} variant="ghost" px={0} mx="1rem" pb=".1rem" colorScheme={useColorModeValue("light", "dark")}>
					{lbl}
				</Button> */}
			</Box>
		</>
	);
};

export const ThemeToggleButton = (props) => {
	const {toggleColorMode} = useColorMode();
	const schemeIcon = useColorModeValue(<SunIcon fontSize="1.1rem" />, <MoonIcon fontSize="1.1rem" />);
	let linkHvrColor = useColorModeValue("rgb(4, 4, 4,1)", "rgb(233, 233, 233,1)");
	let linkHvrBGColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");
	return (
		<Box order={props.order} mx="1rem">
			<Tooltip label="Toggle Color Mode" placement="top" hasArrow>
				<motion.div initial={{y: 16, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -16, opacity: 0}} transition={{duration: 0.48}}>
					<Box px={0} m={0} _hover={{color: linkHvrColor, bg: linkHvrBGColor}}>
						<IconButton
							// variant="ghost"
							variant="colormodetoggle"
							aria-label="toggle theme"
							icon={schemeIcon}
							onClick={() => toggleColorMode()}
						></IconButton>
					</Box>
				</motion.div>
			</Tooltip>
		</Box>
	);
};

export const FooterNavButton = ({loc, lbl, order, router}) => {
	const [currentColor, setCurrentColor] = useState("");

	let linkColor = useColorModeValue("rgb(222, 222, 222,1)", "rgb(44, 44, 44,1)");
	let linkFocusedColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");
	let linkHvrColor = useColorModeValue("rgb(4, 4, 4,1)", "rgb(233, 233, 233,1)");
	let linkHvrBGColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");

	useEffect(() => {}, [router]);

	return (
		<Box order={order} mb={{base: "1rem", md: "0rem"}}>
			<NextLink href={loc}>
				<Link px={0} pb=".1rem" fontSize="1.4rem">
					<Button variant="ghost" p={0} px={0} pb=".1rem" colorScheme={useColorModeValue("light", "dark")}>
						{lbl}
					</Button>
				</Link>
			</NextLink>
		</Box>
	);
};

export const FooterTopNavButton = ({lbl, order}) => {
	const scrollToSection = () => {
		scroller.scrollTo("Header", {
			duration: 80,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};

	return (
		<Box order={order} mb={{base: ".7rem", md: "0rem"}}>
			<Link px={0} pb=".1rem" fontSize="1.4rem">
				<Button variant="ghost" p={0} px={0} pb=".1rem" colorScheme={useColorModeValue("light", "dark")} onClick={scrollToSection}>
					{lbl}
				</Button>
			</Link>
		</Box>
	);
};

export const LinkButton = ({loc, lbl, order, router, target, leftIcon, colorScheme}) => {
	const [currentColor, setCurrentColor] = useState("");

	let linkColor = useColorModeValue("rgb(222, 222, 222,1)", "rgb(44, 44, 44,1)");
	let linkFocusedColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");
	let linkHvrColor = useColorModeValue("rgb(4, 4, 4,1)", "rgb(233, 233, 233,1)");
	let linkHvrBGColor = useColorModeValue("rgb(233, 233, 233,1)", "rgb(4, 4, 4,1)");

	useEffect(() => {}, [router]);

	return (
		<Box order={order} mb={{base: ".7rem", md: "0rem"}}>
			<Link _hover="" href={loc} target={target} px={0} fontSize="1.4rem">
				<Button variant="ghost" p={0} px={0} pb=".1rem" leftIcon={leftIcon} colorScheme={colorScheme}>
					{lbl}
				</Button>
			</Link>
		</Box>
	);
};
