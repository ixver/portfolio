import {useColorModeValue} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {Text} from "@chakra-ui/react";

export const AnimatedWord = ({text}) => {
	// const xdistancerange = 2;
	// const ydistancerange = 2;
	const rotationrange = 28;
	function randomIntFromInterval(min, max) {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	const textContainerAnim = {
		initial: {},
		animate: {
			transition: {
				when: "beforeChildren",
				delayChildren: 4.8,
				staggerChildren: 0.28,
			},
		},
	};
	const letterAnim = {
		initial: (key) => ({
			// x: randomIntFromInterval(-xdistancerange, xdistancerange), // * (Math.round(Math.random()) * 2 - 1),
			// y: randomIntFromInterval(-ydistancerange, ydistancerange), // * (Math.round(Math.random()) * 2 - 1),
			rotate: Math.floor(Math.random() * rotationrange) * (Math.round(Math.random()) * 2 - 1),
			color: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},1)`,
			// scale: Math.random() * 2.8,
			opacity: Math.random() * 1,
		}),
		animate: {
			// x: 0,
			// y: 0,
			rotate: 0,
			// scale: 1,
			opacity: 1,
			transition: {
				// ease: "easeIn",
				// type: "spring",
				damping: 2,
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 2.8,
				ease: "anticipate",
				repeat: Infinity,
				repeatType: "mirror",
				repeatDelay: 8.8,
			},
		},
	};
	const modeTextClr = useColorModeValue("rgba(255,255,255,1)", "rgba(0,0,0,1)");
	return (
		<motion.div variants={textContainerAnim} initial="initial" animate="animate">
			<div
				style={{
					display: "flex",
				}}
			>
				{[...text].map((letter, i) => (
					<motion.div key={i} variants={letterAnim} suppressHydrationWarning={true}>
						<Text color={modeTextClr}>{letter}</Text>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

const itemMain = {
	hidden: {opacity: 0, y: 200},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1.6,
		},
	},
};

const sometextAnimateVariants = {
	// goes up, fades in
	initial: {opacity: 0, y: 80},
	animate: {opacity: 1, y: 0},
	transition: {
		ease: "easeInOut",
		duration: 1,
		delay: 0.4,
	},
};

const somebuttonAnimateVariants = {
	// scales up, fades in
	initial: {opacity: 0},
	animate: {opacity: 1},
	transition: {ease: "easeInOut", duration: 1, delay: 1.8},
};

const ehaderAnimateVariants = {
	initial: {opacity: 0, y: -100},
	animate: {opacity: 1, y: 0},
	transition: {ease: "easeInOut", duration: 1, delay: 0.6},
};
