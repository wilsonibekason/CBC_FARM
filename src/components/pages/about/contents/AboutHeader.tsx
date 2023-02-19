import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import React from "react";
import { icons } from "../../../../assets/images";

const AboutHeader = () => {
  return (
    <>
      <Box w={"full"}>
        <Flex
          direction={"column"}
          justify={"center"}
          bgImage={
            "https://demo.7iquid.com/agrisoil/wp-content/uploads/2022/08/zig-zag-bg.png"
          }
          bgSize={"cover"}
          py={20}
        >
          <Flex direction={"column"} alignItems={"center"} justify={"center"}>
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
              data-aos="fade-left"
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
          {/*  */}
          <Flex
            direction={"row"}
            align={"center"}
            flexWrap={"wrap"}
            gap={5}
            justify={"center"}
          >
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <Flex
                  direction={"column"}
                  justify={"center"}
                  align={"center"}
                  w={"full"}
                  maxW={"49%"}
                  key={i}
                  bgImage={
                    "https://demo.7iquid.com/agrisoil/wp-content/uploads/2022/11/karsten-wurth-UbGYPMbMYP8-unsplash.jpg"
                  }
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                  py={40}
                  // filter={"grayscale(80%)"}
                  experimental_spaceY={10}
                  color={"white"}
                  letterSpacing={"wider"}
                  bgColor={"#393939"}
                  opacity={"0.6"}
                  transition={
                    "background 0.3s, border-radius 0.3s, opacity 0.3s;"
                  }
                >
                  <Heading fontWeight={"thin"}> Our Mission</Heading>
                  <Text textAlign={"center"} fontWeight={"thin"}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magni impedit et consequatur, excepturi repellendus at
                    aliquid, voluptatibus nihil iusto distinctio, expedita
                    nostrum? Reiciendis quod quas sequi quisquam, autem
                    doloribus nam.
                  </Text>
                </Flex>
              ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
export default AboutHeader;
