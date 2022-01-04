import {Container, Box} from "@chakra-ui/react";

import WorksSection from "../components/portfolio/WorksSection";

export default function Home() {
	return (
		<Box pt="6rem">
			<Container maxW="container.xl">
				<WorksSection />
			</Container>
		</Box>
	);
}
