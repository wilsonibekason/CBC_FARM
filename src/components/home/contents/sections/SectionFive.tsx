import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import {
  motion,
  motionValue,
  MotionAdvancedProps,
  isValidMotionProp,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import {} from "@chakra-ui/theme";
import { icons } from "../../../../assets/images";
import { BsPlay, BsTelephoneOutbound } from "react-icons/bs";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const SectionFive = () => {
  return (
    <Box py={20} maxW={"full"}>
      <Box
        as={"div"}
        bgImage={icons.forest}
        bgPos={"center"}
        w={"full"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        py={40}
        filter="grayscale(80%)"
        // blur="2px"
        // brightness="40%"
      >
        <Flex align={"center"}>
          {/* Component One */}
          <Flex direction={"column"} justify={"center"} w={"full"} maxW={"50%"}>
            {" "}
            <Flex
              direction={"column"}
              justify={"center"}
              experimental_spaceY={"10"}
            >
              <Box w={"20"} h={"20"}>
                <Image
                  src={icons.icon1}
                  w={"full"}
                  maxW={"full"}
                  h={"full"}
                  maxH={"full"}
                />
              </Box>{" "}
              <Text
                as={"h1"}
                textTransform={"capitalize"}
                fontSize={"7xl"}
                zIndex={"sticky"}
                className={"z-[999]"}
                fontFamily={"Rubik"}
                maxW={"50%"}
                w={"50%"}
                letterSpacing={"tight"}
                lineHeight={"short"}
              >
                FAQ'S, Have{" "}
                <Text
                  as={"span"}
                  color={"blackAlpha.600"}
                  pl={"5"}
                  wordBreak={"break-all"}
                  w={"full"}
                >
                  Questions?
                </Text>
              </Text>
              {/*  */}
              <Accordion suppressHydrationWarning experimental_spaceY={"5"}>
                {Array(5)
                  .fill(0)
                  .map((_, id) => (
                    <AccordionItem
                      bgColor={"white"}
                      color={"gray.800"}
                      fontSize={"xl"}
                      key={id}
                    >
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Section 1 title
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        borderTop={"2px"}
                        borderTopColor={"gray.500"}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
              </Accordion>
            </Flex>
          </Flex>
          {/* Component Two */}
          <Flex w={"full"} maxW={"50%"} position={"relative"}>
            <Flex
              position={"absolute"}
              py={"10"}
              px={"10"}
              direction={"row"}
              align={"center"}
              bgColor={"orange.800"}
              right={"0px"}
              top={"80"}
              experimental_spaceX={"5"}
              rounded={"3xl"}
            >
              <ChakraBox
                animate={{
                  scale: [1, 1.2, 1.5, 1, 1],
                  rotate: [0, 0, 180, 360, 0],
                  borderRadius: ["20%", "30%", "50%", "50%", "80%"],
                }}
                // @ts-ignore
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                w={"20"}
                h={"20"}
                display={"flex"}
                flexDir={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                border={"1px solid gray.200"}
                fontSize={"2xl"}
                rounded={"full"}
                bgGradient={"linear(to-r, #494583, #585848)"}
              >
                <BsTelephoneOutbound color={"gray.800"} />
              </ChakraBox>

              {/*  */}
              <Flex
                direction={"column"}
                justify={"center"}
                fontSize={"xl"}
                fontWeight={"normal"}
                letterSpacing={"wider"}
              >
                <Text> If you have an Emergency </Text>
                <Text>Call +234 9129183849</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default SectionFive;
