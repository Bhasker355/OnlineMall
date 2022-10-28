import React, { useEffect, useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import HowToRegSharpIcon from "@mui/icons-material/HowToRegSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { UserContext } from "../../App";

const Navbar = (props) => {
 
  const [logOutSt, setLogOutSt] = useState(false);
  const userLoginSt = useContext(UserContext);
  console.log(userLoginSt);

 

  const logOut = () => {
    if (window.confirm("Are You Sure Want to Logout?") === true) {
      // localStorage.clear();
      localStorage.removeItem("username");
      props.onLogOutClick(false);
      setLogOutSt(!logOutSt);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-around" }}>
 
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{
              flexGrow: 1,
              display: { sm: "none", xs: "none", md: "block" },
              textTransform: "uppercase",
            }}
          >
            Online Mall
          </Typography>

          <Stack
            sx={{ flexDirection: "row", flexGrow: 1, alignItems: "center" }}
          >
            <Typography
              variant="h6"
              px="15px"
              sx={{ fontSize: { xs: "1rem", md: "1.5rem", sm: "1.25rem" } }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </Typography>
            <Typography
              variant="h6"
              px="15px"
              sx={{ fontSize: { xs: "1rem", md: "1.5rem", sm: "1.25rem" } }}
            >
              <Link
                to="/About"
                style={{ textDecoration: "none", color: "white" }}
              >
                About
              </Link>
            </Typography>
            <Typography
              variant="h6"
              px="15px"
              sx={{ fontSize: { xs: "1rem", md: "1.5rem", sm: "1.25rem" } }}
            >
              <Link
                to="/Products"
                style={{ textDecoration: "none", color: "white" }}
              >
                Products
              </Link>
            </Typography>

            <Typography
              variant="h6"
              px="15px"
              sx={{ fontSize: { xs: "1rem", md: "1.5rem", sm: "1.25rem" } }}
            >
              <Link
                to="/Contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                Contact
              </Link>
            </Typography>
          </Stack>
          <Stack sx={{ flexDirection: "row" }}>
            
            {userLoginSt ? (
              <Typography
                variant="h6"
                px="15px"
                sx={{ fontSize: { xs: "1rem", md: "1.5rem", sm: "1.25rem" } }}
              >
                <Link
                  to="/Login"
                  style={{ textDecoration: "none", color: "white" }}
                  onClick={logOut}
                >
                  Logout
                  
                </Link>
              </Typography>
            ) : (
              <Typography
                variant="h6"
                px="15px"
                sx={{ fontSize: { xs: "1rem", md: "1.5rem", sm: "1.25rem" } }}
              >
                <Link
                  to="/Login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {/* <IconButton>
                    <LoginSharpIcon />
                  </IconButton> */}
                  Login
                </Link>
              </Typography>
            )}

            
            <Typography
              variant="h6"
              px="15px"
              sx={{ fontSize: { xs: "1rem", md: "1.5rem", sm: "1.25rem" } }}
            >
              <Link
            
                to="/Cart"
                style={{ textDecoration: "none", color: "white" }}
              >
            
                Cart
              </Link>
            </Typography>
          </Stack>

          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
