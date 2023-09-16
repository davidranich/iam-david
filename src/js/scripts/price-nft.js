import { price } from '/public/misc/eth-price.json';

// get current dollar value of ethereum, multiply by 'nft' value, and convert to dollar format
const nft_eth_value = 8.619;
const dollar_value_formatted = (parseFloat(price) * parseFloat(nft_eth_value)).toLocaleString("en-US", { style: "currency", currency: "USD" });

export { dollar_value_formatted } ;