import React from 'react'
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';

function Price(props) {
  const apiKey = "dd8af4cf4da9ee404954be9b2cab6a6e";
  console.log("something")
  // Grabbing the Currency symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol
  // Using the other two variables to create our URL
  // const url = `https://financialmodelingprep.com/api/v3/${symbol}/USD?apikey=${apiKey}`;
  const url= `https://financialmodelingprep.com/api/v4/score?symbol=${symbol}&apikey=${apiKey}`
  const [price, setPrice] = useState("null");

  async function getPrice(){
    const response = await axios.get(url);
    console.log(response)
    const data = await response.json();
    setPrice(data);
  };

  useEffect(() => {
    getPrice();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {price.asset_id_base}/{price.asset_id_quote}
        </h1>
        <h2>{price.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return price && price.rate ? loaded() : loading();

  
};


export default Price