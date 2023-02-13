import uuid from "react-uuid";
import { ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons";
import { icons } from "../../assets/images";
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
import { ISocialIcon } from "../../types/global.type";
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

export {
  NavDropdownContent,
  SectionOneData,
  SectionCountupData,
  GalleryCategoryData,
  SocialIcons,
};
