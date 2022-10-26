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
// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

const Navbar = (props) => {
  // let cart = [];
  // const cartDataNo = (e) => {
  //   e.preventDefault();

  //   props.onClickCart([]);
  // };
  const [logOutSt, setLogOutSt] = useState(false);
  const userLoginSt = useContext(UserContext);
  console.log(userLoginSt);

  // useEffect(() => {}, [userLoginSt]);

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
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }} 
          >
            <MenuIcon />
          </IconButton> */}
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
            {/* <IconButton sx={{ border: "1px solid blaack" }}>
              <LoginSharpIcon fontSize="10px" />
              <Link
                to="/Login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </IconButton> */}
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
                  {/* <IconButton
                    sx={{
                      fontSize: { xs: "1rem", md: "1.5rem", sm: "1.25rem" },
                    }}
                  >
                    <LoginSharpIcon />
                  </IconButton> */}
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

            {/* <IconButton sx={{ border: "1px solid blaack" }}>
              <HowToRegSharpIcon />
              <Link
                to="/Register"
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </Link>
            </IconButton> */}
            <Typography
              variant="h6"
              px="15px"
              sx={{ fontSize: { xs: "1rem", md: "1.5rem", sm: "1.25rem" } }}
            >
              <Link
                // onClick={(e)=>{
                //   e.preventDefault();
                //   console.log(props.onClickCart(cart))}}
                to="/Cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                {/* <IconButton size="50%">
                  <ShoppingCartSharpIcon />
                </IconButton> */}
                Cart
              </Link>
            </Typography>
          </Stack>

          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
