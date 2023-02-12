import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimationOnScroll } from "react-animation-on-scroll";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
// import required modules
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { icons } from "../../../../assets/images";

const SectionCarousel = () => {
  return (
    <>
      <Box as={"div"} pt={20} w={"full"}>
        <Swiper
          direction="horizontal"
          speed={3000}
          loop
          slidesPerView={1}
          centeredSlides={false}
          grabCursor={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
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
            // Pagination,
            Autoplay,
            Mousewheel,
          ]}
          className="mySwiper"
        >
          {Array(10)
            .fill(0)
            .map((_, i) => {
              return (
                <SwiperSlide key={i} style={{ width: "100%" }}>
                  <Box
                    as={"div"}
                    bgImage={icons.agri2}
                    bgPos={"center"}
                    bgSize={"cover"}
                    bgRepeat={"no-repeat"}
                    py={200}
                    blur={"2xl"}
                    brightness={"50%"}
                    filter={"grayscale(90%)"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Flex
                      direction={"column"}
                      justify={"center"}
                      suppressHydrationWarning
                      experimental_spaceY={10}
                      fontWeight={"semibold"}
                      color={"white"}
                      letterSpacing={"widest"}
                      fontSize={"xl"}
                      textTransform={"capitalize"}
                    >
                      <AnimationOnScroll animateIn="animate__bounceIn">
                        <Text textAlign={"center"}>It all started with</Text>
                      </AnimationOnScroll>
                      <Text textAlign={"center"} maxW={"80%"} fontSize={"6xl"}>
                        Smart irrigationn in a simple way
                      </Text>
                      <Flex align={"center"} justify={"center"}>
                        {" "}
                        <Button
                          as={"p"}
                          variant={"solid"}
                          px={"10"}
                          color={"black"}
                          fontWeight={"semibold"}
                        >
                          Get Started
                        </Button>
                      </Flex>
                    </Flex>
                  </Box>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Box>
    </>
  );
};

export default SectionCarousel;
