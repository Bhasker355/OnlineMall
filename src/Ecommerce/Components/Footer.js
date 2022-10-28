import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box position="relative">
        <Box
          
          height="40px"
          sx={{
            backgroundColor: "#1976d2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body1" color="white">
            © 2022 ONLINE MALL. All Rights Reserved | Terms and Conditions.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
