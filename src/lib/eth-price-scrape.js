// install puppeteer
// scrape some crypto website for ethereum price
// save to json file

// in js file, fetch json value 
// find formula to convert ethereum to usd
// set tooltip value

const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
     const browser = await puppeteer.launch({ headless: true });
     const page = await browser.newPage();
     await page.goto('https://coinmarketcap.com/currencies/ethereum/');
     const html = await page.$eval('.priceValue>span', (e) => e.innerHTML);
     
     const content = {
          "price": html
     };

     fs.writeFile('./src/lib/eth-price.json', JSON.stringify(content), err => {
          if (err) {
               console.error(err);
          }
          console.log('Success!');
     });  
     await browser.close();
})();
