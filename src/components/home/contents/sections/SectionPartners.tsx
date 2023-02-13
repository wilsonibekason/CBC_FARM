import React from "react";
import {} from "@chakra-ui/icons";
import { Box, Image, Stack } from "@chakra-ui/react";
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

const SectionPartners = () => {
  return (
    <>
      <Box py={20} maxW={"full"}>
        <Box as={"div"} w={"full"}>
          <Swiper
            direction="horizontal"
            speed={3000}
            loop
            slidesPerView={5}
            centeredSlides={false}
            grabCursor={true}
            autoplay={{
              delay: 2000,
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
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <SwiperSlide key={i}>
                  <Stack w={"40"} h={"40"}>
                    <Image
                      src={icons.partner2}
                      maxW={"full"}
                      w={"full"}
                      h={"full"}
                      objectFit={"contain"}
                      _hover={{ filter: "grayscale(80%)" }}
                    />
                  </Stack>
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default SectionPartners;
