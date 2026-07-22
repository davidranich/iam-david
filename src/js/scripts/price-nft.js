import { price } from '/public/misc/eth-price.json';

// get current dollar value of ethereum, multiply by 'nft' value, and convert to dollar format
const nft_eth_value = 8.619;
const formatDollarValue = (eth_price) => (parseFloat(eth_price) * parseFloat(nft_eth_value)).toLocaleString("en-US", { style: "currency", currency: "USD" });

// start with the static price as a fallback, then update with the live price from coingecko
let dollar_value_formatted = formatDollarValue(price);

fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
     .then((response) => {
          if (!response.ok) {
               throw new Error('coingecko response not ok: ' + response.status);
          }
          return response.json();
     })
     .then((data) => {
          const live_price = data?.ethereum?.usd;
          if (typeof live_price === 'number') {
               dollar_value_formatted = formatDollarValue(live_price);
          }
     })
     .catch((error) => {
          console.log('could not fetch live eth price, using static fallback:', error);
     });

export { dollar_value_formatted } ;