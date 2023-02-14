import React, { useRef } from "react";
import { NavbarTopStyles } from "../../../../styles/custom/nav/Navbar.top";
import {
  Box,
  BoxProps,
  Image,
  Text,
  useDisclosure,
  useBoolean,
  UseCheckboxGroupReturn,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
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
  AiOutlineArrowDown,
} from "react-icons/ai";
import { ChevronDownIcon } from "@chakra-ui/icons";
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
  const [isOpen, onToggle] = useBoolean();
  const {
    isOpen: dropdownToggle,
    onClose: dropdownClose,
    onToggle: setDropdownToggle,
  } = useDisclosure();

  const [isNavVisible, setIsNavVisible] = React.useState(false);
  const navbarRef = useRef<{ clientHeight: any }>(null);
  React.useLayoutEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef.current.clientHeight!;
      const scrollY = window.scrollY;
      if (scrollY > navbarHeight) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };
    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  const throttle = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          func(...args);
          timeoutId = null;
        }, delay);
      }
    };
  };
  const handleScroll = () => {};

  return (
    <>
      <Box paddingX={"16"}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Menu>
            <MenuButton
              as={Button}
              // @ts-ignore
              rightIcon={<ChevronDownIcon />}
              color={"gray.700"}
              cursor={"pointer"}
              fontFamily={["-moz-initial", "Rubik", "SproDisplay"]}
              fontSize={"17px"}
              fontWeight={"semibold"}
              letterSpacing={"tighter"}
              display={"flex"}
              lineHeight={"5"}
              suppressContentEditableWarning
            >
              Country Websites
            </MenuButton>
            <MenuList bgColor={"slategrey"} p={"2"}>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          {/*  */}

          <Drawer
            placement={"top"}
            onClose={dropdownClose}
            isOpen={dropdownToggle}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
              <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

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
                <Text
                  as={"h1"}
                  fontSize={"xl"}
                  fontWeight={"light"}
                  fontFamily={"monospace"}
                >
                  08:40am - 09:30am
                </Text>
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
              <Text
                as={"p"}
                fontSize={"lg"}
                fontWeight={"medium"}
                color={"blackAlpha.900"}
              >
                Call Us
              </Text>
              <Text
                as={"h1"}
                fontSize={"xl"}
                fontWeight={"light"}
                fontFamily={"monospace"}
              >
                +123 0903848588
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavbarTop;
