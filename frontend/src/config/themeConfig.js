const lightTheme = {
  primary: {
    50: "#CFE1F9",
    100: "#BDD5F7",
    200: "#99BEF2",
    300: "#74A8ED",
    400: "#5091E9",
    500: "#2C7AE4",
    600: "#185FBF",
    700: "#12468E",
    800: "#0C2E5C",
    900: "#05152A",
  },
  secondary: {
    50: "#FEF2EC",
    100: "#FDE4D9",
    200: "#FAC9B2",
    300: "#F8AF8C",
    400: "#F59465",
    500: "#F3793F",
    600: "#EB560F",
    700: "#B6420B",
    800: "#822F08",
    900: "#4D1C05",
  },
  grey: {
    50: "#949494",
    100: "#8A8A8A",
    200: "#757575",
    300: "#616161",
    400: "#4C4C4C",
    500: "#383838",
    600: "#1C1C1C",
    700: "#1A1A1A",
    800: "#050505",
    900: "#010101",
  },
  background: {
    100: "#EFF2F7",
    400: "#edf2f9",
    800: "#FFFFFF",
  },
};

export const themeConfig = () => {
  return {
    palette: {
      primary: {
        ...lightTheme.primary,
        main: lightTheme.primary[400],
        light: lightTheme.primary[200],
        dark: lightTheme.primary[500],
      },
      secondary: {
        ...lightTheme.secondary,
        main: lightTheme.secondary[400],
        light: lightTheme.primary[200],
        dark: lightTheme.primary[500],
      },
      neutral: {
        ...lightTheme.grey,
        main: lightTheme.grey[400],
      },
      background: {
        ...lightTheme.background,
        default: lightTheme.background[400],
        alt: lightTheme.background[800],
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40,
        fontWeight: 500,
        color: lightTheme.grey[600],
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32,
        fontWeight: 500,
        color: lightTheme.grey[600],
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 500,
        color: lightTheme.grey[500],
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 400,
        color: lightTheme.grey[400],
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 400,
        color: lightTheme.grey[400],
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 400,
        color: lightTheme.grey[400],
      },
    },
  };
};
