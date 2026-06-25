# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pageDemo.test.ts >> Test pages
- Location: tests\pageDemo.test.ts:3:1

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import{firefox,test} from '@playwright/test';
  2  | 
  3  | test("Test pages",async()=>{
  4  |     const browser = await firefox.launch({headless:false});
  5  |     const context = await browser.newContext();
  6  |     const page = await context.newPage();
  7  |     await page.goto('https://demoblaze.com/');
  8  | 
  9  |     await page.click("//a[@id='login2']");
  10 |     await page.fill("//input[@id='loginusername']","Banton24");
  11 |     await page.fill("//input[@id='loginpassword']","JeriJose.1");
  12 |     await page.click("//button[text()='Log in']");
  13 | 
  14 |     page.waitForTimeout(5000);
  15 | 
  16 |     const page1= await context.newPage();
  17 |     await page1.goto('https://demoblaze.com/');
> 18 |     page1.waitForTimeout(5000);
     |           ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  19 |     await browser.close();
  20 | });
```