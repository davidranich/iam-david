import * as data from '../../lib/files/eth-price.json';

// fetch('../../lib/files/eth-price.json')
//      .then(response => response.json())
//      .then(data => SetNFTPrice(data.price));

const SetNFTPrice = (price) => {
     let nft_price_tooltip;
     price = price.replace("$", "");
     price = price.replace(",", "");
     
     const nft_eth = "8.619";
     let final = ((parseFloat(price) * parseFloat(nft_eth)).toFixed(2));
     final = "$" + final;

     // add comma(s) when necessary
     return nft_price_tooltip = final.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

let nft_usd_price = SetNFTPrice(data.price);

export { data, SetNFTPrice };