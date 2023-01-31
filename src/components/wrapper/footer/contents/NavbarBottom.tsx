import * as React from "react";
import { Accordion, Text, Box, Button } from "@chakra-ui/react";
import { RxThickArrowDown } from "react-icons/rx";
import MainButton from "../../../../hooks/button/ButtonGeneric";
import { ButtonHTMLAttributes } from "react";
import { FiSearch } from "react-icons/fi";

const NavbarBottom = () => {
  const ButtonRef = React.useRef<HTMLButtonElement>();
  return (
    <>
      <Box paddingX={"6"}>
        <Box
          paddingX={"10"}
          paddingY={"5"}
          bgColor={"blackAlpha.800"}
          rounded={"md"}
          display={["flex", "-ms-flexbox"]}
          flexDir={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} flexDirection={["row"]} alignItems={"center"}>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Box
                  display={"flex"}
                  flexDir={"row"}
                  alignItems={"center"}
                  key={i}
                  textTransform={"capitalize"}
                  color={"white"}
                  fontFamily={"monospace"}
                  experimental_spaceX={"2"}
                  pr={"10"}
                >
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    Projects
                  </Text>
                  <RxThickArrowDown size={15} fontWeight={"bold"} />
                </Box>
              ))}
          </Box>
          <Box
            display={["-webkit-flex", "flex"]}
            experimental_spaceX={"6"}
            flexDir={["row"]}
            alignItems={"center"}
          >
            <FiSearch size={30} color={"white"} />
            <MainButton
              // @ts-ignore
              ref={ButtonRef as ButtonHTMLAttributes<HTMLButtonElement>}
              className={"backdrop-brightness-75 bg-orange-400 "}
            >
              Request a Quote
            </MainButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavbarBottom;
