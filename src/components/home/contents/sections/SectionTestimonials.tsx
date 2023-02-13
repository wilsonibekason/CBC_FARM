import React from "react";
import {} from "@chakra-ui/icons";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import {} from "@chakra-ui/theme";
import { icons } from "../../../../assets/images";
import AOS, { Aos, AosEvent, AosEventType } from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper";
import { FaQuoteRight } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

const TestimonialItem = () => {
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
          pagination={{
            clickable: true,
          }}
          modules={[
            Keyboard,
            Scrollbar,
            Navigation,
            Pagination,
            Autoplay,
            Mousewheel,
          ]}
          className="mySwiper"
        >
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide
                key={index}
                style={{ width: "100%" }}
                className="bg-white"
              >
                <Stack mx={[20, 10, 20]} maxW={"full"} bgColor={"white"}>
                  <Flex
                    p={20}
                    direction={"column"}
                    justify={"center"}
                    align={"center"}
                    fontSize={"large"}
                    lineHeight={"7"}
                    color={"gray.700"}
                    experimental_spaceY={"8"}
                  >
                    <FaQuoteRight size={20} />
                    <Text textAlign={"center"}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tempore molestiae sed, odit adipisci magni sapiente.s
                    </Text>
                    {/*  */}
                    <Flex
                      direction={"column"}
                      justify={"center"}
                      experimental_spaceY={"5"}
                      align={"center"}
                    >
                      <Flex align={"center"} experimental_spaceX={"3"}>
                        James Ibekason{" "}
                        <Text as={"span"} pl={"2"}>
                          CEO of MakeMaker
                        </Text>
                      </Flex>
                      <Flex align={"center"}>
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <BsStarFill key={i} color={"gold"} />
                          ))}
                      </Flex>
                    </Flex>

                    {/*  */}
                    <Image
                      src={icons.profile}
                      w={"100px"}
                      h={"100px"}
                      objectFit={"cover"}
                      brightness={"100%"}
                      rounded={"full"}
                      saturate="10px"
                    />
                  </Flex>
                </Stack>
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </>
  );
};

const SectionTestimonials = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refreshHard();
  }, []);
  return (
    <>
      <Stack py={20}>
        <Box
          w={"full"}
          bgImage={icons.imageBg}
          bgPos={"center"}
          bgSize={"cover"}
          filter={"grayscale(80%)"}
          bgRepeat={"no-repeat"}
          bgAttachment={"scroll"}
          py={100}
          px={4}
        >
          <TestimonialItem />
        </Box>
      </Stack>
    </>
  );
};

export default SectionTestimonials;
