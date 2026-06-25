import {expect,test} from '@playwright/test';

test('Task3',async({page})=>{
    await page.goto('https://automationexercise.com/');
    await page.getByText(' Signup / Login').click();
    await page.fill("//input[@data-qa='login-email']",'jeri@gmail.com')
    await page.getByPlaceholder('Password').fill("jeri1231313");
    await page.click("//button[text()='Login']");
    await expect(page.locator("//form[@action='/login']/p")).toContainText("incorrect");
})