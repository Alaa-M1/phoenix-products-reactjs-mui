import { Button, ExtendButtonBase, ButtonTypeMap } from "@mui/material";
const PhoenixButton = (
  props: ExtendButtonBase<ButtonTypeMap<{}, "button">>
) => {
  return <Button color="primary" {...props} variant="contained" ></Button>;
};

export {PhoenixButton}