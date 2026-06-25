import { test, expect } from '@playwright/test';

test("Navigation",async({page})=>{
    await page.goto("https://demoblaze.com/");
    await page.waitForTimeout(2000);

    await page.goto("https://google.com/");
    await page.waitForTimeout(2000);

    await page.goto("https://flipkart.com/");
    await page.waitForTimeout(2000);

    await page.goBack();
    await page.waitForTimeout(2000);

    await page.goBack();
    await page.waitForTimeout(2000);

    await page.goForward();
    await page.waitForTimeout(2000);

    await page.reload();
    await page.waitForTimeout(2000);
});