const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/accounts/login');
  await page.waitFor(5000);
  await page.type('input[type=\"text\"]', 'Hello');
  await page.type('input[type=\"password\"]', 'Hello');
  await page.waitFor(2500);
  await browser.close();
})();
