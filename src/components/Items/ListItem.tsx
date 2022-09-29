import React, { useEffect, useState } from "react";
import { cryptoOptions, fetchData } from "../../utils/fetchData";
import axios from "axios";
const ListItem = () => {
  // useState to store data from the fecth
  const [crypto, setCrypto] = useState([]);
  // init axios client

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dca176bb96msh7e3d79fe0f6de15p1f4f58jsn854fd5ab5c00",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const fetchData = () => {
    fetch(
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=5k-_VTxqtCEI&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
      options
    )
      .then((response) => response.json())
      .then((response) => setCrypto(response.data))
      .catch((err) => console.error(err));
  };
  console.log(crypto[1]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {Array.isArray(crypto) ? (
        crypto.map((element) => {
          return <h2>{element}</h2>;
        })
      ) : (
        <h2>no data</h2>
      )}
    </>
  );
};

export default ListItem;
