import React from "react";
import {} from "@chakra-ui/icons";
import {} from "@chakra-ui/theme";
import { Box, Flex } from "@chakra-ui/react";
import { Header, AboutSectionOne } from "./contents";
import {
  Carousel,
  Countup,
  Galleries,
  Journals,
  Map,
  Partners,
  ProductsSelections,
  SectionCard,
  SectionFive,
  SectionFour,
  SectionTwo,
  Testimonials,
  SectionOne,
} from "../../home/contents/sections";

const AboutLayout = () => {
  return (
    <>
      <Box maxW={"full"}>
        <Flex direction={"column"} justify={"center"}>
          <Header />
          <AboutSectionOne />
          <SectionOne />
          <Countup />
          <Map />
          <Testimonials />
          <Partners />
          <Journals />
        </Flex>
      </Box>
    </>
  );
};

export default AboutLayout;
