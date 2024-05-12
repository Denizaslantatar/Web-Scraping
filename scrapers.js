const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    await page.waitForSelector("#landingImage");
    const imageURL = await page.$eval("#landingImage", (el) => el.src);

    await page.waitForSelector("#title");
    const title = await page.$eval("#title", (el) => el.textContent);

    await page.waitForSelector("#corePrice_feature_div > div > div > span:nth-child(1) > span:nth-child(2) > span:nth-child(1)");
    const price = await page.$eval("#corePrice_feature_div > div > div > span:nth-child(1) > span:nth-child(2) > span:nth-child(1)", (el) => el.textContent);

    console.log({imageURL, title, price});

    browser.close();
}
scrapeProduct("https://www.amazon.com.tr/gp/product/B0BSTDGS5D/ref=ox_sc_saved_image_1?smid=A2420GG4RDOKD2&psc=1");
