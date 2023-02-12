import React from "react";
import {} from "@chakra-ui/icons";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { icons } from "../../../../assets/images";

const SectionMap = () => {
  return (
    <>
      <Box py={20} maxW={"full"}>
        <Flex direction={"row"} justify={"center"} w={"full"}>
          {/* Map Description */}
          <Box
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center'"}
            w={"full"}
            maxW={"40%"}
          >
            <Box as={"a"} w={20} h={20}>
              <Image w={"full"} maxW={"full"} h={"full"} src={icons.icon1} />
            </Box>
            {/*  */}
            <Text
              as={"h1"}
              textTransform={"capitalize"}
              fontSize={"6xl"}
              whiteSpace={"nowrap"}
              zIndex={"sticky"}
              display={"flex"}
              className={"z-[999]"}
              fontFamily={"Rubik"}
            >
              What have{" "}
              <Text as={"span"} color={"blackAlpha.600"} pl={"5"}>
                {" "}
                {"   "} Global
              </Text>
            </Text>
            <Text
              as={"h1"}
              textTransform={"capitalize"}
              fontSize={"6xl"}
              whiteSpace={"nowrap"}
              zIndex={"sticky"}
              display={"flex"}
              className={"z-[999]"}
              experimental_spaceX={"10"}
              fontFamily={"Rubik"}
            >
              reach In the{" "}
              <Text as={"span"} color={"blackAlpha.600"} pl={"5"}>
                {" "}
                World
              </Text>
            </Text>{" "}
            {/*  */}
          </Box>
          {/* Main Map Component  */}
          <Flex direction={"column"} w={"full"} maxW={"60%"}></Flex>
        </Flex>
      </Box>
    </>
  );
};

export default SectionMap;
