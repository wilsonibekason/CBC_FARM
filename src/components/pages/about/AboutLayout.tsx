import React from "react";
import {} from "@chakra-ui/icons";
import {} from "@chakra-ui/theme";
import { Box, Flex } from "@chakra-ui/react";
import { Header, AboutSectionOne, Teams } from "./contents";
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
import { PageResponsive } from "../../export";

const AboutLayout = () => {
  return (
    <>
      <PageResponsive Component={<Header />}>
        <Box maxW={"full"}>
          <Flex direction={"column"} justify={"center"}>
            <AboutSectionOne />
            <Teams />
            <SectionOne />
            <Countup />
            <Map />
            <Testimonials />
            <Partners />
            <Journals />
          </Flex>
        </Box>
      </PageResponsive>
    </>
  );
};

export default AboutLayout;
