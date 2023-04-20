import { Button, ExtendButtonBase, ButtonTypeMap } from "@mui/material";
import React from "react";

type PhoenixButtonProps = ButtonTypeMap & {
  children?: any;
};
const PhoenixButton = (props: PhoenixButtonProps) => {
  return (
    <Button  {...props} variant="contained" color="primary"/>
  );
};

export { PhoenixButton };
