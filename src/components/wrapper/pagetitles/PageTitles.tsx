import { rest } from "lodash";
import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const PageTitles = forwardRef<
  HTMLDivElement,
  DetailedHTMLProps<
    InputHTMLAttributes<HTMLDivElement> & {
      PageMessage?: string | "About" | "Contact" | "Services";
    },
    HTMLDivElement
  >
>(({ PageMessage, className, ...rest }) => {
  return (
    <Box w={"full"} position={"relative"}>
      <Flex
        bgImage={
          "https://demo.7iquid.com/agrisoil/wp-content/uploads/2022/07/page-title-bg-1.jpg"
        }
        bgPos={"center center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        py={"36"}
        direction={"column"}
        justify={"center"}
        textColor={"white"}
        fontSize={"lg"}
        fontWeight={"thin"}
      >
        <Text fontWeight={"Mulish"} pl={5} fontSize={"6xl"}>
          {PageMessage}
        </Text>
        {/*Page Route Containers */}
        <Box
          position={"absolute"}
          px={5}
          py={3}
          bottom={10}
          left={10}
          bgColor={"#ee2c82"}
        >
          <Flex
            direction={"row"}
            align={"center"}
            experimental_spaceX={5}
            fontWeight={"light"}
          >
            <Text fontWeight={"thin"}>Home</Text>
            <ChevronRightIcon />
            <Text fontWeight={"thin"}>hello</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
});

export default PageTitles;
