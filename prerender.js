const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const routes = [
    '/',
    '/about',
    '/sectors',
    '/knowledge',
    '/contact'
  ];

  for (let route of routes) {
    const outputPath = path.join(__dirname, 'docs', route === '/' ? 'index.html' : `${route}/index.html`);
    await page.goto(`http://localhost:1234${route}`, { waitUntil: 'networkidle2' });
    const content = await page.content();
    await fs.outputFile(outputPath, content);
    console.log(`Pre-rendered: ${route}`);
  }

  await browser.close();
})();