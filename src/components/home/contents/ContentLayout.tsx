import { Box } from "@chakra-ui/react";
import React from "react";
import SectionCards from "./sections/SectionCards";

const ContentLayout = () => {
  return (
    <>
      <Box maxW={"full"} flexDir={"column"} display={"flex"}>
        <SectionCards />
      </Box>
    </>
  );
};

export default ContentLayout;