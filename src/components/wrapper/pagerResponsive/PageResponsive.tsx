import { Box } from "@chakra-ui/react";
import React from "react";

interface PageResponsive {
  Component?: JSX.Element | React.ReactNode;
  children: React.ReactNode;
}

const PageResponsive: React.FunctionComponent<PageResponsive> = ({
  Component,
  children,
}) => {
  return (
    <>
      {Component}
      <Box m={{ base: "0px", xl: "auto" }} maxW={{ md: "full", xl: "1280px" }}>
        {children}
      </Box>
    </>
  );
};

export default PageResponsive;
