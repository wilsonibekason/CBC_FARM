import React from "react";
import {
  Route,
  Routes,
  RouteProps,
  RouterProviderProps,
} from "react-router-dom";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  AspectRatio,
  AspectRatioProps,
  Image,
  ImageProps,
  Badge,
  HStack,
  Circle,
  Square,
  Container,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { BiPhoneIncoming, BiStar } from "react-icons/bi";
import { About, HomePage } from "../pages";
import AOS from "aos";

function AirbnbCard() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mt={"10"}
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6s">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <BiStar
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const CIC = () => {
  React.useEffect(() => {
    AOS.init(), AOS.refresh();
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path={"/about"}
          element={<About />}
          errorElement={<h1>This is an Error element</h1>}
        />
      </Routes>
    </>
  );
};

export default CIC;
