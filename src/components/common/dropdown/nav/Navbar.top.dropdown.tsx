import { Box, Slide, SlideFade, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
interface TopDropdownProps {
  isOpen: boolean;
}
const TopDropdown: React.FC<TopDropdownProps> = ({ isOpen }) => {
  return (
    <>
      <SlideFade in={isOpen} offsetY={"20px"}>
        <Box
          position={"absolute"}
          width={"40"}
          py={"5"}
          bgColor={"gray.50"}
          shadow={"lg"}
          rounded={"lg"}
        >
          <Box
            width={"full"}
            height={"full"}
            display={"inline-flex"}
            flexDir={"column"}
            suppressHydrationWarning
            experimental_spaceY={"3"}
            alignItems={"center"}
            fontSize={"md"}
          >
            {Array(3)
              .fill("")
              .map((_, i) => (
                <Text key={i}>Francais</Text>
              ))}
          </Box>
        </Box>
      </SlideFade>
    </>
  );
};

export default TopDropdown;
