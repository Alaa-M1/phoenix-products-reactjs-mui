import { Button, ExtendButtonBase, ButtonTypeMap } from "@mui/material";
const PhoenixButton = (
  props: ExtendButtonBase<ButtonTypeMap<{}, "button">>
) => {
  return <Button {...props} variant="contained" color="primary"></Button>;
};
