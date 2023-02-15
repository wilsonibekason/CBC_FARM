import React from "react";
import {} from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
interface IHomeWrapperProps {
  children: React.ReactNode;
}
const HomeWrapper: React.FC<IHomeWrapperProps> = ({ children }) => {
  return (
    <>
      <Box w={"full"}>
        <Flex direction={"column"} justify={"center"}></Flex>
      </Box>
    </>
  );
};

export default HomeWrapper;
