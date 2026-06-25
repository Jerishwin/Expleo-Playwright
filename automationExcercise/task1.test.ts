import { test,chromium,expect,Page,Browser } from '@playwright/test';

test("Testcase 1 - Register User",async({page})=>{
   
    await page.goto("https://automationexercise.com/")

    await page.click("//a[normalize-space()='Signup / Login']");

    await page.fill("//input[@placeholder='Name']","Jeri")
    await page.fill("//input[@data-qa='signup-email']","jeri@gmail.com1000")

    await page.click("//button[normalize-space()='Signup']")

    await page.fill("//input[@id='password']","jeri")

    await page.fill("//input[@id='first_name']","jeri")
    await page.fill("//input[@id='last_name']","jose")

    await page.fill("//input[@id='state']","TamilNadu")
    await page.fill("//input[@id='city']","salem")

    await page.fill("//input[@id='address1']","address")
    await page.fill("//input[@id='zipcode']","61122")

    await page.fill("//input[@id='mobile_number']","102020")

    await page.click("//button[normalize-space()='Create Account']")

    await expect("//b[normalize-space()='Account Created!']").toContain("Created")

});