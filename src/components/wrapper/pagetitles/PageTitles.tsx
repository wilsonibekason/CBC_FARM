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
    InputHTMLAttributes<HTMLDivElement> & { PageMessage?: string },
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
        py={"56"}
        direction={"column"}
        justify={"center"}
      >
        <Text>{PageMessage}</Text>
        {/*Page Route Containers */}
        <Box position={"absolute"} p={5} bottom={10} left={10} bgColor={"red"}>
          <Flex direction={"row"} align={"center"} experimental_spaceX={10}>
            <Text>Home</Text>
            <ChevronRightIcon />
            <Text>hello</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
});

export default PageTitles;
