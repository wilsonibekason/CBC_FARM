import React from "react";
import { ArrowRightIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import {} from "@chakra-ui/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper";
import { icons } from "../../../../assets/images";
import { FaRegCommentDots } from "react-icons/fa";

const JournalItem = () => {
  return (
    <>
      <Box as={"div"} w={"full"}>
        <Swiper
          direction="horizontal"
          speed={3000}
          loop
          slidesPerView={3}
          centeredSlides={false}
          grabCursor={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
            waitForTransition: true,
          }}
          // mousewheel={true}
          keyboard={{
            enabled: true,
          }}
          scrollbar={true}
          navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[
            Keyboard,
            Scrollbar,
            Navigation,
            //   Pagination,
            Autoplay,
            Mousewheel,
          ]}
          className="mySwiper"
        >
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <SwiperSlide key={i} style={{ maxWidth: "33.3%" }}>
                <Flex
                  direction={"column"}
                  justify={"center"}
                  w={"full"}
                  mx={[20, 10, 20]}
                  position={"relative"}
                >
                  <Box h={"400px"}>
                    <Image
                      src={icons.agri3}
                      maxW={"full"}
                      w={"full"}
                      h={"full"}
                      filter={"grayscale(80%)"}
                      _hover={{ scale: "10px" }}
                      scale={"0.8"}
                    />
                  </Box>
                  {/* container */}
                  <Flex mx={10} position={"absolute"} bottom={"0"}>
                    <Flex
                      direction={"column"}
                      justify={"center"}
                      bg={"white"}
                      w={"full"}
                      p={10}
                      experimental_spaceY={5}
                      shadow={"2xl"}
                      rounded={"sm"}
                    >
                      <Flex
                        direction={"row"}
                        justify={"space-between"}
                        align={"center"}
                      >
                        <Stack
                          display={"flex"}
                          justify={"center"}
                          align={"center"}
                          bgColor={"slategray"}
                          p={2}
                          rounded={"lg"}
                        >
                          <Text color={"orange.800"}>Nov 11, 2022</Text>
                        </Stack>
                        <Text color={"black"}>By Wilson Ibekason</Text>
                      </Flex>
                      <Flex
                        direction={"row"}
                        align={"center"}
                        experimental_spaceX={5}
                        justify={"center"}
                      >
                        <Flex
                          direction={"column"}
                          justify={"center"}
                          align={"center"}
                          color={"black"}
                          fontSize={"lg"}
                        >
                          <FaRegCommentDots />
                          <Text>0</Text>
                        </Flex>
                        <Text
                          fontSize={"lg"}
                          fontWeight={"semibold"}
                          color={"black"}
                          letterSpacing={"widest"}
                        >
                          Ways Customer trends impart Shopping experience
                        </Text>
                      </Flex>
                      {/*  */}
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
                        left={"50%"}
                        shadow={"2xl"}
                        zIndex={"999"}
                      >
                        <ArrowRightIcon />{" "}
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </>
  );
};

const SectionJournals = () => {
  return (
    <>
      <Box py={20} w={"full"}>
        <Flex direction={"column"} justify={"center"} experimental_spaceY={20}>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Box w={"20"} h={"20"}>
              <Image
                src={icons.icon1}
                w={"full"}
                maxW={"full"}
                h={"full"}
                maxH={"full"}
              />
            </Box>
            <Text
              as={"h1"}
              textTransform={"capitalize"}
              fontSize={"7xl"}
              whiteSpace={"nowrap"}
              zIndex={"sticky"}
              display={"flex"}
              className={"z-[999]"}
              fontFamily={"Rubik"}
            >
              Stay at the{" "}
              <Text as={"span"} color={"blackAlpha.600"} pl={"5"}>
                {" "}
                {"   "} Top
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
              fontFamily={"Rubik"}
              color={"blackAlpha.900"}
            >
              our recent post
            </Text>
          </Flex>
          {/*  */}
          <JournalItem />
          <Flex align={"center"} justify={"center"}>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme={"orange"}
              w={200}
              p={7}
              fontSize={16}
              variant={"outline"}
            >
              {" "}
              View all Posts
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default SectionJournals;
