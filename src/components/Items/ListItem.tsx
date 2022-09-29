import React, { useEffect, useState } from "react";
import axios from "axios";
const ListItem = () => {
  // useState to store data from the fecth
  const [crypto, setCrypto] = useState([]);
  // init axios client

  useEffect(() => {
    axios
      .get("https://thingproxy.freeboard.io/fetch/https://ftx.com/api/markets")
      .then((response) => {
        setCrypto(response.data);
      });
    console.log("crypto", crypto);
  }, []);

  return <li>ListItem</li>;
};

export default ListItem;
