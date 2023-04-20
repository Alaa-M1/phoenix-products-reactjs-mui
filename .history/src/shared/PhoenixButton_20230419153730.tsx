import { Button, ExtendButtonBase, ButtonTypeMap } from "@mui/material";
import React from "react";

type PhoenixButtonProps = ExtendButtonBase<ButtonTypeMap<{}, "button">> 
const PhoenixButton = (props: PhoenixButtonProps) => {
  return (
    <Button color="primary" {...props} variant="contained"  />
  );
};

export { PhoenixButton };
