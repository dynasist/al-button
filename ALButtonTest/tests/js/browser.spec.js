const puppeteer = require('puppeteer');
const config = JSON.parse(process.env.__CONFIGURATION);

test('Control Add-ins loaded', async () => {
    let expected = [4, 1, 1];
    let actual = await addinLoader();

    expect(actual).toEqual(expected);
}, 20000);

const addinLoader = async () => {
    try {        
        let debug = false;
        const browser = await puppeteer.launch({ headless: !debug });
        const page = await browser.newPage();
        await page.goto(config.url);

        await page.type('#UserName', config.username);
        await page.type('#Password', config.password);
        await page.click('#submitButton');

        const mainFrameSelector = 'iframe.designer-client-frame';
        await page.waitFor(5000);

        await page.waitForSelector(mainFrameSelector);
        const elementHandle = await page.$(mainFrameSelector);
        const frame = await elementHandle.contentFrame();

        const elems = await frame.childFrames();

        let result = [];
        for (let elem of elems) {
            let btn = await elem.$$('.al-button');
            await btn[0].click();
            await page.waitFor(500);
            let msgBtn = await frame.$('.dialog-action-bar button');
            await msgBtn.click();
            await page.waitFor(500);
            result.push(btn.length);

            await msgBtn.dispose();
        }

        await elementHandle.dispose();

        await browser.close();

        return result;
    }
    catch (e) {
        console.log(e);
    }
};