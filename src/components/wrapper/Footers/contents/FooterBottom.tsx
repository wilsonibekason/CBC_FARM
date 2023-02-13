import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const FooterBottom = () => {
  return (
    <>
      <Box bgColor={"orange"} w={"full"} p={10}>
        <Flex align={"center"} justify={"center"}>
          <Text as={"span"} display={"flex"}>
            Copywrite by wilson Ibekason
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default FooterBottom;
