import React, { useState } from "react";
import { styled } from "../stiches.config";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  height?: string;
  width?: string;
  value?: string;
  color?: any;
  disabled?: boolean;
}

const Chckbox: React.FC<Props> = ({ children, value }: Props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {value}
      </label>
    </div>
  );
};

Chckbox.toString = () => ".chckbox";

const Chkbox = styled(Chckbox, {
  variants: {
    color: {
      primary: {
        appearance: "none",
        webkitAppearance: "none",
        backgroundColor: "$primary600",
        color: "$neutral0",
        border: "2px solid $neutral300",
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
      disabled: {
        backgroundColor: "$neutral150",
        border: "2px solid $neutral150",
        color: "$neutral600",
      },
    },
    size: {
      small: {
        width: "20px",
        height: "20px",
        fontSize: "12px",
      },
      medium: {
        width: "20px",
        height: "20px",
        fontSize: "14px",
      },
      large: {
        width: "20px",
        height: "20px",
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

const Checkbox: React.FC<Props> = ({
  children,
  onClick,
  height,
  width,
  color,
  value,
  disabled,
}: Props) => {
  //   const clr: string = disabled ? "disabled" : color;
  return <Chkbox value={value}>{children}</Chkbox>;
};

export default Checkbox;
