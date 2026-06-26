# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testmu.test.ts >> prompt alerts
- Location: tests\testmu.test.ts:55:1

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import {expect,test} from '@playwright/test';
  2  | 
  3  | test('DemoTestmu',async({page})=>{
  4  |     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
  5  |     const placeHolder = page.locator("//input[@id='user-message']");
  6  |     console.log(await placeHolder.getAttribute('placeholder'));
  7  |     console.log('Before entering value: '+ await placeHolder.inputValue());
  8  |     await placeHolder.pressSequentially("Jerish",{delay:100});
  9  |     await page.click("//button[@id='showInput']");
  10 |     console.log('After entering value: '+ await placeHolder.inputValue());
  11 |     await expect(page.locator("//p[@id='message']")).toContainText("Jerish");
  12 | });
  13 | 
  14 | test('sumTest',async({page})=>{
  15 |     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
  16 |     const a = 20;
  17 |     const b = 30;
  18 |     const input1 = page.locator("#sum1");
  19 |     const input2 = page.locator("#sum2");
  20 |     await input1.pressSequentially(a.toString(),{delay:100});
  21 |     await input2.fill(b.toString());
  22 |     await page.waitForTimeout(5000);
  23 |     const box = page.locator("//button[text()='Get Sum']");
  24 |     console.log(await box.boundingBox());
  25 |     await box.click();
  26 |     const sum = page.locator("//p[@id='addmessage']"); 
  27 |     await expect(sum).toContainText((a+b).toString());
  28 | 
  29 | });
  30 | 
  31 | test('simple alerts',async({page})=>{
  32 |     await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
  33 |     page.on('dialog',async(alert)=>{
  34 |         console.log(alert.message());
  35 |         await alert.accept();
  36 |         console.log("Alert Accepted!");
  37 |     });
  38 |     await page.click("//p[text()='JavaScript Alerts']/button");
  39 | 
  40 | });
  41 | 
  42 | test('confirm alerts',async({page})=>{
  43 |     await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
  44 |     page.on('dialog',async(alert)=>{
  45 |         console.log(alert.message());
  46 |         await alert.dismiss();
  47 |         console.log("Alert dismised!");
  48 |     });
  49 |     await page.click("//p[text()='Confirm box:']/button");
  50 |     const msg = await page.locator("//p[@id='confirm-demo']").textContent();
  51 |     console.log(msg);
  52 | 
  53 | });
  54 | 
  55 | test('prompt alerts',async({page})=>{
  56 |     await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
  57 |     page.on('dialog',async(alert)=>{
  58 |         console.log(alert.message());
  59 |         await alert.accept("Maja pa maja pa");
  60 |         console.log("Alert dismised!");
  61 |     });
  62 |     await page.click("//p[text()='Prompt box:']/button");
> 63 |     page.waitForTimeout(3000);
     |          ^ Error: page.waitForTimeout: Test ended.
  64 |     const msg = await page.locator("//p[@id='prompt-demo']").textContent();
  65 |     console.log(msg);
  66 | 
  67 | });
  68 | 
  69 | 
```