import React from "react";
import { ButtonProps, Button as MUIButton } from "@mui/material";

export default function Button(props: ButtonProps) {
  return (
    <MUIButton
      className="bg-[#38b2ac] text-[#1A202C] text-lg normal-case"
      variant="contained"
      {...props}
    />
  );
}
