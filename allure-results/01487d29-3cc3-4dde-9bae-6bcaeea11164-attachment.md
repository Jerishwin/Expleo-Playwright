# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testmu.test.ts >> DemoTestmu
- Location: tests\testmu.test.ts:3:1

# Error details

```
Error: page.goto: NS_ERROR_UNKNOWN_HOST
Call log:
  - navigating to "https://www.testmuai.com/selenium-playground/simple-form-demo/", waiting until "load"

```

# Page snapshot

```yaml
- article "Server Not Found" [ref=e3]:
  - img "Illustration of a fox looking at disconnected network cables." [ref=e5]
  - generic [ref=e7]:
    - heading "Server Not Found" [level=1] [ref=e8]
    - paragraph [ref=e9]:
      - text: Nightly can’t connect to the server at
      - strong [ref=e10]: www.testmuai.com
    - generic [ref=e11]:
      - heading "What can you do about it?" [level=3] [ref=e12]
      - paragraph [ref=e13]: Try connecting on a different device. Check your modem or router. Disconnect and reconnect to Wi-Fi.
    - paragraph [ref=e14]:
      - link "Learn more…" [ref=e15] [cursor=pointer]:
        - /url: https://support.mozilla.org/1/firefox/151.0/WINNT/en-US/server-not-found-connection-problem
    - button "Try Again" [ref=e18]:
      - generic [ref=e20]:
        - generic: Try Again
```

# Test source

```ts
  1  | import {expect,test} from '@playwright/test';
  2  | 
  3  | test('DemoTestmu',async({page})=>{
> 4  |     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
     |                ^ Error: page.goto: NS_ERROR_UNKNOWN_HOST
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
  28 |     await expect(sum).toContainText((a+b).toString());
  29 | 
  30 | });
```