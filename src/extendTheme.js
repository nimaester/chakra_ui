import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#f77070",
    },
    grey: {
      100: "#eff3fa",
    },
    blue: {
      100: "#0098ae",
    },
    red: {
      100: "#ff3d3d",
      200: "#f77070",
    },
  },
  fonts: {
    heading: "Heading Font Name, sans-serif",
    body: "Body Font Name, sans-serif",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
});

export default theme;
