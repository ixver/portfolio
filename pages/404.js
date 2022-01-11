import NextLink from "next/link";
import {Box, Heading, Text, Container, Flex, Button, Divider} from "@chakra-ui/react";

const NotFound = () => {
	return (
		<Container maxW="container.xl">
			<Flex direction={["column"]} w="100%" minH="19.6rem" py="2.8rem">
				<Box w="100%" h="100%">
					<Heading as="h3" mb="1.4rem">
						Not found
					</Heading>
					<Text mb="1.4rem">The page you&apos;re looking for was not found.</Text>
				</Box>

				<Flex my={6} justify="center">
					<NextLink href="/">
						<Button colorScheme="black">Go Back</Button>
					</NextLink>
				</Flex>
			</Flex>
		</Container>
	);
};

export default NotFound;
