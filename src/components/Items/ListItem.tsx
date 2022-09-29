import React, { useEffect, useState } from "react";
import { cryptoOptions, fetchData } from "../../utils/fetchData";
import axios from "axios";
const ListItem = () => {
  // useState to store data from the fecth
  const [crypto, setCrypto] = useState({});
  // init axios client

  useEffect(() => {
    const requetData = async () => {
      try {
        const res = await axios
          .get("https://coinranking1.p.rapidapi.com/coins", {
            headers: {
              "X-RapidAPI-Key":
                "dca176bb96msh7e3d79fe0f6de15p1f4f58jsn854fd5ab5c00",
              "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
            },
          })
          .then((response) => {
            return response;
          });
        setCrypto(res.data?.coins[0].name);
        return res;
      } catch (error) {
        console.log(error);
      }
    };
    requetData();
  }, []);
  console.log(crypto);

  return <>li</>;
};

export default ListItem;
