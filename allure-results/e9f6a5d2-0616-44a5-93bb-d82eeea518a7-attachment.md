# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: groupDemo.test.ts >> Group 1 @smoke >> Login Test 1 @Demo
- Location: tests\groupDemo.test.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Log out' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Log out' })

```

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: Banton4
    - text: "Password:"
    - textbox: JeriJose.1
    - button "Close"
    - button "Log in"
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - img "Second slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | 
  3  | test.describe("Group 1 @smoke",()=>{
  4  |     test("Login Test 1 @Demo",async({page})=>{
  5  |     await page.goto("https://demoblaze.com/")
  6  | 
  7  |     await page.click("#login2")
  8  |     await page.fill("#loginusername","Banton4")
  9  |     await page.fill("#loginpassword","JeriJose.1")
  10 |     await page.click("//button[text()='Log in']")
  11 | 
> 12 |     await expect(page.getByRole("link",{name:"Log out"})).toBeVisible()
     |                                                           ^ Error: expect(locator).toBeVisible() failed
  13 |     await expect(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")
  14 | 
  15 | 
  16 | })
  17 | 
  18 | test("Login Test 2 @test",async({page})=>{
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
  31 | })
  32 | 
  33 | test.describe("Group 1 @regression",()=>{
  34 |     test("Login Test 3 @Demo",async({page})=>{
  35 |     await page.goto("https://demoblaze.com/")
  36 | 
  37 |     await page.click("#login2")
  38 |     await page.fill("#loginusername","Banton24")
  39 |     await page.fill("#loginpassword","JeriJose.1")
  40 |     await page.click("//button[text()='Log in']")
  41 | 
  42 |     await expect(page.getByRole("link",{name:"Log out"})).toBeVisible()
  43 |     await expect(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")
  44 | 
  45 | 
  46 | })
  47 | 
  48 | test("Login Test 4 @test @Demo",async({page})=>{
  49 |     await page.goto("https://demoblaze.com/")
  50 | 
  51 |     await page.click("#login2")
  52 |     await page.fill("#loginusername","Banton24")
  53 |     await page.fill("#loginpassword","JeriJose.1")
  54 |     await page.click("//button[text()='Log in']")
  55 | 
  56 |     await expect.soft(page.getByRole("link",{name:"Log out"})).toBeVisible()
  57 |     await expect.soft(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")
  58 | 
  59 |     
  60 | })
  61 | })
```