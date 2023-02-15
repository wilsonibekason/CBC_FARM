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
  Journals,
} from "./sections";
import Footer from "../../wrapper/Footers/Footer";

const ContentLayout = () => {
  return (
    <>
      <Box maxW={"full"} flexDir={"column"} display={"flex"} w={"full"}>
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
        <Journals />
      </Box>
    </>
  );
};

export default ContentLayout;
