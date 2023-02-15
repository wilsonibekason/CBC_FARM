import React from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Select,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { icons } from "../../../../assets/images";
import { MdCheckCircle } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, Alignment } from "react-map-gl";
import maplibregl from "maplibre-gl";
import AOS from "aos";

// const Map = ReactMapboxGl({
//   accessToken:
//     "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A",
// });

const SectionMap = () => {
  const [viewState, setViewState] = React.useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
  });
  const MAPBOX_TOKEN =
    "pk.eyJ1Ijoid2lsaTEyMyIsImEiOiJja3cwaHR4ZDEwZng4MndwcTB4am9iY2kwIn0.4SciK8ia-VplCgi8zQAw6Q";
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Box py={20} maxW={"full"}>
        <Flex direction={"row"} justify={"center"} w={"full"}>
          {/* Map Description */}
          <Box
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            w={"full"}
            maxW={"40%"}
            experimental_spaceY={"10"}
            data-aos={"fade-in-left"}
          >
            <Box as={"a"} w={20} h={20}>
              <Image w={"full"} maxW={"full"} h={"full"} src={icons.icon1} />
            </Box>
            {/*  */}
            <Flex direction={"column"} justify={"center"}>
              <Text
                as={"h1"}
                textTransform={"capitalize"}
                fontSize={"6xl"}
                whiteSpace={"nowrap"}
                zIndex={"sticky"}
                display={"flex"}
                className={"z-[999]"}
                fontFamily={"Rubik"}
              >
                What have{" "}
                <Text as={"span"} color={"blackAlpha.600"} pl={"5"}>
                  {" "}
                  {"   "} Global
                </Text>
              </Text>
              <Text
                as={"h1"}
                textTransform={"capitalize"}
                fontSize={"6xl"}
                whiteSpace={"nowrap"}
                zIndex={"sticky"}
                display={"flex"}
                className={"z-[999]"}
                experimental_spaceX={"10"}
                fontFamily={"Rubik"}
              >
                reach In the{" "}
                <Text as={"span"} color={"blackAlpha.600"} pl={"5"}>
                  {" "}
                  World
                </Text>
              </Text>{" "}
            </Flex>

            {/* Description Component */}
            <Text
              letterSpacing={"wider"}
              maxW={"80%"}
              lineHeight={"6"}
              fontWeight={"light"}
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words
            </Text>
            {/* Dropdown Menu Bot  */}
            <Select placeholder="Select option" w={"full"} maxW={"80%"} h={12}>
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <option
                    value="option3"
                    className="w-full h-16 border-gray-700"
                    style={{
                      height: "100px",
                    }}
                  >
                    Option 3
                  </option>
                ))}
            </Select>
            <Flex direction={"row"} align={"center"} experimental_spaceX={"10"}>
              {/* icon */}
              <FaMapMarkerAlt size={50} />
              {/* description */}
              <List spacing={3}>
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <ListItem key={i}>
                      <ListIcon as={MdCheckCircle} color="green.500" />
                      Lorem ipsum dolor sit amet,
                    </ListItem>
                  ))}
              </List>
            </Flex>
          </Box>
          {/* Main Map Component  */}
          <Flex
            direction={"column"}
            w={"full"}
            maxW={"60%"}
            data-aos={"zoom-in-right"}
          >
            <Map
              {...viewState}
              onMove={(evt) => setViewState(evt.viewState)}
              style={{ width: "100%", height: "100%" }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken={MAPBOX_TOKEN}
              // mapLib={maplibregl}
            >
              <Marker longitude={-122.4} latitude={37.8} color="red" />
            </Map>
            {/* <Map
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: "100vh",
                width: "100%",
              }}
            >
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}
              >
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
              </Layer>
            </Map> */}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default SectionMap;
