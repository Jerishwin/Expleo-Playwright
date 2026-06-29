# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: skipDemo.test.ts >> Login Test 3
- Location: tests\skipDemo.test.ts:32:1

# Error details

```
Error: locator.textContent: Test ended.
Call log:
  - waiting for getByRole('link', { name: 'Log out' })

```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | 
  3  | test("Login Test 1",async({page})=>{
  4  |     await page.goto("https://demoblaze.com/")
  5  | 
  6  |     await page.click("#login2")
  7  |     await page.fill("#loginusername","Banton24")
  8  |     await page.fill("#loginpassword","JeriJose.1")
  9  |     await page.click("//button[text()='Log in']")
  10 | 
  11 |     await expect(page.getByRole("link",{name:"Log"})).toBeVisible()
  12 |     await expect(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")
  13 | 
  14 | 
  15 | })
  16 | 
  17 | test.skip("Login Test 2",async({page})=>{
  18 |     test.skip(true,"Under Development")
  19 |     await page.goto("https://demoblaze.com/")
  20 | 
  21 |     await page.click("#login2")
  22 |     await page.fill("#loginusername","Banton24")
  23 |     await page.fill("#loginpassword","JeriJose.1")
  24 |     await page.click("//button[text()='Log in']")
  25 | 
  26 |     await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible()
  27 |     await expect.soft(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")
  28 | 
  29 |     
  30 | })
  31 | 
  32 | test("Login Test 3",async({page})=>{
  33 |     await page.goto("https://demoblaze.com/")
  34 | 
  35 |     await page.click("#login2")
  36 |     await page.fill("#loginusername","Banton24")
  37 |     await page.fill("#loginpassword","JeriJose.1")
  38 |     await page.click("//button[text()='Log in']")
  39 | 
  40 |     await expect.soft(page.getByRole("link",{name:"Log"})).toBeVisible()
> 41 |     await expect.soft(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")
     |                                                               ^ Error: locator.textContent: Test ended.
  42 | 
  43 |     
  44 | })
```