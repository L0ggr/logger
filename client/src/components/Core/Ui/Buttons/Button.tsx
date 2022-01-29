import React from "react";
import { styled } from "../stiches.config";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  height?: string;
  width?: string;
  color?: any;
  disabled?: boolean;
}

const Btn = styled("button", {
  variants: {
    color: {
      primary: {
        backgroundColor: "$primary600",
        color: "$neutral0",
        border: "2px solid $primary600",
        "&:hover": {
          backgroundColor: "$primary500",
          border: "2px solid $primary500",
        },
        "&:active": {
          backgroundColor: "$primary700",
          border: "2px solid $primary700",
        },
        "&:focus": {
          backgroundColor: "$primary600",
          border: "2px solid $neutral0",
          outline: "2px solid $primary700",
        },
      },
      success: {
        backgroundColor: "$success600",
        color: "$neutral0",
        border: "2px solid $success600",
        "&:hover": {
          backgroundColor: "$success500",
          border: "2px solid $success500",
        },
        "&:active": {
          backgroundColor: "$success700",
          border: "2px solid $success700",
        },
        "&:focus": {
          backgroundColor: "$success600",
          border: "2px solid $neutral0",
          outline: "2px solid $success700",
        },
      },
      danger: {
        backgroundColor: "$danger600",
        color: "$neutral0",
        border: "2px solid $danger600",
        "&:hover": {
          backgroundColor: "$danger500",
          border: "2px solid $danger500",
        },
        "&:active": {
          backgroundColor: "$danger700",
          border: "2px solid $danger700",
        },
        "&:focus": {
          backgroundColor: "$danger600",
          border: "2px solid $neutral0",
          outline: "2px solid $danger700",
        },
      },
      warning: {
        backgroundColor: "$warning600",
        color: "$neutral0",
        border: "2px solid $warning600",
        "&:hover": {
          backgroundColor: "$warning500",
          border: "2px solid $warning500",
        },
        "&:active": {
          backgroundColor: "$warning700",
          border: "2px solid $warning700",
        },
        "&:focus": {
          backgroundColor: "$warning600",
          border: "2px solid $neutral0",
          outline: "2px solid $warning700",
        },
      },
      secondary: {
        backgroundColor: "$secondary600",
        color: "$neutral0",
        border: "2px solid $secondary600",
        "&:hover": {
          backgroundColor: "$secondary500",
          border: "2px solid $secondary500",
        },
        "&:active": {
          backgroundColor: "$secondary700",
          border: "2px solid $secondary700",
        },
        "&:focus": {
          backgroundColor: "$secondary600",
          border: "2px solid $neutral0",
          outline: "2px solid $secondary700",
        },
      },
      alternative: {
        backgroundColor: "$alternative600",
        border: "2px solid $alternative600",
        color: "$neutral0",
        "&:hover": {
          backgroundColor: "$alternative500",
          border: "2px solid $alternative500",
        },
        "&:active": {
          backgroundColor: "$alternative700",
          border: "2px solid $alternative700",
        },
        "&:focus": {
          backgroundColor: "$alternative600",
          border: "2px solid $neutral0",
          outline: "2px solid $alternative700",
        },
      },
      disabled: {
        backgroundColor: "$neutral150",
        border: "2px solid $neutral150",
        color: "$neutral600",
      },
    },
    size: {
      small: {
        width: "58px",
        height: "32px",
        fontSize: "12px",
      },
      medium: {
        width: "62px",
        height: "36px",
        fontSize: "14px",
      },
      large: {
        width: "62px",
        height: "40px",
        fontSize: "14px",
      },
    },
  },

  borderRadius: "4px",
  boxSizing: "border-box",
  border: "none",
  margin: "4px",
  fontWeight: "$bold",
  padding: "8px 16px 8px 16px",
});

const Button: React.FC<Props> = ({
  children,
  onClick,
  height,
  width,
  color,
  disabled,
}: Props) => {
  //   const clr: string = disabled ? "disabled" : color;
  return (
    <Btn color={color} disabled={disabled}>
      {children}
    </Btn>
  );
};

export default Button;
