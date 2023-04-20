import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material";

const PhoenixFieldText = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      sx={{
        border: "1px solid #ccc",
        borderRadius: "3px",
        color: "#22f",
        margin: "5px 0px",
      }}
    />
  );
};

export {PhoenixFieldText};
