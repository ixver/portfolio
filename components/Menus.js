import NextLink from "next/link";
import {useRouter} from "next/router";

import {Container, Box, Spacer, Flex} from "@chakra-ui/react";

import AuthViews from "./AuthViews";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import ThemeToggleButton from "./ThemeToggleButton";

const BaseNav = () => {
	const router = useRouter();

	return (
		<Box py={4}>
			<Container maxW="container.lg">
				<Flex direction={["row"]} align="center">
					<NextLink href="/">GO BACK TO PORTFOLIO</NextLink>
					<Spacer flex={1} />
					<AuthViews LoggedIn={<LogoutButton />} LoggedOut={<LoginButton />} />

					<ThemeToggleButton />
				</Flex>
			</Container>
		</Box>
	);
};

export default BaseNav;
