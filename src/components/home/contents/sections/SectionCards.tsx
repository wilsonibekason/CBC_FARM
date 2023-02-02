import {
  Container,
  Box,
  Text,
  Flex,
  Spacer,
  Grid,
  Circle,
  SkeletonCircle,
} from "@chakra-ui/react";
import React from "react";
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
          <Box w={"full"}>
            <Grid templateColumns="repeat(5, 1fr)" gap={10}>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Box
                    maxW="full"
                    h="auto"
                    bg="gray.300"
                    key={i}
                    px={"20"}
                    py={"28"}
                    borderRadius={"xl"}
                    shadow={"xl"}
                    _groupHover={{ color: "red" }}
                  >
                    <Box
                      w={"full"}
                      h={"full"}
                      display={"flex"}
                      flexDir={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <SkeletonCircle size={"20"} />
                      <Text
                        as={"h1"}
                        fontSize={"2xl"}
                        fontWeight={"semibold"}
                        textAlign={"center"}
                        fontFamily={"Mulish"}
                        color={"gray.800"}
                      >
                        Smart Irrigations
                      </Text>
                    </Box>
                  </Box>
                ))}
            </Grid>
          </Box>
          {/*  */}
        </Box>
      </Box>
      {/* </Container> */}
    </>
  );
};

export default SectionCards;
