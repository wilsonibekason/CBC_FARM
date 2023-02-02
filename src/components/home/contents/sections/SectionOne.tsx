import { Box, Container, Image, ImageProps, Text } from "@chakra-ui/react";
import React from "react";
import { Global } from "../../../../styles/themes/themes.global";
import { icons } from "../../../../assets/images";
import { SectionOneData } from "../../../../utils/data/data";

const SectionOne = () => {
  const { NavPadY } = Global.GlobalValues;
  return (
    // <Container w={"full"}>
    <Box maxW={"full"} px={NavPadY} py={"50"} w={"full"}>
      <Box
        w={"full"}
        display={"flex"}
        flexDirection={"row"}
        alignContent={"center"}
        alignItems={"baseline"}
      >
        <Box maxW={"20%"} w={"20%"} position={"relative"} top={"0"}>
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
            />
            <Box as={"div"} lineHeight={"10"}>
              {SectionOneData[0].header.map(({ title, span }) => (
                <Text as={"h1"} textTransform={"capitalize"} fontSize={"2xl"}>
                  {title} <Text>{span}</Text>
                </Text>
              ))}
            </Box>
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
          </Box>
        </Box>
        <Box maxW={"20%"}></Box>
      </Box>
    </Box>
    // </Container>
  );
};

export default SectionOne;
