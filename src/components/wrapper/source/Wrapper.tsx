import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../footer/Navbar";
interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Box bgColor={"whiteAlpha.300"}>
        <Navbar />
        <Box m={"auto"} maxW={"1280px"}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Wrapper;
