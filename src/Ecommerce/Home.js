import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Product from "./Components/Product";
import BannerImage from "./utilis/ecommerce-2140604_1920.jpg";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <>
      <Box position="relative">
        <Card>
          <Box
            width="325px"
            sx={{ position: "absolute", left: "50%", textAlign: "center" }}
          >
            <CardContent
              sx={{
                color: "brown",
                position: "relative",
                top: "0px",
                left: "-50%",
                fontSize: {
                  lg: "2.75rem",
                  md: "2.25rem",
                  sm: "1.75rem",
                  xs: "1.25rem",
                },
              }}
            >
              Welcome to Online Shopping Mall
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            image={BannerImage}
            alt="green iguana"
            // width="275px"
            // height={100}
            sx={{ objectFit: "contain" }}
          />
        </Card>
      </Box>
      <About />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          color="#17B169"
          sx={{
            width: { lg: "195px", md: "175px", sm: "160px", xs: "125px" },

            mb: "20px",
            borderBottom: "2px solid brown",
            fontSize: { lg: "3rem", md: "2.75rem", sm: "2.5rem", xs: "2rem" },
          }}
        >
          Products
        </Typography>
      </Box>
      <Products />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
