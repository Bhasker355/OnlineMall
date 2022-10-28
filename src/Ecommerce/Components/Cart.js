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
import { UserContext } from "../../App";
import { UserNameContext } from "../../App";

let totalCart = [];

let localCart;


console.log(`totalCart${localStorage.getItem("username")}`);



const Cart = ({ cartData }) => {
  const [cart, setCart] = useState([cartData]);
  const [removeSt, setremoveSt] = useState(false);
  // const [priceSt, setPriceSt] = useState(false);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const userLoginSt = React.useContext(UserContext);
  const userName = React.useContext(UserNameContext);
  console.log(userName);
  console.log(userLoginSt);
  

  useEffect(() => {
    if (userLoginSt) {
      
      let qunty = 0;
      let totalPriceAll = 0;
      console.log(totalQty);
      totalCart.map((item, index) => {
        if (index === 0) {
          qunty = item.qty;
          totalPriceAll = item.qty * item.price;
        } else {
          qunty += item.qty;
          totalPriceAll += item.qty * item.price;
        }
        localStorage.setItem(`totalCart${userName}`, JSON.stringify(totalCart));
        setTotalQty(qunty);
        setTotalPrice(totalPriceAll);
       
      });
    }
    return () => {
      setTotalQty(0);
      console.log(totalQty);
      setTotalPrice(0);
    };
  }, [cartData, removeSt, totalCart, userLoginSt]);

  useEffect(() => {
    if (userLoginSt) {
      
      setCart([{ ...cartData }]);
      if (localStorage.getItem(`totalCart${userName}`) === null) {
        // console.log("Undef");
        localStorage.setItem(`totalCart${userName}`, JSON.stringify([]));
      } else {
        totalCart = JSON.parse(localStorage.getItem(`totalCart${userName}`));
      }

      if (cartData.length !== 0) {
        if (totalCart.length === 0) {
          totalCart = [{ ...cartData, qty: 1 }];
        } else {
          let i = 0;
          while (i < totalCart.length) {
            if (totalCart[i].id === cartData.id) {
              totalCart[i].qty += 1;
              console.log(totalCart[i].qty);
              totalCart = [...totalCart];
              break;
            } else {
              if (totalCart.length - 1 === i) {
                totalCart = [{ ...cartData, qty: 1 }, ...totalCart];
                break;
              }
              i = i + 1;
            }
          }
        }
        localStorage.setItem(`totalCart${userName}`, JSON.stringify(totalCart));
      } else {
        totalCart = totalCart;
        localStorage.setItem(`totalCart${userName}`, JSON.stringify(totalCart));
      }

      console.log(totalCart);
    } else {
      totalCart = [];
    }
    return () => {
      totalCart = [];
    };
  }, [userLoginSt]);
  const removeItem = (id) => {
    totalCart = totalCart.filter((data) => data.id !== id);
    localStorage.setItem(`totalCart${userName}`, JSON.stringify(totalCart));
    setremoveSt(!removeSt);
  };
  useEffect(() => {}, [removeSt]);

  const ShowCartEmpty = () => {
    return (
      <div
        style={{
          width: "100vw",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "2em", marginTop: "10%" }}>
          Your Cart is Empty... Please Add Items to Buy
        </h1>
        <Button
          variant="contained"
          color="success"
          component={Link}
          sx={{ mt: "2rem" }}
          to={`/Products`}
        >
          All Items
        </Button>
      </div>
    );
  };

  const ShowCartLogin = () => {
    return (
      <div
        style={{
          width: "100vw",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "2em", marginTop: "10%" }}>
          Please Login To Show Your Cart Items...
        </h1>
        <Button
          variant="contained"
          color="success"
          component={Link}
          sx={{ mt: "2rem" }}
          to={`/Login`}
        >
          Login
        </Button>
      </div>
    );
  };

  const handleClickQtyAdd = (i) => {
    totalCart[i].qty += 1;
    setremoveSt(!removeSt);

    console.log(i);
  };
  const handleClickQtySub = (i, id) => {
    if (totalCart[i].qty === 1) {
      removeItem(id);
    } else {
      totalCart[i].qty -= 1;
    }
    setremoveSt(!removeSt);

    console.log(i);
  };

  return (
    <>
      <Box
        backgroundColor="white"
        display="flex"
        position="relative"
        sx={{
          justifyContent: { lg: "space-evenly", md: "center" },
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        }}
        margin="10px 50px"

      
      >
        <Box
          width="100%"
          mr={3}
          backgroundColor="white"
          display="flex"
          flexDirection="column"
         
        >
          {userLoginSt === false ? (
            <ShowCartLogin />
          ) : totalCart.length === 0 ? (
            <ShowCartEmpty />
          ) : (
            totalCart.map((data, i) => (
              <Card
                key={i}
                sx={{
                  height: "275px",
                  marginTop: "0px",
                  backgroundColor: "white",

                  borderBottom: "1px solid grey",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Box ml={4} mr={2}>
                  <CardMedia
                    sx={{ objectFit: "contain" }}
                    component="img"
                    height="100"
                    width="100"
                    
                    image={data.image}
                    alt="green iguana"
                  />
                </Box>
                <Box>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                     
                      {data.title}
                    </Typography>
                    <Box
                      sx={{
                        mt: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        ${data.price}
                        <span style={{ fontSize: "0.75rem" }}>/Each</span>
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: "grey",
                          fontWeight: "600",
                          pl: "5px",
                          ml: "10px",
                          border: "1px solid grey",
                          borderRadius: "3px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          flexDirection: "row",
                        }}
                      >
                        {`Qty: ${data.qty}`}
                        <Box
                          sx={{
                            ml: "5px",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            flexDirection: "column",
                          }}
                        >
                          <Button
                            onClick={() => handleClickQtyAdd(i)}
                            size="small"
                            sx={{
                              border: "none",
                              fontWeight: "600",
                              backgroundColor: "lightgreen",
                              color: "darkblue",
                            }}
                          >
                            +
                          </Button>
                          <Button
                            sx={{
                              border: "none",
                              fontWeight: "600",
                              backgroundColor: "brown",
                              color: "darkblue",
                            }}
                            onClick={() => handleClickQtySub(i, data.id)}
                            size="small"
                          >
                            -
                          </Button>
                        </Box>
                      </Typography>
                    </Box>
                    {data.qty > 1 && (
                      <Typography
                        sx={{
                          mt: "10px",
                        }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Total Price : $
                        {Math.round(data.price * data.qty * 100) / 100}
                        <span style={{ fontSize: "0.75rem" }}>
                          /{data.qty} Qty
                        </span>
                      </Typography>
                    )}
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        removeItem(data.id);
                      }}
                      variant="contained"
                      color="error"
                      component={Link}
                      sx={{ mr: "10px" }}
                      to={`/Cart`}
                    >
                      Remove Item
                    </Button>
                  </CardActions>
                </Box>
              </Card>
            ))
          )}
        </Box>
        {userLoginSt && totalCart.length !== 0 && (
          <Box
            top="0"
            p="2px 6px"
            mt={1}
            mr={3}
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            flexDirection="column"
            backgroundColor="#ffffe0"
            position="sticky"
          >
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              m="5px 0px"
              borderBottom="1px solid grey"
            >
              <Typography variant="h6">PRICE DETAILS</Typography>
            </Box>
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              {totalQty > 1 ? (
                <Typography variant="h6">{`Price (${totalQty}items)`}</Typography>
              ) : (
                <Typography variant="h6">{`Price (${totalQty}item)`}</Typography>
              )}
              <Typography variant="h6">
                ${Math.round(totalPrice * 100) / 100}
              </Typography>
            </Box>

            <Box
              m="5px 0px"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">Discount</Typography>

              <Typography variant="h6" color="red">
                NA
              </Typography>
            </Box>
            <Box
              m="5px 0px"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">Delivery Charges</Typography>

              <Typography variant="h6" color="green">
                Free
              </Typography>
            </Box>
            <Box
              m="5px 0px"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              borderBottom="1px solid grey"
              borderTop="1px solid grey"
            >
              <Typography variant="h5" fontWeight={600}>
                Total Amount
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                ${Math.round(totalPrice * 100) / 100}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Cart;
