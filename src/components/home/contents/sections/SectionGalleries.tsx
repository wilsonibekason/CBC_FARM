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
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { icons } from "../../../../assets/images";
import { GalleryCategoryData } from "../../../../utils/data/data";
import { ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons";

const SectionGalleries = () => {
  // arr.slice(0, 1).shift();
  return (
    <>
      <Box w={"full"} py={"40"}>
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
              {GalleryCategoryData.map(({ id, name }) => {
                const [first] = GalleryCategoryData;
                return (
                  <Box
                    display={"flex"}
                    key={id}
                    fontSize={"md"}
                    letterSpacing={"wider"}
                    experimental_spaceX={"5"}
                    fontWeight={"semibold"}
                    textTransform={"capitalize"}
                  >
                    {/* {first && <Box>/</Box>} */}
                    <Box />
                    <Text
                      cursor={"pointer"}
                      _hover={{ color: "green.500" }}
                      transition={{
                        ease: "easeInOut",
                        duration: "100",
                        delay: "300",
                      }}
                    >
                      {name}
                    </Text>
                  </Box>
                );
              })}
            </Flex>
          </Flex>
          {/* Gallary Components */}
          <Flex flexWrap={"wrap"} direction={"row"} align={"center"} gap={3}>
            {" "}
            56
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Flex
                  as={"article"}
                  direction={"row"}
                  key={i}
                  w={"full"}
                  maxW={"32%"}
                  role={"group"}
                  h={"300px"}
                  cursor={"pointer"}
                  pos={"relative"}
                  transition={"ease"}
                  transitionDuration={"1000"}
                  transitionDelay={"500"}
                >
                  <Flex
                    backgroundImage={icons.agri1}
                    bgRepeat={"no-repeat"}
                    bgSize={"cover"}
                    backdropBlur={"2xl"}
                    filter={"grayscale(10%)"}
                    // py={20}
                    h={"full"}
                    bgPos={"center"}
                    w={"full"}
                    rounded={"md"}
                    _groupHover={{
                      brightness: "50%",
                      filter: "grayscale(80%)",
                    }}
                  >
                    <Flex
                      p={"4"}
                      direction={"row"}
                      align={"center"}
                      justifyContent={"space-between"}
                      pos={"absolute"}
                      w={"full"}
                      bottom={0}
                      brightness={"40%"}
                      visibility={"hidden"}
                      filter={"orangescale(90%)"}
                      _groupHover={{ visibility: "visible" }}
                    >
                      <Text
                        fontSize={"xl"}
                        fontWeight={"medium"}
                        color={"white"}
                        letterSpacing={"wider"}
                        lineHeight={"5"}
                        textTransform={"capitalize"}
                      >
                        ecological Farming
                      </Text>

                      <Box>
                        <ArrowRightIcon color={"white"} />
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
          </Flex>
          {/* Button */}
          <Flex direction={"row"} align={"center"} justify={"center"}>
            <ButtonGroup>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={"blue"}
                variant={"outline"}
                py={"8"}
                fontSize={"xl"}
                fontWeight={"light"}
                letterSpacing={"wider"}
              >
                View Our Galleries
              </Button>
            </ButtonGroup>
          </Flex>
          {/* Gallary Components */}
        </Flex>
      </Box>
    </>
  );
};

export default SectionGalleries;
