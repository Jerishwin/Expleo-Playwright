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
    3) <button type="submit" data-qa="login-button" class="btn btn-default">Login</button> aka getByRole('button', { name: 'Login' })

Call log:
  - waiting for getByText('Login')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - generic: E6aVCtQo8ohKDBqxIQhT47TY5TGqxkUXZ10BXL6pBKDyADqyV5tQRS30NKE562OX
        - textbox "Email Address" [ref=e44]: jeri@gmail.com
        - textbox "Password" [active] [ref=e45]: jeri
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: E6aVCtQo8ohKDBqxIQhT47TY5TGqxkUXZ10BXL6pBKDyADqyV5tQRS30NKE562OX
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - generic: signup
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
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - generic [active] [ref=f27e1]:
        - generic [ref=f27e6]:
          - generic [ref=f27e7]:
            - generic "Google Chrome" [ref=f27e8]:
              - link "Download Chrome" [ref=f27e10] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C6ygxShQ9aubMO5yV_tMPgJzT4A_L8JK7hwHqiYmvwxWwkB8QASD9tJ6VAWDlmuiD2A6gAY6Q3LEoyAEBqAMByAPLBKoE-gFP0PkpS4GXcCPtqSdz42AWLkUhQWKGHKpez6AcB7c8KF5nAv9MN9HDIWZ9_rAwrQ-1E_AVpKUQ_YPTsK4StT_0alzpp4aHS98x9OqOG0yVGbiW-95_Wj5_jpz03EaG5Sjz7f5HDUVJHq6vHK--oh5RyZ5O0a4yT19i9u7WsZwmUTAm9dzrtJaXV3LdApJE6MRyf8ZJQ4N-4qgOzLJLzMBpFR5MoCSxtjkR12fBNPELU7znOw9WZks3UvblJBFiQnDeE6p6ZznzBmX27mVXlWOeZDh1z9PSx6j2K37jcAdANRSDJrW0Obpw_EfzVThjhkBFKcSt2sYRt56HwATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljnxY73p6KVA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMJWIXChVjb20uZ29vZ2xlLmNocm9tZS5pb3NqAgoAeAGIAQGQAQGqDQJJTsgNAeoNEwjUnpT3p6KVAxWcin8EHQDOFPyIDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI5pmU96eilQMVnIp_BB0AzhT8EAEYASAAEgL7pvD_BwE&num=1&cid=CAQSiAIAEQoqgaztsMHkupFYcUCHfCd3tqkMGT5r-EZWjvVMG69-ZQVg4tWRlUaf7_Y9Pu4-wP7tpKpSnBTjdKk5NORIZTEOK86UHyscT9pSdUeQyBKLOGy6gDjVfaFpxaVxyUXQJ4C-ypum9cj69nwKbpb4NG2CrmHxFrOOCcvvu8ECxO1XzAnk1dnYrc36OEdMYdctAme4OCfb0wDaLS3ILUzzzOOtwILG78c37_jxlWmumLl4oXQsF_JrCdQxhxvQ0jVkWxaR-u1y0-rDqYiuGZd_adWIxkfGl7F9xSQqMiwnWJLC-7Y8L1-aGQsngoCpNqvTS3SiN1NboiL_QSqDUPWXiPUnfx-MLLUYAQ&sig=AOD64_3EH6vShYTvPX6h0p7DhCxwgDwidg&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
            - link "Browse securely with Chrome's built-in protection from malware, phishing, and other scams. Google Chrome" [ref=f27e12] [cursor=pointer]:
              - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C6ygxShQ9aubMO5yV_tMPgJzT4A_L8JK7hwHqiYmvwxWwkB8QASD9tJ6VAWDlmuiD2A6gAY6Q3LEoyAEBqAMByAPLBKoE-gFP0PkpS4GXcCPtqSdz42AWLkUhQWKGHKpez6AcB7c8KF5nAv9MN9HDIWZ9_rAwrQ-1E_AVpKUQ_YPTsK4StT_0alzpp4aHS98x9OqOG0yVGbiW-95_Wj5_jpz03EaG5Sjz7f5HDUVJHq6vHK--oh5RyZ5O0a4yT19i9u7WsZwmUTAm9dzrtJaXV3LdApJE6MRyf8ZJQ4N-4qgOzLJLzMBpFR5MoCSxtjkR12fBNPELU7znOw9WZks3UvblJBFiQnDeE6p6ZznzBmX27mVXlWOeZDh1z9PSx6j2K37jcAdANRSDJrW0Obpw_EfzVThjhkBFKcSt2sYRt56HwATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljnxY73p6KVA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMJWIXChVjb20uZ29vZ2xlLmNocm9tZS5pb3NqAgoAeAGIAQGQAQGqDQJJTsgNAeoNEwjUnpT3p6KVAxWcin8EHQDOFPyIDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI5pmU96eilQMVnIp_BB0AzhT8EAEYASAAEgL7pvD_BwE&num=1&cid=CAQSiAIAEQoqgaztsMHkupFYcUCHfCd3tqkMGT5r-EZWjvVMG69-ZQVg4tWRlUaf7_Y9Pu4-wP7tpKpSnBTjdKk5NORIZTEOK86UHyscT9pSdUeQyBKLOGy6gDjVfaFpxaVxyUXQJ4C-ypum9cj69nwKbpb4NG2CrmHxFrOOCcvvu8ECxO1XzAnk1dnYrc36OEdMYdctAme4OCfb0wDaLS3ILUzzzOOtwILG78c37_jxlWmumLl4oXQsF_JrCdQxhxvQ0jVkWxaR-u1y0-rDqYiuGZd_adWIxkfGl7F9xSQqMiwnWJLC-7Y8L1-aGQsngoCpNqvTS3SiN1NboiL_QSqDUPWXiPUnfx-MLLUYAQ&sig=AOD64_3EH6vShYTvPX6h0p7DhCxwgDwidg&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
              - text: Browse securely with Chrome's built-in protection from malware, phishing, and other
              - text: scams. Google Chrome
          - link "Download" [ref=f27e15] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C6ygxShQ9aubMO5yV_tMPgJzT4A_L8JK7hwHqiYmvwxWwkB8QASD9tJ6VAWDlmuiD2A6gAY6Q3LEoyAEBqAMByAPLBKoE-gFP0PkpS4GXcCPtqSdz42AWLkUhQWKGHKpez6AcB7c8KF5nAv9MN9HDIWZ9_rAwrQ-1E_AVpKUQ_YPTsK4StT_0alzpp4aHS98x9OqOG0yVGbiW-95_Wj5_jpz03EaG5Sjz7f5HDUVJHq6vHK--oh5RyZ5O0a4yT19i9u7WsZwmUTAm9dzrtJaXV3LdApJE6MRyf8ZJQ4N-4qgOzLJLzMBpFR5MoCSxtjkR12fBNPELU7znOw9WZks3UvblJBFiQnDeE6p6ZznzBmX27mVXlWOeZDh1z9PSx6j2K37jcAdANRSDJrW0Obpw_EfzVThjhkBFKcSt2sYRt56HwATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljnxY73p6KVA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMJWIXChVjb20uZ29vZ2xlLmNocm9tZS5pb3NqAgoAeAGIAQGQAQGqDQJJTsgNAeoNEwjUnpT3p6KVAxWcin8EHQDOFPyIDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI5pmU96eilQMVnIp_BB0AzhT8EAEYASAAEgL7pvD_BwE&num=1&cid=CAQSiAIAEQoqgaztsMHkupFYcUCHfCd3tqkMGT5r-EZWjvVMG69-ZQVg4tWRlUaf7_Y9Pu4-wP7tpKpSnBTjdKk5NORIZTEOK86UHyscT9pSdUeQyBKLOGy6gDjVfaFpxaVxyUXQJ4C-ypum9cj69nwKbpb4NG2CrmHxFrOOCcvvu8ECxO1XzAnk1dnYrc36OEdMYdctAme4OCfb0wDaLS3ILUzzzOOtwILG78c37_jxlWmumLl4oXQsF_JrCdQxhxvQ0jVkWxaR-u1y0-rDqYiuGZd_adWIxkfGl7F9xSQqMiwnWJLC-7Y8L1-aGQsngoCpNqvTS3SiN1NboiL_QSqDUPWXiPUnfx-MLLUYAQ&sig=AOD64_3EH6vShYTvPX6h0p7DhCxwgDwidg&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
            - generic [ref=f27e18]:
              - generic [ref=f27e19]: Download
              - img [ref=f27e20]
        - img [ref=f27e25] [cursor=pointer]
        - button [ref=f27e27] [cursor=pointer]:
          - img [ref=f27e28]
        - iframe
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