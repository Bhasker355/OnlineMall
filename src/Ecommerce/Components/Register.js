import React, { useEffect, useState } from "react";
import {
  TextField,
  FormControlLabel,
  Box,
  Typography,
  Button,
  Alert,
  Stack,
} from "@mui/material";
import { Container } from "@mui/system";

// import { fetchDbData } from "../utilis/jsonData";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userUserName, setuserUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [existDbData, setExistDbData] = useState("");
  const [submitSt, setSubmitSt] = useState(false);
  const [textFieldErr, setTextFieldErr] = useState(false);
  const [textFieldUserErr, setTextFieldUserErr] = useState(false);
  const [textFieldPassErr, setTextFieldPasErr] = useState(false);
  const [regFormSum, setRegFormSum] = useState(false);

  useEffect(() => {
    // const fetchDbData = async () => {
    //   const res = await fetch("http://localhost:8000/auth");
    //   const resData = await res.json();
    //   setExistDbData(resData);
    //   // console.log(existDbData);
    // };
    // fetchDbData();
    // localStorage.removeItem(`usersData`)
    if (localStorage.getItem(`usersData`) === null) {
      // console.log("Undef");
      localStorage.setItem(`usersData`, JSON.stringify([]));
      setExistDbData(JSON.parse(localStorage.getItem(`usersData`)));
    } else {
      setExistDbData(JSON.parse(localStorage.getItem(`usersData`)));
    }

    // console.log(existDbData);
  }, [submitSt]);

  const handleClickRegSubmit = () => {
    setSubmitSt(!submitSt);
    console.log(existDbData);
    if (
      firstName !== "" &&
      lastName !== "" &&
      userUserName !== "" &&
      userPassword !== ""
    ) {
      // existDbData.map((jsonData) => {
      //   if (jsonData.userName === userUserName) {
      //     setTextFieldErr(true);
      //     setTextFieldUserErr(true);
      //     setTimeout(() => {
      //       setTextFieldErr(false);
      //       setTextFieldUserErr(false);
      //     }, 3000);
      //   }

      // });
      if (existDbData.length === 0) {
        let newUser = {
          id: 1,
          userName: userUserName,
          password: userPassword,
        };
        // setExistDbData(newUser);
        setRegFormSum(true);
        setTimeout(() => {
          setRegFormSum(false);
        }, 3000);
        localStorage.setItem(`usersData`, JSON.stringify([newUser]));
        setFirstName("");
        setLastName("");
        setuserUserName("");
        setuserPassword("");
        setExistDbData("");
      } else {
        const checkUserName = (userData) => {
          if (userData.userName === userUserName) {
            return userUserName;
          }
        };

        //Checking UserName exists
        if (existDbData.find(checkUserName)) {
          setTextFieldErr(true);
          setTextFieldUserErr(true);
          setTimeout(() => {
            setTextFieldErr(false);
            setTextFieldUserErr(false);
          }, 3000);
        } else {
          //Post Data
          // fetch("http://localhost:8000/auth", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify({
          //     userName: userUserName,
          //     password: userPassword,
          //     totalCart: [],
          //   }),
          // }).then((res) => res.json());

          let newUser = {
            id: existDbData.length + 1,
            userName: userUserName,
            password: userPassword,
          };
          // setExistDbData([...existDbData, newUser]);
          setRegFormSum(true);
          setTimeout(() => {
            setRegFormSum(false);
          }, 3000);
          // .then((data) => rederPost());
          localStorage.setItem(
            `usersData`,
            JSON.stringify([...existDbData, newUser])
          );
          //Clear Data
          setFirstName("");
          setLastName("");
          setuserUserName("");
          setuserPassword("");
          setExistDbData("");
        }
      }
    } else {
      setTextFieldErr(true);
      // alert("Please Fill All Text Fields");
      setTimeout(() => {
        setTextFieldErr(false);
      }, 3000);
    }
    setSubmitSt(!submitSt);
  };

  const changInput = (setTarget, value) => {
    setTarget(value);
    console.log(value);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="350px"
        height="545px"
        sx={{
          margin: "6vh auto",
          backgroundColor: "#FAF9F6",
          border: "1px solid grey",
          borderRadius: "10px",
        }}
      >
        {textFieldErr && (
          <Stack sx={{ width: "100%", textAlign: "center" }} spacing={2}>
            <Alert severity="error">
              {textFieldUserErr
                ? "User Name Alerady Exists"
                : "Please Fill All Text Fields!"}
            </Alert>
          </Stack>
        )}
        {regFormSum && (
          <Stack sx={{ width: "100%", textAlign: "center" }} spacing={2}>
            <Alert severity="success">You are Successfully Sumbited Form</Alert>
          </Stack>
        )}
        <Typography
          variant="h5"
          mb={1}
          color="brown"
          borderBottom="1px solid grey"
        >
          Registration Form
        </Typography>
        <Box>
          <Typography mb={1}>First Name</Typography>
          <TextField
            onChange={(e) => changInput(setFirstName, e.target.value)}
            id="outlined-basic"
            label="FirstName"
            variant="outlined"
            value={firstName}
          />
        </Box>
        <Box mt={2}>
          <Typography mb={1}>Last Name</Typography>
          <TextField
            onChange={(e) => changInput(setLastName, e.target.value)}
            id="outlined-basic"
            label="LastName"
            variant="outlined"
            value={lastName}
          />
        </Box>
        <Box mt={2}>
          <Typography mb={1}>Select User Name</Typography>
          <TextField
            onChange={(e) => changInput(setuserUserName, e.target.value)}
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            value={userUserName}
          />
        </Box>
        <Box mt={2}>
          <Typography mb={1}>Select Password</Typography>
          <TextField
            onChange={(e) => changInput(setuserPassword, e.target.value)}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={userPassword}
          />
        </Box>
        <Box>
          <Button
            onClick={handleClickRegSubmit}
            sx={{ mt: "15px" }}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Register;
