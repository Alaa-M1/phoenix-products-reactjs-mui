import Box from "@mui/material/Box";
import { useState } from "react";
import { PhoenixButton, PhoenixTextField } from "shared";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

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
        maxWidth: "400px",
        margin: "auto",
        marginTop: "30px",
        boxShadow: "5px 5px 10px #ccc",
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
        padding: "10px 5px",
      }}
    >
      <Typography variant="h4" color="primary">
        Login
      </Typography>
      <PhoenixTextField
        onChange={handleChange}
        label="User name:"
        value={userInfo.name}
        name="name"
      ></PhoenixTextField>
      <PhoenixTextField
        onChange={handleChange}
        label="User email:"
        value={userInfo.email}
        name="email"
      ></PhoenixTextField>
      <PhoenixTextField
        onChange={handleChange}
        label="User password:"
        value={userInfo.password}
        name="[password]"
        type="password"
        
      ></PhoenixTextField>
      <PhoenixButton label='Login' />
      <Button endIcon={< LoginIcon/>}>Login</Button>
    </Box>
  );
};

export default Login;
