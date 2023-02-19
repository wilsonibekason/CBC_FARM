import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../footer/Navbar";
import Footer from "../Footers/Footer";
import { Carousel } from "../../home/contents/sections";
interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Box bgColor={"whiteAlpha.300"} fontFamily={"Rubik"}>
        <Navbar />
        <Box
        // m={{ base: "0px", xl: "auto" }}
        // maxW={{ md: "full", xl: "1280px" }}
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Wrapper;
