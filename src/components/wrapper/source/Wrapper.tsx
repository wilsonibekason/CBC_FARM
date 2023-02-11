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
        {children}
      </Box>
    </>
  );
};

export default Wrapper;
