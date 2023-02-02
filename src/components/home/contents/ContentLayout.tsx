import { Box } from "@chakra-ui/react";
import React from "react";
import SectionCards from "./sections/SectionCards";
import { SectionOne } from "./sections";

const ContentLayout = () => {
  return (
    <>
      <Box maxW={"full"} flexDir={"column"} display={"flex"} w={"full"}>
        <SectionCards />
        <SectionOne />
      </Box>
    </>
  );
};

export default ContentLayout;
