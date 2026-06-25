import {expect,test} from '@playwright/test';

test('Task2',async({page})=>{
    await page.goto('https://automationexercise.com/');
    await page.getByText(' Signup / Login').click();
    await page.fill("//input[@data-qa='login-email']",'jeri@gmail.com')
    await page.getByPlaceholder('Password').fill("jeri");
    await page.click("//button[text()='Login']");
    await expect(page.locator("//ul[@class='nav navbar-nav']/li[10]/a/b")).toContainText("jeri");
    await page.click("//ul[@class='nav navbar-nav']/li[5]");
    await expect(page.locator("//h2/b")).toContainText("Deleted");
})