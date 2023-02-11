import React from "react";
import {
  AbsoluteCenter,
  Box,
  Flex,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { SectionCountupData } from "../../../../utils/data/data";
import CountUp from "react-countup";
import { AddIcon } from "@chakra-ui/icons";

const SectionCountup = () => {
  return (
    <Box p={"40"} w={"full"}>
      <Flex
        w={"full"}
        direction="row"
        align={"center"}
        experimental_spaceX={"40"}
        maxW={"full"}
        justify={"center"}
      >
        {" "}
        {SectionCountupData.map(({ count, icon, id, name }) => (
          <Flex
            direction={"column"}
            justify={"center"}
            suppressHydrationWarning
            experimental_spaceY={"2"}
            id={id}
          >
            <Box
              as={"div"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              w={"16"}
              h={"16"}
            >
              <Image
                src={icon}
                w={"full"}
                h={"full"}
                objectFit={"cover"}
                color={"orange.600"}
                filter={"inherit"}
              />
            </Box>
            <CountUp start={0} end={count} delay={0}>
              {({ countUpRef }) => (
                <Flex
                  direction={"row"}
                  align={"center"}
                  justify={"center"}
                  experimental_spaceX={"2"}
                  fontSize={"7xl"}
                  fontWeight={"black"}
                >
                  <span ref={countUpRef} />
                  <AddIcon fontSize={"3xl"} />
                </Flex>
              )}
            </CountUp>
            <Box
              as={"h1"}
              fontSize={"2xl"}
              fontWeight={"light"}
              letterSpacing={"wider"}
              lineHeight={"5"}
              textAlign={"center"}
            >
              {" "}
              {name}
            </Box>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default SectionCountup;
