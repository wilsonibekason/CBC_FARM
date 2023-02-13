import React from "react";
import {} from "@chakra-ui/icons";
import {
  BorderProps,
  Box,
  BoxProps,
  Flex,
  pseudoPropNames,
  AspectRatio,
} from "@chakra-ui/react";
import {} from "@chakra-ui/theme";
import {} from "@chakra-ui/theme-tools";
import FooterTop from "./contents/FooterTop";
import FooterBottom from "./contents/FooterBottom";

const Footer = () => {
  return (
    <>
      <Box
        as={"footer"}
        maxW={"full"}
        bgColor={"blackAlpha.800"}
        w={"full"}
        bottom={0}
      >
        <Flex w={"full"} direction={"column"} justify={"center"}>
          <FooterTop />
          <FooterBottom />
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
