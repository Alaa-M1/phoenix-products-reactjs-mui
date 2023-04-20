import Box from "@mui/material/Box";
import { useState } from "react";
import { PhoenixTextField } from "shared";
const Login = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
    email: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUserInfo((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PhoenixTextField
        onChange={handleChange}
        label="name"
        value={userInfo.name}
      ></PhoenixTextField>
    </Box>
  );
};

export default Login;
