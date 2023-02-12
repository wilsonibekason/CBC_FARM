import {
  Container,
  Box,
  Text,
  Flex,
  Spacer,
  Grid,
  Circle,
  SkeletonCircle,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { icons } from "../../../../assets/images";
import { Global } from "../../../../styles/themes/themes.global";

const SectionCards = () => {
  const { NavPadY } = Global.GlobalValues;
  return (
    <>
      {/* <Container> */}
      <Box px={NavPadY}>
        <Box
          w={"full"}
          h={"auto"}
          display={"flex"}
          flexDir={"column"}
          experimental_spaceY={"10"}
        >
          {" "}
          <Box
            w={["full"]}
            display={"flex"}
            itemScope
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box
              as={"div"}
              w={["-webkit-max-content", "500px"]}
              h={"80px"}
              bgColor={"gray.100 "}
              borderBottomEndRadius={"xl"}
              borderBottomStartRadius={"xl"}
              shadow={"dark-sm"}
            ></Box>
          </Box>
          {/*  */}
          <Box w={"full"}>
            <Text
              as={"h1"}
              fontSize={"7xl"}
              width={"full"}
              textAlign={"center"}
              textColor={"gray.600"}
              fontFamily={["SproDisplay", "monospace", "Mulish"]}
            >
              Farming for Today and the Future
            </Text>
          </Box>
          {/*  */}
          <Box
            w={"full"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {/* <Grid templateColumns="repeat(5, 1fr)" gap={10}> */}
            <Flex
              direction={"row"}
              align={"center"}
              justify={"center"}
              wrap={"wrap"}
              columnGap={3}
            >
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Box
                    w={"full"}
                    maxW="18%"
                    h="auto"
                    bg="gray.300"
                    key={i}
                    role={"group"}
                    cursor={"pointer"}
                    borderRadius={"xl"}
                  >
                    <Box
                      px={"20"}
                      py={16}
                      bgSize={"100% 100%"}
                      transition={"background 3s"}
                      borderRadius={"inherit"}
                      _groupHover={{
                        bgColor: "red.500",
                        borderRadius: "inherit",
                        bgGradient: "linear(to-l, #7928CA, #FF0080)",
                        backgroundPosition: "100% 100%",
                      }}
                      shadow={"xl"}
                    >
                      <Box
                        w={"full"}
                        h={"full"}
                        display={"flex"}
                        flexDir={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        experimental_spaceY={"2"}
                      >
                        <SkeletonCircle size={"20"} />
                        <Box
                          as={"section"}
                          w={100}
                          h={100}
                          bgColor={"white"}
                          rounded={"full"}
                        >
                          <Image
                            src={icons.icon2}
                            w={"full"}
                            maxW={"full"}
                            h={"full"}
                            top={"-10%"}
                          />
                        </Box>

                        <Text
                          as={"h1"}
                          fontSize={"xl"}
                          fontWeight={"semibold"}
                          textAlign={"center"}
                          fontFamily={"Mulish"}
                          color={"gray.800"}
                        >
                          Smart Irrigations
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                ))}
              {/* </Grid> */}
            </Flex>
          </Box>
          {/*  */}
        </Box>
      </Box>
      {/* </Container> */}
    </>
  );
};

export default SectionCards;
