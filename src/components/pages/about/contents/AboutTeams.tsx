import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { TextHeadline } from "../../../common/export";

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
import { Swiper, SwiperSlide } from "swiper/react";
import { SocialIcons } from "../../../../utils/data/data";

const AboutTeams = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexDir={"column"}
        w="full"
        justifyContent={"center"}
        border={"2px"}
        py={20}
      >
        <Center>
          <TextHeadline />
        </Center>
        <Box as={"div"} pt={20} w={"full"}>
          <Swiper
            direction="horizontal"
            speed={3000}
            loop
            slidesPerView={2}
            centeredSlides={false}
            spaceBetween={20}
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
                  <SwiperSlide key={i}>
                    <Flex
                      p={10}
                      direction={"column"}
                      justify={"center"}
                      bgColor={"white"}
                      shadow={"2xl"}
                      border={"1px"}
                    >
                      <Box w={"full"} h={"300px"} rounded={"2xl"}>
                        <Image
                          src={
                            "https://demo.7iquid.com/agrisoil/wp-content/uploads/2022/08/daisy-obryan-7JPGg8S-QD4-unsplash-1-600x400.jpg"
                          }
                          maxW={"full"}
                          w={"full"}
                          h={"full"}
                          objectFit={"cover"}
                          rounded={"inherit"}
                        />
                      </Box>{" "}
                      <Flex
                        direction={"row"}
                        justify={"space-between"}
                        align={"center"}
                      >
                        <Flex direction={"column"} justify={"center"}>
                          <Text>Wilson Ibekason</Text>
                          <Text>Senior Developer</Text>
                        </Flex>
                        <Flex direction={"row"} justify={"center"}>
                          {SocialIcons.slice(0, 2).map(({ icon, id }) => (
                            <Text key={id}>{icon}</Text>
                          ))}
                        </Flex>
                      </Flex>
                    </Flex>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default AboutTeams;
