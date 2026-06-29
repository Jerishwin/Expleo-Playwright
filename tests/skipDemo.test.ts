import {test,expect} from "@playwright/test";

test.only("Login Test 1",async({page})=>{
    await page.goto("https://demoblaze.com/")

    await page.click("#login2")
    await page.fill("#loginusername","Banton24")
    await page.fill("#loginpassword","JeriJose.1")
    await page.click("//button[text()='Log in']")

    await expect(page.getByRole("link",{name:"Log out"})).toBeVisible()
    await expect(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")


})

test("Login Test 2",async({page})=>{
    test.skip(true,"Under Development")
    await page.goto("https://demoblaze.com/")

    await page.click("#login2")
    await page.fill("#loginusername","Banton24")
    await page.fill("#loginpassword","JeriJose.1")
    await page.click("//button[text()='Log in']")

    await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible()
    await expect.soft(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")

    
})

test("Login Test 3",async({page})=>{
    await page.goto("https://demoblaze.com/")

    await page.click("#login2")
    await page.fill("#loginusername","Banton24")
    await page.fill("#loginpassword","JeriJose.1")
    await page.click("//button[text()='Log in']")

    await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible()
    await expect.soft(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")

    
})