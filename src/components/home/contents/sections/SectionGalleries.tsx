import React from "react";
import {
  Box,
  BoxProps,
  Flex,
  Heading,
  HeadingProps,
  FlexProps,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { icons } from "../../../../assets/images";
import { GalleryCategoryData } from "../../../../utils/data/data";

const SectionGalleries = () => {
  return (
    <>
      <Box w={"full"} p={"40"}>
        <Flex
          direction={"column"}
          justify={"center"}
          experimental_spaceY={"20"}
        >
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Box w={"16"} h={"16"}>
              <Image
                src={icons.icon1}
                w={"full"}
                maxW={"full"}
                h={"full"}
                maxH={"full"}
              />
            </Box>
            <Text
              as={"h1"}
              textTransform={"capitalize"}
              fontSize={"7xl"}
              whiteSpace={"nowrap"}
              zIndex={"sticky"}
              display={"flex"}
              className={"z-[999]"}
              fontFamily={"Rubik"}
            >
              What we{" "}
              <Text as={"span"} color={"blackAlpha.600"} pl={"5"}>
                {" "}
                {"   "} Offer
              </Text>
            </Text>
            <Text
              as={"h1"}
              textTransform={"capitalize"}
              fontSize={"7xl"}
              whiteSpace={"nowrap"}
              zIndex={"sticky"}
              display={"flex"}
              className={"z-[999]"}
              fontFamily={"Rubik"}
              color={"blackAlpha.900"}
            >
              our recent project
            </Text>
            {/*  */}
            <Flex
              direction={"row"}
              justify={"center"}
              align={"center"}
              mt={"8"}
            >
              {" "}
              {GalleryCategoryData.map(({ id, name }) => (
                <Box
                  display={"flex"}
                  key={id}
                  fontSize={"xl"}
                  letterSpacing={"wider"}
                  experimental_spaceX={"5"}
                  fontWeight={"medium"}
                  textTransform={"capitalize"}
                >
                  <Box />
                  <Text cursor={"pointer"}>{name}</Text>
                </Box>
              ))}
            </Flex>
          </Flex>
          {/* Gallary Components */}
          <Flex flexWrap={"wrap"} direction={"row"} align={"center"}>
            {" "}
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Flex
                  direction={"row"}
                  key={i}
                  w={"full"}
                  maxW={"33%"}
                  role={"group"}
                >
                  <Flex></Flex>
                </Flex>
              ))}
          </Flex>
          {/* Gallary Components */}
        </Flex>
      </Box>
    </>
  );
};

export default SectionGalleries;
