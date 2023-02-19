import { Box, Container, Image, ImageProps, Text } from "@chakra-ui/react";
import React from "react";
import { Global } from "../../../../styles/themes/themes.global";
import { icons } from "../../../../assets/images";
import { SectionOneData } from "../../../../utils/data/data";
import AOS from "aos";

const SectionOne = () => {
  const { NavPadY } = Global.GlobalValues;
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    // <Container w={"full"}>
    <Box
      maxW={"full"}
      px={NavPadY}
      py={20}
      w={"full"}
      className={"group group-hover:bg-red-500 text-red"}
      position={"relative"}
      fontFamily={"Rubik"}
    >
      <Box
        w={"full"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        experimental_spaceX={"10"}
      >
        <Box maxW={"20%"} w={"20%"} top={"80"} mb={"96"}>
          <Box
            w={"full"}
            display={"flex"}
            flexDir={"column"}
            experimental_spaceY={"10"}
          >
            <Image
              src={icons.icon1}
              alt={"image_logo"}
              w={"20"}
              h={"20"}
              display={"flex"}
              rounded={"lg"}
              color={"orange.500"}
              filter={"initial"}
            />
            <Box
              as={"div"}
              lineHeight={"10"}
              whiteSpace={["-moz-pre-wrap", "nowrap"]}
              display={"flex"}
              flexDir={"column"}
              experimental_spaceY={"10"}
              data-aos={"zoom-in-bottom"}
            >
              {SectionOneData[0].header.map(({ title, span }) => (
                <Text
                  as={"h1"}
                  textTransform={"capitalize"}
                  fontSize={"7xl"}
                  whiteSpace={"nowrap"}
                  zIndex={"sticky"}
                  display={"flex"}
                  className={"z-[999]"}
                  experimental_spaceX={"10"}
                  pr={"10"}
                  fontFamily={"Rubik"}
                >
                  {title}{" "}
                  <Text pl={"5"} fontWeight={"bold"}>
                    {span}
                  </Text>
                </Text>
              ))}
            </Box>
            {/*  */}
            <Text
              textColor={"orange.600"}
              fontSize={"2xl"}
              whiteSpace={"break-spaces"}
              letterSpacing={"2"}
              fontWeight={"medium"}
              fontFamily={"Rubik"}
            >
              We have 30 years of agriculture & eco farming experience globaly,
              work with professionals
            </Text>
          </Box>
        </Box>
        <Box maxW={"60%"} w={"60%"}>
          <Box
            w={"full"}
            display={"flex"}
            flexDir={"column"}
            experimental_spaceY={"10"}
          >
            <Box w={"full"} h={"500px"}>
              <Image
                src={icons.imageBg}
                alt={"image_logo"}
                maxW={"full"}
                w={"full"}
                h={"full"}
              />
            </Box>

            {/*  */}
            <Text
              fontSize={"xl"}
              color={"gray.600"}
              letterSpacing={"wide"}
              maxW={["container.lg", "70%"]}
              fontFamily={"Rubik"}
            >
              We only grow the best organic and agriculture products in our
              farms. Our market-style CSA lets you choose the fruits, veggies,
              and produce you want!
            </Text>
          </Box>
        </Box>
        <Box
          maxW={"20%"}
          w={"full"}
          mt={"40"}
          ml={"-80"}
          bottom={"0.5"}
          position={"relative"}
        >
          <Box
            w={"full"}
            position={"absolute"}
            right={"20"}
            bgColor={"gray.700"}
            rounded={"20"}
            zIndex={"99"}
          >
            <Box w={"full"} display={"flex"} flexDir={"column"}>
              {/* Body UI */}
              <Box
                px={"5"}
                py={"5"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                position={"relative"}
              >
                {/* image */}
                <Box w={"20"} h={"20"}>
                  <Image
                    src={icons.icon1}
                    alt={"Icons Alternative Button"}
                    maxW={"full"}
                    w={"full"}
                    h="full"
                  ></Image>
                </Box>

                {/* Content */}
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  color={"white"}
                  alignItems={"center"}
                  fontWeight={"semibold"}
                >
                  <Text whiteSpace={"nowrap"} fontSize={"xl"}>
                    Fresh Product
                  </Text>
                  <Text fontSize={"6xl"}>2750</Text>
                </Box>
              </Box>
              {/* Button UI */}
              <Box
                p={"5"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDir={"row"}
                bgColor={"orange.500"}
              >
                <Text fontSize={"2xl"}>View Product</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    // </Container>
  );
};

export default SectionOne;
