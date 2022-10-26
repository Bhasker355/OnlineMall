import { EventNote } from "@mui/icons-material";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1cd08af6d8msh988e992b1e07813p16391ajsncf0efd71bb85",
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

// export const options = {
//   method: "GET",
//   url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
//   headers: {
//     "X-RapidAPI-Key": "1cd08af6d8msh988e992b1e07813p16391ajsncf0efd71bb85",
//     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//   },
// };
