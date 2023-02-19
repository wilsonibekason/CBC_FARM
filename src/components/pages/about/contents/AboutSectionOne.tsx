import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Button,
  Divider,
  Center,
  chakra,
  shouldForwardProp,
  ButtonGroup,
} from "@chakra-ui/react";
import TextHeadLine from "../../../common/textheadline/TextHeadLine";
import { ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { icons } from "../../../../assets/images";
import { isValidMotionProp, motion } from "framer-motion";
import { BsPlay } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const AboutSectionOne = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Box w={"full"}>
        <Flex
          direction={"column"}
          justify={"center"}
          bgImage={
            "https://demo.7iquid.com/agrisoil/wp-content/uploads/2022/10/about-us-bg-1.jpg"
          }
          bgSize={"cover"}
          opacity={"0.8"}
          filter={"grayscale(80%)"}
          py={20}
        >
          <Flex
            direction={"row"}
            justify={"space-between"}
            align={"center"}
            fontSize={"xl"}
          >
            <TextHeadLine />
            <Button
              vocab="105"
              rightIcon={<ChevronRightIcon />}
              px={"10"}
              py={"8"}
            >
              Learn More
            </Button>
          </Flex>
          {/* Second  */}
          <Flex
            direction={"row"}
            align={"center"}
            justify={"center"}
            flexWrap={"wrap"}
            w={"full"}
            gap={3}
          >
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Flex
                  w={"full"}
                  maxW={"32%"}
                  direction={"column"}
                  justify={"center"}
                  p={10}
                  bgColor={"white"}
                  rounded={"md"}
                  experimental_spaceY={"5"}
                  shadow={"2xl"}
                  position={"relative"}
                >
                  <Flex
                    direction={"row"}
                    justify={"space-between"}
                    align={"center"}
                    w={"full"}
                  >
                    <Box w={"40"} h={"40"} maxW={"full"}>
                      <Image
                        w={"full"}
                        maxW={"full"}
                        objectFit={"contain"}
                        h={"full"}
                        src={icons.icon2}
                      />
                    </Box>
                    {/*  */}
                    <Divider maxW={"50%"} />
                    <Text
                      fontSize={"6xl"}
                      color={"blackAlpha.300"}
                      fontWeight={"semibold"}
                    >
                      02
                    </Text>
                  </Flex>
                  <Text className="heading__text">AGRICUTURE</Text>
                  <Text className="heading__text border " fontWeight={"thin"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, odit?
                  </Text>
                  <Box
                    as={"section"}
                    pos={"absolute"}
                    maxW={"16"}
                    maxH={"16"}
                    w={"full"}
                    h={"full"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    bgColor={"orange.400"}
                    rounded={"full"}
                    bottom={"-8"}
                    left={"80%"}
                    shadow={"2xl"}
                    zIndex={"999"}
                  >
                    <ArrowRightIcon />{" "}
                  </Box>
                </Flex>
              ))}
          </Flex>
          {/*  */}
          <Center py={10} px={5}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
              py={60}
              bgImage={icons.imageBg}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize={"cover"}
              mb={2}
              cursor={"pointer"}
              opacity={20}
              _hover={{ brightness: "40%", filter: "grayscale(60%)" }}
              data-aos={"fade-in-left"}
              rounded={"2xl"}
              shadow={"xl"}
            >
              <ButtonGroup
                gap="4"
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <ChakraBox
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}
                  // @ts-ignore no problem in operation, although type error appears.
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  padding="2"
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="50px"
                  height="50px"
                >
                  <BsPlay color="white" size={20} />
                </ChakraBox>
              </ButtonGroup>
            </Box>
          </Center>
        </Flex>
      </Box>
    </>
  );
};

export default AboutSectionOne;
