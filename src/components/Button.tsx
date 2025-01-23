import React from "react";
import { ButtonProps, Button as MUIButton } from "@mui/material";

export default function Button(props: ButtonProps) {
  return (
    <MUIButton
      className="bg-[#3b82f6] text-lg normal-case"
      variant="contained"
      {...props}
    />
  );
}
