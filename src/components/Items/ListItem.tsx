import React, { useEffect, useState } from "react";
import axios from "axios";
const ListItem = () => {
  // useState to store data from the fecth
  const [crypto, setCrypto] = useState([]);
  // init axios client

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "dca176bb96msh7e3d79fe0f6de15p1f4f58jsn854fd5ab5c00",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const fetchData = () => {
    axios
      .request(options)
      .then(function (response) {
        setCrypto(response.data.data.coins);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const items = crypto.map((item) => {
    console.log(item);

    return (
      <li>
        {item.name} - {item.symbol}
      </li>
    );
  });
  return <>{items}</>;
};

export default ListItem;
