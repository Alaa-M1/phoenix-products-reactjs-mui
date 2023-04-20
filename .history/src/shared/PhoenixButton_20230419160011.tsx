import { Button, ExtendButtonBase, ButtonTypeMap } from "@mui/material";
import React from "react";

type PhoenixButtonProps = ExtendButtonBase<ButtonTypeMap> & {
  children?: any;
};
const PhoenixButton = ({ children, ...props }: PhoenixButtonProps) => {
  return (
    <Button color="primary" {...props} variant="contained">
      {children}
    </Button>
  );
};

export { PhoenixButton };