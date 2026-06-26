# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testmu.test.ts >> sumTest
- Location: tests\testmu.test.ts:14:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//p[@id=\'addmessage\']')
Expected substring: "50"
Received string:    "Entered value is not a number"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('//p[@id=\'addmessage\']')
    14 × locator resolved to <p class="mt-20" id="addmessage">Entered value is not a number</p>
       - unexpected value "Entered value is not a number"

```

```yaml
- paragraph: Entered value is not a number
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
  20 |     await input1.scrollIntoViewIfNeeded();
  21 |     await input1.pressSequentially(a.toString(),{delay:100});
  22 |     await input2.fill(b.toString());
  23 |     await page.waitForTimeout(5000);
  24 |     const box = page.locator("//button[text()='Get Sum']");
  25 |     console.log(await box.boundingBox());
  26 |     await box.click();
  27 |     const sum = page.locator("//p[@id='addmessage']"); 
> 28 |     await expect(sum).toContainText((a+b).toString());
     |                       ^ Error: expect(locator).toContainText(expected) failed
  29 | 
  30 | });
```