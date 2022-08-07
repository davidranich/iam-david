const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
     const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
     const page = await browser.newPage();
     let usd_value;
     await page.goto('https://coinmarketcap.com/currencies/ethereum/');

     try {
          usd_value = await page.$eval('.priceValue>span', element => element.innerHTML);
     } catch (error) {
          console.error("Element wasn't found, closing browser session.");
          return await browser.close();
     }
     
     const content = {
          "price": usd_value
     };

     fs.writeFile('public/misc/eth-price.json', JSON.stringify(content), error => {
          if (error) { return console.error(error); }
          return console.log('Price scraped and saved as eth-price.json');
     });  
     await browser.close();
})();