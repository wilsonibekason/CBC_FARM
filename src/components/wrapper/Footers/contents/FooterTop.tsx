import React from "react";
import {
  Box,
  Flex,
  Text,
  InputAddonProps,
  InputAddon,
  InputElementProps,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  HStack,
  PinInput,
  PinInputField,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import { icons } from "../../../../assets/images";
import { CheckIcon } from "@chakra-ui/icons";
import { SocialIcons } from "../../../../utils/data/data";

const FooterTop = () => {
  return (
    <>
      <Box maxW={"full"} bgColor={"black"} py={10} px={5}>
        <Flex direction={"row"} align={"center"}>
          {" "}
          {/* Form Container */}
          <Box w={"full"} maxW={"35%"} zIndex={"999"}>
            <Box
              bgImage={icons.imageBg}
              w={"full"}
              bgSize={"cover"}
              p={20}
              bgPos={"center"}
              bgRepeat={"no-repeat"}
              filter={"grayscale(90%)"}
              //   bg="rgba(0,0,0,0.3)"
              backdropFilter="auto"
              backdropBlur="8px"
            >
              <Flex
                direction={"column"}
                justify={"center"}
                experimental_spaceY={"20"}
              >
                <Text
                  fontSize={"5xl"}
                  letterSpacing={"tighter"}
                  lineHeight={"10"}
                >
                  Get In Touch Leave Us A Message
                </Text>
                {/*  */}
                <Flex
                  direction={"column"}
                  justify={"center"}
                  experimental_spaceY={"5"}
                >
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <InputGroup
                        key={i}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                          children="$"
                        />
                        <Input
                          placeholder="username"
                          p={7}
                          border={"2px solid white"}
                          textTransform={"capitalize"}
                          _placeholder={{
                            color: "white",
                            fontWeight: "semibold",
                          }}
                          fontSize={"xl"}
                        />
                        <InputRightElement
                          children={
                            <CheckIcon color="green.500" textAlign={"center"} />
                          }
                        />
                      </InputGroup>
                    ))}{" "}
                  <HStack>
                    <PinInput type="alphanumeric">
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>
                </Flex>
                {/*  */}
                <ButtonGroup
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Button
                    colorScheme={"orange"}
                    w={200}
                    p={7}
                    fontSize={16}
                    variant={"outline"}
                  >
                    {" "}
                    Submit
                  </Button>{" "}
                </ButtonGroup>
              </Flex>
            </Box>
          </Box>
          {/* Content Container */}
          <Box w={"full"} maxW={"65%"} bgColor={"white"}>
            <Flex w={"full"} direction={"column"} justify={"center"}>
              {" "}
              <Flex>
                {/* Logo PNG */}
                <Box
                  bgColor={"whiteAlpha.500"}
                  p={2}
                  width={"80"}
                  outline={"1px"}
                >
                  <Image
                    src={
                      "https://demo.7iquid.com/agrisoil/wp-content/uploads/2022/07/logo-1.png"
                    }
                    alt={""}
                    height={"full"}
                    width={"full"}
                    maxWidth={"full"}
                    objectFit={"cover"}
                  />
                </Box>
                {/* social icons */}
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  color={"gray.500"}
                  experimental_spaceX={"3"}
                >
                  {SocialIcons.map(({ icon, id }) => (
                    <Text
                      key={id}
                      _hover={{ color: "blue.200" }}
                      cursor={"pointer"}
                    >
                      {icon}
                    </Text>
                  ))}
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FooterTop;
