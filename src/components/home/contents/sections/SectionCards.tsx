import { Container, Box } from "@chakra-ui/react";
import React from "react";
import { Global } from "../../../../styles/themes/themes.global";

const SectionCards = () => {
  const { NavPadY } = Global.GlobalValues;
  return (
    <>
      <Container>
        <Box px={NavPadY}>
          <Box w={"full"} h={"auto"} display={"flex"} flexDir={"column"}>
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
                w={["-webkit-max-content", "400px"]}
                h={"60px"}
                bgColor={"gray.400 "}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SectionCards;
