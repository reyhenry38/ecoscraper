


const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    await page.goto('https://www.foreyes.com/sunglasses');
    await page.click('#load-products > div:nth-child(1) > div > div > div > div.glass-wrap').next();
    await page.waitFor(1000);

    const result = await page.evaluate(() => {
        let title = document.querySelector('h1').innerText;
        // let price = document.querySelector('.price_color').innerText;

        return {
            title
            
        }

    });

    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value); // Success!
});

