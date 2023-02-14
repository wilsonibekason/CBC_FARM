import { Box, Container } from "@chakra-ui/react";
import React from "react";
import ContentLayout from "./contents/ContentLayout";

const HomeLayout = () => {
  return (
    <>
      <Container w={"full"} maxW={"full"}>
        <Box w={"full"} display={"flex"} flexDir={"column"}>
          <ContentLayout />
        </Box>
      </Container>
    </>
  );
};

export default HomeLayout;
