import 'dotenv/config';
import puppeteer from 'puppeteer';
const DEBUG = process.env.NODE_ENV === 'development' || false;

(async () => {
  const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/accounts/login');
  await page.waitFor(5000);
  await page.type('input[type=\"text\"]', process.env.USERNAME);
  await page.type('input[type=\"password\"]', process.env.PASSWORD);
  await page.waitFor(10000);
  await browser.close();
})();
