import {test,expect} from "@playwright/test";

test.describe("Group 1 @smoke",()=>{
    test("Login Test 1 @Demo",async({page})=>{
    await page.goto("https://demoblaze.com/")

    await page.click("#login2")
    await page.fill("#loginusername","Banton4")
    await page.fill("#loginpassword","JeriJose.1")
    await page.click("//button[text()='Log in']")

    await expect(page.getByRole("link",{name:"Log out"})).toBeVisible()
    await expect(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")


})

test("Login Test 2 @test",async({page})=>{
    await page.goto("https://demoblaze.com/")

    await page.click("#login2")
    await page.fill("#loginusername","Banton24")
    await page.fill("#loginpassword","JeriJose.1")
    await page.click("//button[text()='Log in']")

    await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible()
    await expect.soft(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")

    
})
})

test.describe("Group 1 @regression",()=>{
    test("Login Test 3 @Demo",async({page})=>{
    await page.goto("https://demoblaze.com/")

    await page.click("#login2")
    await page.fill("#loginusername","Banton24")
    await page.fill("#loginpassword","JeriJose.1")
    await page.click("//button[text()='Log in']")

    await expect(page.getByRole("link",{name:"Log out"})).toBeVisible()
    await expect(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")


})

test("Login Test 4 @test @Demo",async({page})=>{
    await page.goto("https://demoblaze.com/")

    await page.click("#login2")
    await page.fill("#loginusername","Banton24")
    await page.fill("#loginpassword","JeriJose.1")
    await page.click("//button[text()='Log in']")

    await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible()
    await expect.soft(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")

    
})
})