import React from 'react'
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function Price(props) {
  const apiKey = "7615102C-4C3F-4426-9F62-12C82ED78311";
  // Grabbing the Currency symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol
  // Using the other two variables to create our URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
  const [coin, setCoin] = useState("null");

  const getCoin = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data);
  };

  useEffect(() => {
    getCoin();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin && coin.rate ? loaded() : loading();

  
};

export default Price