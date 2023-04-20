import { Button, ExtendButtonBase, ButtonTypeMap } from "@mui/material";
import React from "react";

type PhoenixButtonProps = ExtendButtonBase<ButtonTypeMap<{}, "button">> & {
  children1?: any;
};
const PhoenixButton = ({ children1, ...props }: PhoenixButtonProps) => {
  return (
    <Button color="primary" {...props} variant="contained">
      {children1}
    </Button>
  );
};

export { PhoenixButton };
