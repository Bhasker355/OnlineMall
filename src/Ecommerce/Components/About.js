import { Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const About = () => {
  return (
    <>
      <Container
        sx={{
          margin: {
            md: "100px auto 100px auto",
            sm: "75px auto 75px auto",
            xs: "40px auto 40px auto",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            color="#17B169"
            sx={{
              width: { lg: "390px", md: "355px", sm: "325px", xs: "260px" },

              mb: "20px",
              borderBottom: "2px solid brown",
              fontSize: { lg: "3rem", md: "2.75rem", sm: "2.5rem", xs: "2rem" },
            }}
          >
            About Online Mall
          </Typography>
        </Box>
        <Typography
          sx={{
            m: "0px 15px",
            fontSize: { sm: "1.15rem", xs: "1rem" },
          }}
        >
          Online Mall is a form of electronic commerce, it allows consumers to
          directly buy goods or products from a seller over the Internet using a
          web browser or a mobile application. Customers can purchase items from
          the comfort of their own homes or workplace. Shopping is made easier
          and convenient for the customer through the internet. It is also easy
          to cancel the transactions
        </Typography>
      </Container>
    </>
  );
};

export default About;
