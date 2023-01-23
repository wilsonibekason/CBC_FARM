import React from "react";
import { NavbarTopStyles } from "../../../../styles/custom/nav/Navbar.top";
import { Box, BoxProps, Image, Text, useDisclosure } from "@chakra-ui/react";
import { useIcons } from "../../../../services/context/icons/IconsContext";
import { IconType, IconBaseProps } from "react-icons";
import { MdKeyboardArrowDown, MdOutlineKeyboard } from "react-icons/md";
import {
  AiOutlineFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiFillClockCircle,
  AiTwotonePhone,
  AiOutlineYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import {} from "@emotion/react";
import { Global } from "../../../../styles/themes/themes.global";
import { TopDropdown } from "../../../common/export";
import type { ISocialIcon } from "../../../../types/global.type";
import uuid from "react-uuid";

const SocialIcons: ISocialIcon[] = [
  {
    icon: <AiFillLinkedin size={30} />,
    id: uuid(),
  },
  {
    icon: <AiFillInstagram size={30} />,
    id: uuid(),
  },
  {
    icon: <AiOutlineFacebook size={30} />,
    id: uuid(),
  },
  {
    icon: <AiOutlineTwitter size={30} />,
    id: uuid(),
  },
  {
    icon: <AiOutlineWhatsApp size={30} />,
    id: uuid(),
  },
  {
    icon: <AiOutlineYoutube size={30} />,
    id: uuid(),
  },
];

const NavbarTop = () => {
  const { TopWrapper } = NavbarTopStyles;
  const { icons } = useIcons();
  const { GlobalValues } = Global;
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box paddingX={"16"}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            display={["-webkit-inline-flex", "flex"]}
            flexDir={"row"}
            alignItems={"center"}
            paddingY={GlobalValues.NavPadY}
            rowGap={20}
            color={"gray.700"}
            onClick={onToggle}
            cursor={"pointer"}
          >
            <Text
              fontFamily={["-moz-initial", "fantasy", "monospace"]}
              fontSize={"17px"}
              fontWeight={"400"}
              position={"relative"}
              letterSpacing={"tighter"}
            >
              Country Websites
              <TopDropdown isOpen={isOpen} />
            </Text>
            <MdKeyboardArrowDown size={20} />
          </Box>
          {/*  */}
          <Box display={"flex"} experimental_spaceX={"10"}>
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
            <Box
              bgColor={"whiteAlpha.500"}
              p={GlobalValues.NavPadY}
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
            <Box
              display={["flex", "-webkit-flex", "-webkit-inline-flex"]}
              flexDir={"row"}
              paddingY={GlobalValues.NavPadY}
              rowGap={"20px"}
              alignItems={"center"}
            >
              <AiFillClockCircle size={30} />
              <Box
                display={["flex", "-webkit-flex", "-webkit-inline-flex"]}
                flexDir={"column"}
                justifyContent={"center"}
                paddingLeft={"2"}
                letterSpacing={"wide"}
                lineHeight={"normal"}
                textColor={"gray.500"}
                fontSize={"lg"}
                fontWeight={"semibold"}
              >
                <Text as={"p"} fontSize={"md"} color={"blackAlpha.900"}>
                  Office Hour
                </Text>
                <Text>08:40am - 09:30am</Text>
              </Box>
            </Box>
          </Box>
          {/*  */}
          <Box
            display={["flex", "-webkit-flex", "-webkit-inline-flex"]}
            flexDir={"row"}
            paddingY={GlobalValues.NavPadY}
            rowGap={"20px"}
            alignItems={"center"}
          >
            <AiTwotonePhone size={30} />
            <Box
              display={["flex", "-webkit-flex", "-webkit-inline-flex"]}
              flexDir={"column"}
              justifyContent={"center"}
              paddingLeft={"2"}
              letterSpacing={"wide"}
              lineHeight={"normal"}
              textColor={"gray.500"}
              fontSize={"lg"}
              fontWeight={"semibold"}
            >
              <Text as={"p"} fontSize={"md"} color={"blackAlpha.900"}>
                Call Us
              </Text>
              <Text>+123 0903848588</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavbarTop;
