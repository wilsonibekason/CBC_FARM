import React from "react";
import { ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  FaMicrosoft,
  FaTwitch,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { BsPlay } from "react-icons/bs";
import {} from "@chakra-ui/theme";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Stack,
  Text,
  shouldForwardProp,
  ContainerProps,
  Container,
  TableContainer,
  chakra,
  ChakraBaseProvider,
} from "@chakra-ui/react";
import { icons } from "../../../../assets/images";
import { motion, isValidMotionProp } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const SectionFour = () => {
  // Initialise AOS
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Box py={"40"}>
      <Flex direction={"column"} justify={"center"} experimental_spaceY={"20"}>
        <Flex direction={"column"} alignItems={"center"} justify={"center"}>
          <Box w={"16"} h={"16"}>
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
        {/*  */}
        <Flex
          direction={"row"}
          align={"center"}
          justify={"center"}
          w={"full"}
          experimental_spaceX={10}
        >
          <Flex
            w={"full"}
            maxW={"50%"}
            direction={"column"}
            justify={"center"}
            experimental_spaceY={"10"}
          >
            {/*  */}
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
            {/*  */}
            <Text
              as={"div"}
              fontSize={"4xl"}
              fontWeight={"normal"}
              data-aos={"fade-in-bottom"}
            >
              Provide You The Highest Quality Product That Meets Your
              Expectation
            </Text>
            <Stack direction={"row"} gap={4} data-aos={"zoom-in-left"}>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={"blue"}
                variant={"outline"}
                py={"8"}
                fontSize={"xl"}
                fontWeight={"light"}
                letterSpacing={"wider"}
              >
                About Agrilsoil
              </Button>
              {/*  */}
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={"red"}
                variant={"solid"}
                py={"8"}
                fontSize={"xl"}
                fontWeight={"semibold"}
                letterSpacing={"wider"}
                color={"white"}
              >
                About Agrilsoil
              </Button>
            </Stack>
          </Flex>
          {/*  */}
          <Box
            w={"full"}
            maxW={"50%"}
            display={"flex"}
            flexDir={"row"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={6}
          >
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Flex
                  as={"div"}
                  key={i}
                  w={"full"}
                  maxW={"48%"}
                  direction={"column"}
                  justify={"center"}
                  experimental_spaceY={"8"}
                  data-aos={"zoom-in-right"}
                >
                  <Box h={"250px"} w={"full"}>
                    <Image
                      src={icons.imageBg}
                      maxW={"full"}
                      w={"full"}
                      h={"full"}
                      objectFit={"cover"}
                      rounded={"xl"}
                      cursor={"pointer"}
                    />
                  </Box>
                  <Flex
                    direction={"row"}
                    justify={"space-between"}
                    align={"center"}
                  >
                    <Flex
                      direction={"column"}
                      justify={"center"}
                      fontSize={"md"}
                      fontWeight={"semibold"}
                      letterSpacing={"widest"}
                    >
                      <Text color={"green.400"}>Wilson Ibekason</Text>
                      <Text>Project Manager</Text>
                    </Flex>
                    {/* social */}
                    <Flex
                      direction={"row"}
                      align={"center"}
                      experimental_spaceX={"3"}
                      fontSize={"xl"}
                    >
                      <FaTwitter />
                      <FaFacebook />
                      <FaInstagram />
                    </Flex>
                  </Flex>
                </Flex>
              ))}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SectionFour;
