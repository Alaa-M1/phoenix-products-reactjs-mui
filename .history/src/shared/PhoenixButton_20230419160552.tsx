import { Button, ExtendButtonBase, ButtonTypeMap } from "@mui/material";
import React from "react";

type PhoenixButtonProps = ExtendButtonBase<ButtonTypeMap> & {
  label?: string;
};
const PhoenixButton = ({ label, ...props }: PhoenixButtonProps) => {
  return (
    <Button color="primary" {...props} variant="contained">
      {label}
    </Button>
  );
};

export { PhoenixButton };
