import { Box } from "@chakra-ui/react";
import React from "react";
import SectionCards from "./sections/SectionCards";
import {
  SectionOne,
  SectionTwo,
  ProductsSelections,
  Countup,
  SectionFour,
  SectionFive,
  Galleries,
  Carousel,
  Map,
  Testimonials,
  Partners,
} from "./sections";

const ContentLayout = () => {
  return (
    <>
      <Box
        maxW={"full"}
        flexDir={"column"}
        display={"flex"}
        w={"full"}
        fontFamily={"Rubik"}
      >
        <Carousel />
        <SectionCards />
        <SectionOne />
        <SectionTwo />
        <ProductsSelections />
        <Countup />
        <SectionFour />
        <SectionFive />
        <Galleries />
        <Map />
        <Testimonials />
        <Partners />
      </Box>
    </>
  );
};

export default ContentLayout;
