import * as data from '/public/misc/eth-price.json';

const SetNFTPrice = (price) => {
     price = price.replace("$", "");
     price = price.replace(",", "");
     
     const nft_eth = "8.619";
     let final = ((parseFloat(price) * parseFloat(nft_eth)).toFixed(2));
     final = "$" + final;

     // add comma(s) when/where necessary
     final = final.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

     return final;
};

const nft_usd_price = data.price;
const nft_eth_conversion = SetNFTPrice(nft_usd_price);

function average(score1, score2, score3) {
     return (score1 + score2 + score3) / 3;
}

export { nft_eth_conversion };