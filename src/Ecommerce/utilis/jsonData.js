// import React from "react";
const fetchDbData = async (url) => {
  const res = await fetch(url);
  return await res.json();
  //   setUserData(resData);
  //   console.log(resData);
  //   const reqData = resData
 
};
fetchDbData();
export { fetchDbData };
