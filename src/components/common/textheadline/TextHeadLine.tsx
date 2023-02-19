import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { icons } from "../../../assets/images";
import AOS from "aos";
import Aos from "aos";
interface TextHeadLineProps {
  readonly HeadImage?: File;
  TextHead?: string;
}
const TextHeadLine: React.FC<TextHeadLineProps> = ({ HeadImage, TextHead }) => {
  React.useEffect(() => {
    Aos.init();
    Aos.refreshHard();
  }, []);
  return (
    <>
      <Flex
        direction={"column"}
        justify={"center"}
        as={"div"}
        data-aos={"fade-in-left"}
        align={"center"}
      >
        <Box w={"24"} h={"24"}>
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
    </>
  );
};
export default TextHeadLine;
