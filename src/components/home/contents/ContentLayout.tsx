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
  Galleries
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
        <SectionCards />
        <SectionOne />
        <SectionTwo />
        <ProductsSelections />
        <Countup />
        <SectionFour />
        <SectionFive />
        <Galleries/>
      </Box>
    </>
  );
};

export default ContentLayout;
