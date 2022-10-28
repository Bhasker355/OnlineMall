// import { Switch } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./Ecommerce/Components/Navbar";
import Home from "./Ecommerce/Home";
import Products from "./Ecommerce/Components/Products";
import Cart from "./Ecommerce/Components/Cart";
import Register from "./Ecommerce/Components/Register";
import Login from "./Ecommerce/Components/Login";
import About from "./Ecommerce/Components/About";
import Contact from "./Ecommerce/Components/Contact";
import NotFound from "./Ecommerce/Components/BlankPage";
import Product from "./Ecommerce/Components/Product";

export const UserContext = createContext();
export const UserNameContext = createContext();

const App = () => {
  const [productData, setProductData] = useState([]);
  const [cartSt, setCartSt] = useState(false);
  // const [loginStatus, setLoginStatus] = useState(false);
  const [userLoginSt, setUserLoginSt] = useState(false);
  const [userName, setUserName] = useState();

  const prodData = (data) => {
    setProductData(data);
    setCartSt(!cartSt);
    // // console.log(productData);
    // PData = data
  };
  // const prodDataNo = (cart) => {
  //   setProductData(cart);

  const logOutStatus = (f) => {
    setUserLoginSt(false);
    console.log(userLoginSt);
  };

  const logInStatus = (t) => {
    setUserLoginSt(true);
    console.log(userLoginSt);
  };

  // };
  useEffect(() => {
    return () => {
      setProductData([]);
    };
  }, [cartSt]);

  useEffect(() => {
    // let userName;
    console.log(localStorage.getItem("username", userName));
    if (localStorage.getItem("username", userName) !== null) {
      setUserLoginSt(true);
      setUserName(localStorage.getItem("username", userName));
      console.log(userLoginSt);
    } else {
      setUserLoginSt(false);
    }
  }, [userLoginSt]);

  return (
    <>
      <UserContext.Provider value={userLoginSt}>
        <UserNameContext.Provider value={userName}>
          <Navbar onLogOutClick={logOutStatus} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            {/* {loginStatus === false && <Route path="/Login" element={<Login />} />} */}
            <Route
              path="/Login"
              element={<Login onLogInClick={logInStatus} />}
            />

            <Route path="/Register" element={<Register />} />
            <Route
              path="/Cart"
              element={
                <Cart
                  cartData={productData}
                  // onClickCart={prodDataNo}
                />
              }
            />
            <Route
              path="/Product/:id"
              element={<Product onClickAddCart={prodData} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserNameContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default App;
