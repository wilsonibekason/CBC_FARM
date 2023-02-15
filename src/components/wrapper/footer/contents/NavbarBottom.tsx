import * as React from "react";
import {
  Accordion,
  Text,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { RxThickArrowDown } from "react-icons/rx";
import MainButton from "../../../../hooks/button/ButtonGeneric";
import { ButtonHTMLAttributes, Dispatch } from "react";
import { FiSearch } from "react-icons/fi";
import { CustomStyles } from "../../../../styles/custom/styles";
import classNames from "classnames";
import { ArrowDownIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { NavDropdownContent } from "../../../../utils/data/data";

const NavbarBottom = () => {
  const ButtonRef = React.useRef<HTMLButtonElement>();
  const { Animations } = CustomStyles;
  const [isNavVisible, setIsNavVisible] = React.useState(false);
  const navbarRef = React.useRef<{ clientHeight: any }>({ clientHeight: "" });
  // const navbarRef = React.createRef<HTMLDivElement>();

  React.useLayoutEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef?.current?.clientHeight;
      const scrollY = window.scrollY;
      if (scrollY > navbarHeight!) {
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

  const throttle = (
    func: { (): void; (arg0: any): void },
    delay: number | undefined
  ) => {
    let timeoutId: number | null;
    return (...args: [any]) => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          func(...args);
          timeoutId = null;
        }, delay);
      }
    };
  };
  return (
    <>
      <Box
        paddingX={"6"} //@ts-ignore
        ref={navbarRef}
        className={` ${isNavVisible && "navbar__toggle"}`}
        w={"full"}
        zIndex={"9999"}
        transition={"ease-in"}
        transitionDelay={"300s"}
        transitionDuration={"100"}
      >
        <Box
          paddingX={"10"}
          paddingY={"5"}
          bgColor={"blackAlpha.800"}
          rounded={"md"}
          display={["flex", "-ms-flexbox"]}
          flexDir={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            flexDirection={["row"]}
            alignItems={"center"}
            experimental_spaceX={"3"}
          >
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Menu key={i}>
                  <MenuButton
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    _hover={{ textColor: "white" }}
                    _expanded={{ bg: "blue.400" }}
                    _focus={{ boxShadow: "outline", border: "none" }}
                    color={"whatsapp.50"}
                    outline={"none"}
                    border={"none"}
                    fontSize={["-moz-initial", "xl"]}
                    fontWeight={"normal"}
                    letterSpacing={"wider"}
                    _selected={{ border: "none", bg: "transparent" }}
                  >
                    Projects <ChevronDownIcon />
                  </MenuButton>
                  <MenuList
                    bgColor={"white"}
                    p={"10"}
                    borderY={"red"}
                    borderColor={"red"}
                    borderWidth={"2px"}
                    width={"300px"}
                    suppressHydrationWarning
                    shadow={["-moz-initial", "2xl"]}
                    zIndex={"999"}
                  >
                    {NavDropdownContent.map(({ id, name }) => (
                      <MenuItem
                        borderBottom={"2px"}
                        borderBottomColor={"gray.400"}
                        p={"2"}
                        key={id}
                        justifySelf="start"
                        justifyItems={["flex-start", "start"]}
                        color={"blackAlpha.900"}
                        fontSize={"xl"}
                        _hover={{
                          borderBottomColor: "red.600",
                          textColor: "red.600",
                        }}
                        fontWeight={"bold"}
                        fontFamily={"monospace"}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              ))}

            <Text
              className={classNames(
                ` capitalize text-2xl text-white`,
                `no-underline bg-gradient-to-r from-[#d99a5a] to-[#d99a5a] bg-[length:0%_0.1em] bg-[0%_100%] bg-no-repeat transition-slide-underline hover:bg-[length:100%_0.1em] cursor-pointer`
              )}
              textColor={"white"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              bgImage={""}
              bgGradient={"linear(to-r, green.200, pink.500)"}
              bgSize={"length:0%_0.1em"}
              bgPos={"0%_100%"}
              bgRepeat={"no-repeat"}
              transition={""}
              _hover={{ bgSize: "length:100%_0.1em", color: "red" }}
              cursor={"pointer"}
              textDecorationLine={"none"}
            >
              Wilson
            </Text>
          </Box>

          <Box
            display={["-webkit-flex", "flex"]}
            experimental_spaceX={"6"}
            flexDir={["row"]}
            alignItems={"center"}
          >
            <FiSearch size={30} color={"white"} />
            <MainButton
              // @ts-ignore
              ref={ButtonRef as ButtonHTMLAttributes<HTMLButtonElement>}
              className={"backdrop-brightness-75 bg-orange-400 "}
            >
              Request a Quote
            </MainButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NavbarBottom;
