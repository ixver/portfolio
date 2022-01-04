import React from "react";

import {Heading} from "@chakra-ui/react";

export const ShowcaseHeading = ({children}) => {
	return (
		<Heading fontFamily="poppins.800" mb={11}>
			{children}
		</Heading>
	);
};
