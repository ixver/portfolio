import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import {Box} from "@chakra-ui/react";

// import Header from './Header'
import Meta from "./Meta";
import Header from "./portfolio/Header";
import Footer from "./portfolio/Footer";
import PagesLayoutStyles from "../styles/PagesLayout.module.css";
import {AnimatePresence, motion} from "framer-motion";

const PagesLayout = ({children}) => {
	const router = useRouter();
	const pageAnim = {
		hiding: {
			opacity: 0,
			y: -88,
		},
		showing: {
			opacity: 1,
			y: 0,
			transition: {
				// delay: 0.8,
				type: "spring",
				damping: 8,
				duration: 0.48,
				// delay: 0.22,
				// when: "beforeChildren",
				ease: "easeIn",
			},
		},
		exiting: {
			opacity: 0,
			y: 280,
			transition: {
				ease: "easeOut",
				// duration: 0.22,
			},
		},
	};
	const [bodyActivated, setBodyActivated] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setBodyActivated(true);
		}, 800);
	});
	return (
		<Box position="relative">
			<Meta />
			<Header router={router} />
			{bodyActivated && (
				<AnimatePresence exitBeforeEnter initial={true}>
					<motion.div variants={pageAnim} key={router.route} initial="hiding" animate="showing" exit="exiting">
						{children}
					</motion.div>
				</AnimatePresence>
			)}
			{bodyActivated && (
				<AnimatePresence exitBeforeEnter initial={true}>
					<motion.div variants={pageAnim} key={router.route} initial="hiding" animate="showing" exit="exiting">
						<Footer />
					</motion.div>
				</AnimatePresence>
			)}
		</Box>
	);
};

export default PagesLayout;
