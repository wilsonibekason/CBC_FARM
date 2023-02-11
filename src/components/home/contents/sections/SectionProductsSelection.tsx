import React from "react";
import {} from "@chakra-ui/icons";
import {
  Heading,
  HeadingProps,
  Textarea,
  Text,
  TextProps,
  Image,
  Box,
  BoxProps,
  Flex,
  FlexProps,
  FlexboxProps,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {} from "@chakra-ui/theme";
import {} from "@chakra-ui/theme-tools";
import { icons } from "../../../../assets/images/index";

const SectionProductsSelection = () => {
  return (
    <>
      <Box w={"full"} maxW={"full"} h={"full"} maxH={"full"}>
        <Flex
          direction={"column"}
          justify={"center"}
          suppressHydrationWarning
          experimental_spaceY={20}
        >
          {" "}
          {/* Top Component */}
          <Flex direction={"column"} alignItems={"center"} justify={"center"}>
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
              experimental_spaceX={"10"}
              fontFamily={"Rubik"}
            >
              Selections of{" "}
              <Text as={"span"} color={"blackAlpha.600"} pl={"5"}>
                {" "}
                Products
              </Text>
            </Text>
          </Flex>
          {/* Main Component */}
          <Box w={"full"}>
            <Flex
              direction={"row"}
              alignItems={"center"}
              w={"full"}
              flexWrap={"wrap"}
              rowGap={20}
              columnGap={250}
            >
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Flex
                    h={"320px"}
                    key={i}
                    bgColor={"whatsapp.100"}
                    display={"flex"}
                    position={"relative"}
                    w={"20%"}
                  >
                    {" "}
                    <Image
                      src={
                        "http://127.0.0.1:5173/src/assets/images/testimonial.jpg"
                      }
                      w={"full"}
                      h={"full"}
                      objectFit={"cover"}
                    />
                    <Box
                      py={"10"}
                      maxW={"250px"}
                      w={"full"}
                      h={"180px"}
                      position={"absolute"}
                      bg={"whiteAlpha.500"}
                      right={0}
                      zIndex={"modal"}
                      shadow={"2xl"}
                      mr={"-30"}
                      bottom={0}
                      mt={"40"}
                      alignItems={"center"}
                      display={"flex"}
                      justifyContent={"center"}
                      className={"z-[999]"}
                      bgColor={"white"}
                      rounded={"lg"}
                    >
                      <Flex
                        direction={"column"}
                        justify={"center"}
                        fontSize={"xl"}
                        color={"gray.600"}
                        letterSpacing={"wide"}
                        maxW={["container.lg", "70%"]}
                        fontFamily={"Rubik"}
                        w={"full"}
                        h={"full"}
                        experimental_spaceY={"5"}
                        rounded={"lg"}
                        py={"5"}
                      >
                        <Text>Fresh Tomatoes</Text>
                        <Text>
                          We only grow the best organic and agriculture products
                          in our farms.
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SectionProductsSelection;
