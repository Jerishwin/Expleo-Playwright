# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dataDrivenDemo.test.ts >> Valid Login-Banton24
- Location: tests\dataDrivenDemo.test.ts:15:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#nameofuser')
Expected substring: "Welcome ${data.username}"
Received string:    "Welcome Banton24"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#nameofuser')
    14 × locator resolved to <a href="#" id="nameofuser" class="nav-link">Welcome Banton24</a>
       - unexpected value "Welcome Banton24"

```

```yaml
- link "Welcome Banton24":
  - /url: "#"
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import loginData from "../testData/loginData.json" with { type: "json" };
  3  | 
  4  | interface LoginData{
  5  |     testname: string
  6  |     username: string
  7  |     password: string
  8  |     expextedResult: "Success" | "Failure"
  9  |     expectedMessage:string
  10 | }
  11 | 
  12 | const users = loginData as LoginData[];
  13 | 
  14 | for(const data of users){
  15 |     test(`${data.testname}-${data.username||"Blank Username"}`,async({page})=>{
  16 |         await page.goto("https://demoblaze.com/")
  17 | 
  18 |         await page.click("#login2")
  19 |         await page.fill("#loginusername",data.username)
  20 |         await page.fill("#loginpassword",data.password)
  21 | 
  22 |         if(data.expextedResult=="Failure"){
  23 |             page.once("dialog",async dialog=>{
  24 |                 expect(dialog.message()).toBe(data.expectedMessage)
  25 |                 await dialog.accept()
  26 |             })
  27 |         }
  28 | 
  29 |         await page.click("//button[text()='Log in']");
  30 | 
  31 |         if(data.expextedResult==="Success"){
  32 |             //await page.waitForTimeout(2000)
  33 |             await expect(page.locator("#nameofuser")).toBeVisible({timeout:10000})
  34 | 
> 35 |             await expect(page.locator("#nameofuser")).toContainText('Welcome ${data.username}')
     |                                                       ^ Error: expect(locator).toContainText(expected) failed
  36 |         }
  37 |     })
  38 | }
```