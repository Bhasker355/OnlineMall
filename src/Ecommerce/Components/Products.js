import React, { useEffect, useState, createContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import productsDataArr from "./productsDataArr";

const productsDataArrCopy = productsDataArr;
const label = { inputProps: { "aria-label": "Checkbox demo" } };

// export const UserContext = createContext();
const Products = () => {
  // const [] = useState;

  const [laoding, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [filterData, setfilterData] = useState();
  const [noSearchData, setNoSearchData] = useState(false);
  // let productDataPass = true;
  // const [productData, setProductData] = useState([]);
  const [productsCat, setProductsCat] = useState([]);
  const [serchInput, setSerchInput] = useState("");
  const [priceList, setPriceList] = useState([]);
  const [priceLowToHigh, setPriceLowToHigh] = useState(true);
  const [priceHighToLow, setPriceHighToLow] = useState(true);
  const [isLowToHigh, setLowToHigh] = useState(false);
  const [isHighToLow, setHighToLow] = useState(false);
  const [isHighRating, setHighRating] = useState(false);

  // const history = useHistory();
  let componentMounted = true;

  const getProducts = async () => {
    setLoading(true);
    // const response = await fetch("https://fakestoreapi.com/products");
    if (componentMounted) {
      // const resData = await response.json();
      // console.log(resData);
      setProductsData(productsDataArr);
      // setProductData(resData);
      const productsCat = [
        "all",
        ...new Set(productsDataArr.map((data) => data.category)),
      ];
      setProductsCat(productsCat);
      setfilterData(productsDataArr);
      setPriceList(productsDataArr);
      setLoading(false);

      // console.log(productsData);
    }
  };

  const handleClickproductCat = (value) => {
    console.log(value);
    if (value === "all") {
      setfilterData(productsData);
    } else {
      const updateList = productsData.filter((data) => data.category === value);
      setfilterData(updateList);
    }
  };

  useEffect(() => {
    getProducts();

    console.log("Component mounted");
    setNoSearchData(false);

    return () => {
      console.log("Component Unmounted");
      componentMounted = false;
      // setNoSearchData(false);
    };
  }, []);
  const Loading = () => {
    return (
      <h1
        style={{ fontSize: "3em", margin: "15% auto 0 auto", color: "black" }}
      >
        Loading...
      </h1>
    );
  };

  const search = (e) => {
    if (e.target.value !== null) {
      setSerchInput(e.target.value);
    }
  };

  const handleClickSearch = () => {
    console.log("Search");
    if (serchInput !== "") {
      const updateList = productsData.filter(
        (data) =>
          data.category.toLowerCase().includes(serchInput.toLowerCase()) ||
          data.description.toLowerCase().includes(serchInput.toLowerCase()) ||
          data.title.toLowerCase().includes(serchInput.toLowerCase())
      );
      if (updateList.length === 0) {
        setNoSearchData(true);

        setfilterData(updateList);
        // setSerchInput("");
      } else {
        setNoSearchData(false);
        setfilterData(updateList);
      }
    } else {
      setfilterData(productsData);
      setNoSearchData(false);
    }
  };

  const handleClickLowToHigh = () => {
    if (isLowToHigh === false) {
      setLowToHigh(true);
      setHighToLow(false);
      setHighRating(false);
    } else {
      setLowToHigh(false);
      setPriceLowToHigh(!priceLowToHigh);
    }

    setPriceLowToHigh(!priceLowToHigh);
    // setPriceList(productsData)

    if (!isLowToHigh) {
      const updateList = priceList.sort(function (a, b) {
        return a.price - b.price;
      });
      // console.log(priceList);
      // updateList = updateList.map((data, index) => {
      //   data.id = index + 1;
      // });
      setfilterData(updateList);
    } else {
      console.log(isHighToLow);
      console.log(isLowToHigh);
      if (!isHighToLow && isLowToHigh && !isHighRating) {
        const updateList = priceList.sort(function (a, b) {
          return a.id - b.id;
        });
        setfilterData(productsDataArrCopy);
        console.log(productsData);
      }
    }
  };

  const handleClickHighToLow = () => {
    if (isHighToLow === false) {
      setLowToHigh(false);
      setHighToLow(true);
      setHighRating(false);
    } else {
      setHighToLow(false);
      setPriceHighToLow(productsData);
      // console.log(productsData);
    }

    // console.log(isHighToLow);
    setPriceHighToLow(!priceHighToLow);
    if (!isHighToLow) {
      const updateList = priceList.sort(function (a, b) {
        return b.price - a.price;
      });
      // updateList = updateList.map((data, index) => {
      //   data.id = index + 1;
      // });
      setfilterData(updateList);
    } else {
      console.log(isHighToLow);
      console.log(isLowToHigh);
      if (isHighToLow && !isLowToHigh && !isHighRating) {
        const updateList = priceList.sort(function (a, b) {
          return a.id - b.id;
        });
        // setfilterData(productsData);
      }
    }
  };

  const handleClickHighRating = () => {
    if (isHighRating === false) {
      setHighRating(true);
      setLowToHigh(false);
      setHighToLow(false);
    } else {
      setHighRating(false);

      // setPriceHighToLow(productsData);
      // console.log(productsData);
    }

    // console.log(isHighToLow);
    // setPriceHighToLow(!priceHighToLow);
    if (!isHighRating) {
      const updateList = priceList.sort(function (a, b) {
        return b.rating.rate - a.rating.rate;
      });
      // updateList = updateList.map((data, index) => {
      //   data.id = index + 1;
      // });
      setfilterData(updateList);
    } else {
      console.log(isHighToLow);
      console.log(isLowToHigh);
      if (!isHighToLow && !isLowToHigh && isHighRating) {
        const updateList = priceList.sort(function (a, b) {
          return a.id - b.id;
        });
        // setfilterData(productsData);
      }
    }
  };

  return (
    <>
      <Box
        display="flex"
        backgroundColor="inherit "
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        border="none"
        margin="25px auto 5px auto"
        sx={{ flexWrap: "wrap" }}
        component="button"
      >
        {productsCat.map((cat, ind) => (
          <div key={ind}>
            <Typography
              variant="button"
              key={ind}
              onClick={() => handleClickproductCat(cat)}
              color="secondary"
              // variant="contained"
              sx={{
                m: "5px",
                textTransform: "capitalize",
                backgroundColor: "brown",
                color: "white",
                cursor: "pointer",
                p: "10px 10px",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "black",
                },
                fontSize: { sm: "1rem", xs: "0.8rem" },
              }}
            >
              {cat}
            </Typography>
          </div>
        ))}
      </Box>
      <Box
        m="50px 0px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          sx={{ width: { md: "50%", sm: "60%", xs: "70%" } }}
          // onChange={(e) => changInput(setFirstName, e.target.value)}
          id="outlined-basic"
          onChange={search}
          label="Search"
          variant="outlined"
          //  value={serchInput}
          // value={firstName}
        />
        <Button
          onClick={handleClickSearch}
          sx={{ p: "16px 10px" }}
          variant="contained"
        >
          Search
        </Button>
      </Box>
      {noSearchData && (
        <Box
          m="30px 0px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5" color="brown">
            "No Prorducts Found With Search Details"
          </Typography>
        </Box>
      )}
      <Box width="100%" display="flex" flexDirection="row" position="relative">
        {laoding ? (
          ""
        ) : (
          <Box
            position="sticky"
            top="0"
            m="10px 0px 0px 10px"
            sx={{
              width: { xs: "34%", sm: "32%", md: "24%", lg: "18%", xl: "12%" },
            }}
            height="100vh"
            borderRight="1px solid #B0B0B0"
          >
            <Typography
              variant="h6"
              textAlign="center"
              borderBottom="1px solid #B0B0B0"
            >
              Filter
            </Typography>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <Typography>Price Low to High</Typography>
              <Checkbox
                {...label}
                checked={isLowToHigh}
                onClick={handleClickLowToHigh}
              />
            </Box>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <Typography>Price High to Low</Typography>
              <Checkbox
                {...label}
                checked={isHighToLow}
                onClick={handleClickHighToLow}
              />
            </Box>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <Typography>High To Low Rating</Typography>
              <Checkbox
                {...label}
                checked={isHighRating}
                onClick={handleClickHighRating}
              />
            </Box>
          </Box>
        )}
        <Box
          sx={{
            width: { xs: "66%", sm: "68%", md: "76%", lg: "82%", xl: "88%" },
          }}
        >
          <Box
            // width="80%"
            position="relative"
            display="flex"
            flexGrow={1}
            justifyContent="center"
            m="0px auto 10px auto"
            sx={{
              flexWrap: "wrap",
            }}
            component="section"
          >
            {laoding ? (
              <Loading />
            ) : (
              filterData.map((data) => (
                <Box
                  id={data.id}
                  component={Link}
                  to={`/Product/${data.id}`}
                  width="300px"
                  maxWidth="300px"
                  height="100%"
                  margin={3}
                  key={data.id}
                  sx={{ flexGrow: 1, textDecoration: "none" }}
                >
                  <Card
                  // sx={{ maxWidth: "65%" }}
                  >
                    <Box id={data.id}>
                      <CardMedia
                        id={data.id}
                        component="img"
                        image={data.image}
                        alt="green iguana"
                        width="275px"
                        height="150px"
                        sx={{
                          objectFit: "contain",
                          margin: "25px 0px 5px 0px",
                        }}
                      />
                    </Box>
                    <CardContent
                      id={data.id}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textDecoration: "none",
                      }}
                    >
                      <Typography
                        id={data.id}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        {data.title.length <= 18
                          ? data.title
                          : `${data.title.substring(0, 18)}...`}
                      </Typography>
                      <Typography
                        id={data.id}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        variant="h6"
                        sx={{ color: "hsl(290, 100%, 50%)" }}
                      >
                        ${data.price}
                      </Typography>

                      <Box
                        id={data.id}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        mt="8px"
                      >
                        <Typography
                          id={data.id}
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
                          {`${data.rating.rate}`}
                          <Rating
                            id={data.id}
                            max={1}
                            defaultValue={1}
                            size="small"
                          />
                        </Typography>

                        <Typography id={data.id} variant="body1" ml={1}>
                          {`(${data.rating.count})`}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        display: "flex",
                        marginBottom: "5px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    ></CardActions>
                  </Card>
                </Box>
              ))
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Products;
