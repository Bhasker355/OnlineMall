import React, { useEffect, useState } from "react";
import {
  TextField,
  
  Box,
  Typography,
  Button,
  Stack,
  Alert,
} from "@mui/material";
// import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Products from "./Products";

// import { Form } from "react-router-dom";

const Login = (props) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState();
  const [loginSt, setLoginSt] = useState(false);
  const userLoginSt = React.useContext(UserContext);

  const [userPassFieldsError, setuserPassFieldsError] = useState(false);
  const textFieldUser = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
    // console.log(userName);
  };
  const textFieldPass = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);

    // console.log(password);
  };
  useEffect(() => {
    

    if (localStorage.getItem(`usersData`) === null) {
      // console.log("Undef");
      localStorage.setItem(`usersData`, JSON.stringify([]));
      setUserData(JSON.parse(localStorage.getItem(`usersData`)));
    } else {
      setUserData(JSON.parse(localStorage.getItem(`usersData`)));
    }

    setUsername("");
    setPassword("");
  }, [loginSt]);

  useEffect(() => {}, [userPassFieldsError, userLoginSt]);

  const handleClickSubmit = () => {
    setLoginSt(!loginSt);
    console.log(userName);
    console.log(password);

    if (userName !== "" && password !== "") {
      if (userName && password) {
        // setLoginSt(!loginSt);
        console.log(userData);
        const checkUserData = (data) => {
          if (data.userName === userName && data.password === password) {
            localStorage.setItem("username", userName);
            return data.id;
          }
        };
        if (userData.find(checkUserData)) {
          alert("You are Successfully Logged in");
          props.onLogInClick(true);
          // setLoginSt(!loginSt);
        } else {
          alert("Wrong Credintials");
        }
      }
    } else {
      setuserPassFieldsError(true);
      setTimeout(() => {
        setuserPassFieldsError(false);
      }, 3000);
    }
  };

  
  return (
    <>
      {userLoginSt ? (
        <Products />
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="325px"
          height="380px"
          sx={{
            margin: "14vh auto",
            backgroundColor: "#FAF9F6",
            border: "1px solid grey",
            borderRadius: "10px",
          }}
        >
          {userPassFieldsError && (
            <Stack sx={{ width: "100%", textAlign: "center" }} spacing={2}>
              <Alert severity="error">
                Please Enter UserName Or Password !
              </Alert>
            </Stack>
          )}
          <Box>
            <Typography
              color="green"
              variant="h5"
              mb={1}
              borderBottom="1px solid black"
            >
              Sign In
            </Typography>
          </Box>
          <Box>
            <Typography mb={1}>User Name</Typography>
            <TextField
              onChange={textFieldUser}
              id="outlined-basic"
              label="UserName"
              variant="outlined"
              value={userName}
            />
          </Box>
          <Box mt={2}>
            <Typography mb={1}>Password</Typography>
            <TextField
              onChange={textFieldPass}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
            />
          </Box>
          <Box mt={2} mb={1}>
            <Link to="/Register">Don't have Account? SignUp Here</Link>
          </Box>
          <Box>
            <Button
              onClick={handleClickSubmit}
              sx={{ mt: "15px" }}
              variant="contained"
            >
              Login
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Login;
