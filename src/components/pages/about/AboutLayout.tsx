import React from "react";
import {} from "@chakra-ui/icons";
import {} from "@chakra-ui/theme";
import { Box, Flex } from "@chakra-ui/react";
import { Header, SectionOne } from "./contents";

const AboutLayout = () => {
  return (
    <>
      <Box maxW={"full"}>
        <Flex direction={"column"} justify={"center"}>
          <Header />
          <SectionOne />
        </Flex>
      </Box>
    </>
  );
};

export default AboutLayout;
