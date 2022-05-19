fetch('../../lib/files/eth-price.json')
     .then(response => response.json())
     .then(data => SetNFTPrice(data.price));

const SetNFTPrice = (price) => {
     price = price.replace("$", "");
     price = price.replace(",", "");
     
     const nft_eth = "6.510";
     let final = ((parseFloat(price) * parseFloat(nft_eth)).toFixed(2));
     final = "$" + final;

     // add comma when necessary
     nft_price_tooltip = final.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};