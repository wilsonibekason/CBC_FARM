import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}
const theme = extendTheme({
  fonts: {
    heading: "",
  },
}, breakpoints);

export { theme };
