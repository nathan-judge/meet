import puppeteer from 'puppeteer';
import { jest } from "@jest/globals";

describe('show/hide an event details', () => {
    let browser
    let page
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 500,
            ignoreDefaultArgs: ["--disable-extensions"], // ignores default setting that causes timeout errors
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/meet');

        await page.waitForSelector('.EventList');
    }, 30000);


    test("An event element is collapsed by default", async () => {
        const eventDetails = await page.$(".eventContainer .eventDetails");
        expect(eventDetails).toBeNull();
    });

    test("User can expand an event to see its details", async () => {
        await page.click(".eventContainer .show-btn");
        const eventDetails = await page.$(".eventContainer .eventDetails");
        expect(eventDetails).toBeDefined();
    });

    test("User can collapse an event to hide its details", async () => {
        await page.click(".eventContainer .show-btn");
        const eventDetails = await page.$(".eventContainer .eventDetails");
        expect(eventDetails).toBeNull();
    });
});
