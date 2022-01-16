import axios from "axios";
export const getCryptoData = ( ) => {
  return axios.get(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR`
  );
};