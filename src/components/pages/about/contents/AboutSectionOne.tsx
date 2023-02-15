import React from "react";
import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import TextHeadLine from "../../../common/textheadline/TextHeadLine";

const AboutSectionOne = () => {
  return (
    <>
      <Box w={"full"}>
        <Flex
          direction={"column"}
          justify={"center"}
          bgImage={
            "https://demo.7iquid.com/agrisoil/wp-content/uploads/2022/10/about-us-bg-1.jpg"
          }
          bgSize={"cover"}
          py={20}
        >
          <TextHeadLine />
        </Flex>
      </Box>
    </>
  );
};

export default AboutSectionOne;
