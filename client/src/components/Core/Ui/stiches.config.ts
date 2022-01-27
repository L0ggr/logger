import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      // Neutral
      neutral900: "#212134",
      neutral800: "#32324D",
      neutral700: "#4A4A6A",
      neutral600: "#666687",
      neutral500: "#8E8EA9",
      neutral400: "#A5A5BA",
      neutral300: "#C0C0CF",
      neutral200: "#DCDCE4",
      neutral150: "#EAEAEF",
      neutral100: "#F6F6F9",
      neutral0: "#FFFFFF",
      // Primary
      primary700: "#271FE0",
      primary600: "#4945FF",
      primary500: "#7B79FF",
      primary200: "#D9D8FF",
      primary100: "#F0F0FF",
      // Secondary
      secondary700: "#006096",
      secondary600: "#0C75AF",
      secondary500: "#66B7F1",
      secondary200: "#B8E1FF",
      secondary100: "#EAF5FF",
      // Success
      success700: "#2F6846",
      success600: "#328048",
      success500: "#5CB176",
      success200: "#C6F0C2",
      success100: "#EAFBE7",
      // Danger
      danger700: "#B72B1A",
      danger600: "#D02B20",
      danger500: "#EE5E52",
      danger200: "#F5C0B8",
      danger100: "#FCECEA",
      // Warning
      warning700: "#BE5D01",
      warning600: "#D9822F",
      warning500: "#F29D41",
      warning200: "#FAE7B9",
      warning100: "#FDF4DC",
      // alternative
      alternative700: "#8312D1",
      alternative600: "#9736E8",
      alternative500: "#AC73E6",
      alternative200: "#E0C1F4",
      alternative100: "#F6ECFC",
    },
    fontWeights: {
      regular: "400",
      semiBold: "500",
      bold: "600",
    },
    fonts: {
      inter: "Inter, sans-serif",
    },
  },
});
