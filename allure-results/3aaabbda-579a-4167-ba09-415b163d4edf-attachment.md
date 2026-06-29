# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: groupDemo.test.ts >> Group 1 @regression >> Login Test 4 @test @Demo
- Location: tests\groupDemo.test.ts:48:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Log out' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Log out' })
    - waiting for" https://demoblaze.com/" navigation to finish...
    - navigated to "https://demoblaze.com/"

```

```yaml
- dialog "Log in":
  - document:
    - heading "Log in" [level=5]
    - button "Close"
    - text: "Username:"
    - textbox: Banton24
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
- link:
  - /url: prod.html?idp_=1
- heading "Samsung galaxy s6" [level=4]:
  - link "Samsung galaxy s6":
    - /url: prod.html?idp_=1
- heading "$360" [level=5]
- paragraph: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
- link:
  - /url: prod.html?idp_=2
- heading "Nokia lumia 1520" [level=4]:
  - link "Nokia lumia 1520":
    - /url: prod.html?idp_=2
- heading "$820" [level=5]
- paragraph: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
- link:
  - /url: prod.html?idp_=3
- heading "Nexus 6" [level=4]:
  - link "Nexus 6":
    - /url: prod.html?idp_=3
- heading "$650" [level=5]
- paragraph: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
- link:
  - /url: prod.html?idp_=4
- heading "Samsung galaxy s7" [level=4]:
  - link "Samsung galaxy s7":
    - /url: prod.html?idp_=4
- heading "$800" [level=5]
- paragraph: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
- link:
  - /url: prod.html?idp_=5
- heading "Iphone 6 32gb" [level=4]:
  - link "Iphone 6 32gb":
    - /url: prod.html?idp_=5
- heading "$790" [level=5]
- paragraph: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
- link:
  - /url: prod.html?idp_=6
- heading "Sony xperia z5" [level=4]:
  - link "Sony xperia z5":
    - /url: prod.html?idp_=6
- heading "$320" [level=5]
- paragraph: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
- link:
  - /url: prod.html?idp_=7
- heading "HTC One M9" [level=4]:
  - link "HTC One M9":
    - /url: prod.html?idp_=7
- heading "$700" [level=5]
- paragraph: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
- link:
  - /url: prod.html?idp_=8
- heading "Sony vaio i5" [level=4]:
  - link "Sony vaio i5":
    - /url: prod.html?idp_=8
- heading "$790" [level=5]
- paragraph: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
- link:
  - /url: prod.html?idp_=9
- heading "Sony vaio i7" [level=4]:
  - link "Sony vaio i7":
    - /url: prod.html?idp_=9
- heading "$790" [level=5]
- paragraph: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
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

```
Error: locator.textContent: Test ended.
Call log:
  - waiting for getByRole('link', { name: 'Log out' })

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
  8  |     await page.fill("#loginusername","Banton24")
  9  |     await page.fill("#loginpassword","JeriJose.1")
  10 |     await page.click("//button[text()='Log in']")
  11 | 
  12 |     await expect(page.getByRole("link",{name:"Log out"})).toBeVisible()
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
> 57 |     await expect.soft(page.getByRole("link",{name:"Log out"}).textContent(),"Log out")
     |                                                               ^ Error: locator.textContent: Test ended.
  58 | 
  59 |     
  60 | })
  61 | })
```