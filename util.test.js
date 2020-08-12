const puppeteer = require('puppeteer');
const{generateText, checkAndGenerateText} = require('./util');

test('should output name and age', () => {
    const text = generateText('Max',29);
    expect(text).toBe('Max (29 years old)');
})

test('should generate a valid text out put', () => {
    const text = checkAndGenerateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
})

// test('should click around', async() => {
//     const browser = await puppeteer.launch({
//         headless:false,
//         slowMo:80,
//         args:['--window-size=1920,1080']
//     });
//     // let browser;
//     // const page = await browser.newPage();
   
//     let page;
//     beforeAll(async () => {
//         browser = await puppeteer.launch({
//           headless: false,
//           slowMo:80,
//           args:['--window-size=1920,1080']
//         });
//         page = await browser.newPage();
//         await page.goto("file:///home/nima/Projects/jsTest/js-testing-introduction/index.html");
//       });
//     // page.goto('file:///home/nima/Projects/jsTest/js-testing-introduction/index.html');
//     // page.waitForNavigation({ waitUntil: 'networkidle0' });
//     await page.click('#name');
//     await page.type('input#name','Nima');
//     await page.click('input#age');
//     await page.type('input#age','32');

// })

   
