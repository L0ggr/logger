import React from "react";
import { styled } from "@stitches/react";

const Button = styled("button", {
  backgroundColor: "blue",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "red",
  },
});

export default function ButtonExport() {
  return <Button>Button</Button>;
}
