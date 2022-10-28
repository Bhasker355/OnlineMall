import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import productsDataArr from "./productsDataArr";

const Product = (props) => {
  const [productData, setProductData] = useState([]);
  // const [productsData, setProductsData] = useState([]);
  const [laoding, setLoading] = useState(true);
  const { id } = useParams();
  // const productData = {productData};
  // let componentMounted = true;

  const getProducts = async () => {
    setLoading(true);
    // const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    // // if (componentMounted) {
    // const resData = await response.json();
    // // setProductsData(resData);
    // // const prodData = productsData.filter((item) => item.id === id);
    setProductData(productsDataArr[id-1]);
    setLoading(false);
    console.log(productData);
    // }
  };

  useEffect(() => {
    getProducts();
    console.log(productData);
    console.log("Component mounted");

    // return () => {
    //   console.log("Component Unmounted");
    //   componentMounted = false;
    // };
  }, []);

  // const ShowProduct = () => {
  //   return <div>Cat:{productData.category}</div>;
  // }
  const Loading = () => {
    return (
      <h1
        style={{
          textAlign: "center",
          fontSize: "3em",
          margin: "15% auto 0 auto",
        }}
      >
        Loading...
      </h1>
    );
  };

  const cartData = () => {
    props.onClickAddCart(productData);
  };
  // console.log(productData);
  return (
    <>
      {/* <ShowProduct /> */}
      {laoding ? (
        <Loading />
      ) : (
        <Card
          sx={{
            width: { md: "70%", sm: "70%", xs: "90%" },
            p: "50px 0 200px 0",
            m: "0px auto 0px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <CardMedia
            sx={{
              m: "0px 10px ",
              objectFit: "contain",
              height: { md: "300px", sm: "200px", xs: "150px" },
              width: { md: "300px", sm: "200px", xs: "150px" },
            }}
            component="img"
            // height="300"
            // width="300"
            image={productData.image}
            alt="green iguana"
          />
          <Box mt={3} height="600" width="600">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {productData.title}
              </Typography>

              <Box display="flex" alignItems="center" mt="10px">
                <Typography
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  variant="body1"
                  p="0px 8px"
                  sx={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "5px",
                  }}
                >
                  {`${productData.rating.rate}`}
                  <Rating max={1} defaultValue={1} size="small" />
                </Typography>

                <Typography variant="body1" ml={1}>
                  {`(${productData.rating.count})`}
                </Typography>
              </Box>
              <Typography gutterBottom variant="h4" component="div" mt={2}>
                ${productData.price}
              </Typography>
              <Typography width="60%" variant="body1" color="text.primary">
                {productData.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={cartData}
                variant="contained"
                component={Link}
                sx={{ mr: "10px" }}
                to={`/Cart`}
              >
                Add To Cart
              </Button>
              {/* <Button variant="contained">Buy Now</Button> */}
            </CardActions>
          </Box>
        </Card>
      )}
    </>
  );
};

export default Product;
