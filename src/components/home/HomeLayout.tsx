import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { PageResponsive } from "../export";
import ContentLayout from "./contents/ContentLayout";
import { Carousel } from "./contents/sections";

const HomeLayout = () => {
  return (
    <>
      <PageResponsive Component={<Carousel />}>
        <Container w={"full"} maxW={"full"}>
          <Box w={"full"} display={"flex"} flexDir={"column"}>
            <ContentLayout />
          </Box>
        </Container>
      </PageResponsive>
    </>
  );
};

export default HomeLayout;
