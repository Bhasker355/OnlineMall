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



const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [enterQuery, setEnterQuery] = useState("");
  const [userUserName, setuserUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [existDbData, setExistDbData] = useState("");
  const [submitSt, setSubmitSt] = useState(false);
  const [textFieldErr, setTextFieldErr] = useState(false);
  const [textFieldUserErr, setTextFieldUserErr] = useState(false);
  const [textFieldPassErr, setTextFieldPasErr] = useState(false);
  const [regFormSum, setRegFormSum] = useState(false);

  

  const handleClickSumbit = () => {
    setSubmitSt(!submitSt);
    // console.log(existDbData);
    if (firstName !== "" && lastName !== "" && enterQuery !== "") {
      setRegFormSum(true);
      setTimeout(() => {
        setRegFormSum(false);
      }, 3000);

      //Clear Data
      setFirstName("");
      setLastName("");
      setEnterQuery("");
    } else {
      setTextFieldErr(true);

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
        height="455px"
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
          Contact Form
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
          <Typography mb={1}>Please Enter Your Query</Typography>
          <TextField
            onChange={(e) => changInput(setEnterQuery, e.target.value)}
            id="filled-multiline-flexible"
            label="Please Enter Your Query"
            multiline
            maxRows={4}
            // value={value}
            value={enterQuery}
          />
        </Box>
        
        <Box>
          <Button
            onClick={handleClickSumbit}
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

export default Contact;
