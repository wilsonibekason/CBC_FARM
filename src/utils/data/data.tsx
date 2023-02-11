import uuid from "react-uuid";
import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";
import { icons } from "../../assets/images";
const NavDropdownContent = [
  {
    id: uuid(),
    name: "Create a Copy",
  },
  {
    id: uuid(),
    name: "Create a Copy",
  },
  {
    id: uuid(),
    name: "Create a Copy",
  },
  {
    id: uuid(),
    name: "Create a Copy",
  },
  {
    id: uuid(),
    name: "Create a Copy",
  },
];

const SectionOneData = [
  {
    header: [
      { title: "Know Your", span: "Farmer" },
      { title: "Love your", span: "Food" },
    ],
  },
];

const SectionCountupData = [
  {
    icon: icons.icon1,
    count: 202,
    name: "Farms Expert",
    id: uuid(),
  },
  {
    icon: icons.icon1,
    count: 202,
    name: "Farms Expert",
    id: uuid(),
  },
  {
    icon: icons.icon1,
    count: 202,
    name: "Farms Expert",
    id: uuid(),
  },
  {
    icon: icons.icon1,
    count: 202,
    name: "Farms Expert",
    id: uuid(),
  },
];

const GalleryCategoryData = [
  {
    id: uuid(),
    name: "all",
  },
  {
    id: uuid(),
    name: "Farm Tools",
  },
  {
    id: uuid(),
    name: "Implements",
  },
  {
    id: uuid(),
    name: "Food Stuff",
  },
];

export {
  NavDropdownContent,
  SectionOneData,
  SectionCountupData,
  GalleryCategoryData,
};
