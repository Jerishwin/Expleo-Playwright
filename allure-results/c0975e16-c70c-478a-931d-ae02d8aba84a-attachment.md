# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: task2.test.ts >> Task2
- Location: automationExcercise\task2.test.ts:3:1

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Login') resolved to 3 elements:
    1) <a href="/login">…</a> aka getByRole('link', { name: ' Signup / Login' })
    2) <h2>Login to your account</h2> aka getByRole('heading', { name: 'Login to your account' })
    ...

Call log:
  - waiting for getByText('Login')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]: jeri@gmail.com
        - textbox "Password" [active] [ref=e45]: jeri
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import {expect,test} from '@playwright/test';
  2  | 
  3  | test('Task2',async({page})=>{
  4  |     await page.goto('https://automationexercise.com/');
  5  |     await page.getByText(' Signup / Login').click();
  6  |     await page.fill("//input[@data-qa='login-email']",'jeri@gmail.com')
  7  |     await page.getByPlaceholder('Password').fill("jeri");
> 8  |     await page.getByText('Login').click();
     |                                   ^ Error: locator.click: Error: strict mode violation: getByText('Login') resolved to 3 elements:
  9  |     await expect(page.locator("//ul[@class='nav navbar-nav']/li[10]/a/b")).toContainText("jeri");
  10 |     await page.click("//ul[@class='nav navbar-nav']/li[5]");
  11 |     await expect(page.locator("//h2/b")).toContainText("Deleted");
  12 | })
```