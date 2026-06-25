# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: task2.test.ts >> Task2
- Location: automationExcercise\task2.test.ts:3:1

# Error details

```
Error: locator.fill: Error: strict mode violation: getByPlaceholder('Email Address') resolved to 3 elements:
    1) <input value="" required="" type="email" name="email" data-qa="login-email" placeholder="Email Address"/> aka locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    2) <input value="" required="" type="email" name="email" data-qa="signup-email" placeholder="Email Address"/> aka locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
    3) <input required="" type="email" id="susbscribe_email" placeholder="Your email address"/> aka getByRole('textbox', { name: 'Your email address' })

Call log:
  - waiting for getByPlaceholder('Email Address')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
        - generic: u3U84h0KL7RZzeFF0qgk7tU216iM3szBkiHWlobniNg3IM76CGGFWAcG7KOQZn3G
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: u3U84h0KL7RZzeFF0qgk7tU216iM3szBkiHWlobniNg3IM76CGGFWAcG7KOQZn3G
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
      - generic [active] [ref=f29e1]:
        - generic [ref=f29e6]:
          - generic [ref=f29e7]:
            - generic "Google Chrome" [ref=f29e8]:
              - link "Download Chrome" [ref=f29e10] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CNjES7QE9arLvIeXh29gPp-TrmQPL8JK7hwHqiYmvwxWwkB8QASD9tJ6VAWDlmuiD2A6gAY6Q3LEoyAEBqAMByAPLBKoE-gFP0B1eDftllNb2oqaThIL7-BrroID7vGTFNSea9ariTiFdyeoFf9hvJ8jerNuHgllUIrHA1frWy6zGLmKZhhG2c4I--045ggJ6OsOuYMrjeq5K-ZRi4xiIaf0DD2U8sVRdA6o5_pdrYw0by9ZtBP6Jhr_x5JRIy9W6T1KLprO210yKh_F4Cao8zbxiWvXtNAPTq7ZPoNMpxhFSUpZUBrAke4QKiqWCLVEQRM0myEhluanBSuvyZ6P6oUUu_iZcwlAan-NPxVeKrcdUjdi1CTC7i0Q8vv21LZtxUZAQLV5DsEWG8Aw71VzMs0D2zpwndzKaZ7WVeSU7Nik3wATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlj1u6q1lqKVA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMJWIXChVjb20uZ29vZ2xlLmNocm9tZS5pb3NqAgoAeAGIAQGQAQGqDQJJTsgNAeoNEwjTo6y1lqKVAxXl8BYFHSfyOjOIDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI8pmstZailQMV5fAWBR0n8jozEAEYASAAEgL4HvD_BwE&num=1&cid=CAQShwIAEQoqgS5AMzUN3oB1xGG9QPexULsDVezwRTtN5ibkzKzmgkeLWrCC4UiQp8J0Zr8XKLWGss7QuhdT4KM7Zv63hLtdHAoxvCDOtv6ML010AJWNBXQ4IoYIePlFjg7rtJK_Y7lqnMFCPFYOnavMWhqjyFBM6bh90LyjjTKcqAlwhxVW-tNiaeTY5_5m6SiQnOhcCobiAqmDkfkYqAptAeC7sLRAyoKOaGpr-bfifoaa3hPZSF5nuQV2K17NcIM0xzVsneZOgoJdp0UvSluW1Hs8Ctq_-XybSLfboTCktdZb65peAF5Ta_Sljc0gnI6hKvA1-QLjF-lfb2yNM6bpVfS1lk1cDuI2RRgB&sig=AOD64_3Hn1szSGF-AjMmtfU9CQjH8-RcCQ&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
            - link "Browse securely with Chrome's built-in protection from malware, phishing, and other scams. Google Chrome" [ref=f29e12] [cursor=pointer]:
              - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CNjES7QE9arLvIeXh29gPp-TrmQPL8JK7hwHqiYmvwxWwkB8QASD9tJ6VAWDlmuiD2A6gAY6Q3LEoyAEBqAMByAPLBKoE-gFP0B1eDftllNb2oqaThIL7-BrroID7vGTFNSea9ariTiFdyeoFf9hvJ8jerNuHgllUIrHA1frWy6zGLmKZhhG2c4I--045ggJ6OsOuYMrjeq5K-ZRi4xiIaf0DD2U8sVRdA6o5_pdrYw0by9ZtBP6Jhr_x5JRIy9W6T1KLprO210yKh_F4Cao8zbxiWvXtNAPTq7ZPoNMpxhFSUpZUBrAke4QKiqWCLVEQRM0myEhluanBSuvyZ6P6oUUu_iZcwlAan-NPxVeKrcdUjdi1CTC7i0Q8vv21LZtxUZAQLV5DsEWG8Aw71VzMs0D2zpwndzKaZ7WVeSU7Nik3wATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlj1u6q1lqKVA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMJWIXChVjb20uZ29vZ2xlLmNocm9tZS5pb3NqAgoAeAGIAQGQAQGqDQJJTsgNAeoNEwjTo6y1lqKVAxXl8BYFHSfyOjOIDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI8pmstZailQMV5fAWBR0n8jozEAEYASAAEgL4HvD_BwE&num=1&cid=CAQShwIAEQoqgS5AMzUN3oB1xGG9QPexULsDVezwRTtN5ibkzKzmgkeLWrCC4UiQp8J0Zr8XKLWGss7QuhdT4KM7Zv63hLtdHAoxvCDOtv6ML010AJWNBXQ4IoYIePlFjg7rtJK_Y7lqnMFCPFYOnavMWhqjyFBM6bh90LyjjTKcqAlwhxVW-tNiaeTY5_5m6SiQnOhcCobiAqmDkfkYqAptAeC7sLRAyoKOaGpr-bfifoaa3hPZSF5nuQV2K17NcIM0xzVsneZOgoJdp0UvSluW1Hs8Ctq_-XybSLfboTCktdZb65peAF5Ta_Sljc0gnI6hKvA1-QLjF-lfb2yNM6bpVfS1lk1cDuI2RRgB&sig=AOD64_3Hn1szSGF-AjMmtfU9CQjH8-RcCQ&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
              - text: Browse securely with Chrome's built-in protection from malware, phishing, and other
              - text: scams. Google Chrome
          - link "Download" [ref=f29e15] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CNjES7QE9arLvIeXh29gPp-TrmQPL8JK7hwHqiYmvwxWwkB8QASD9tJ6VAWDlmuiD2A6gAY6Q3LEoyAEBqAMByAPLBKoE-gFP0B1eDftllNb2oqaThIL7-BrroID7vGTFNSea9ariTiFdyeoFf9hvJ8jerNuHgllUIrHA1frWy6zGLmKZhhG2c4I--045ggJ6OsOuYMrjeq5K-ZRi4xiIaf0DD2U8sVRdA6o5_pdrYw0by9ZtBP6Jhr_x5JRIy9W6T1KLprO210yKh_F4Cao8zbxiWvXtNAPTq7ZPoNMpxhFSUpZUBrAke4QKiqWCLVEQRM0myEhluanBSuvyZ6P6oUUu_iZcwlAan-NPxVeKrcdUjdi1CTC7i0Q8vv21LZtxUZAQLV5DsEWG8Aw71VzMs0D2zpwndzKaZ7WVeSU7Nik3wATe6pTM1gWIBcOviqZXgAfjic0iqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfCyLEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOlj1u6q1lqKVA2ABmgkqaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9jaHJvbWUvZHIvZG93bmxvYWQvsQlLLi0EslYIgoAKAcgLAeALAaIMJWIXChVjb20uZ29vZ2xlLmNocm9tZS5pb3NqAgoAeAGIAQGQAQGqDQJJTsgNAeoNEwjTo6y1lqKVAxXl8BYFHSfyOjOIDgnYEwyIFATQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC3mgYASIBANAYAegYAbIZAS_CGQIIAQ&gclid=EAIaIQobChMI8pmstZailQMV5fAWBR0n8jozEAEYASAAEgL4HvD_BwE&num=1&cid=CAQShwIAEQoqgS5AMzUN3oB1xGG9QPexULsDVezwRTtN5ibkzKzmgkeLWrCC4UiQp8J0Zr8XKLWGss7QuhdT4KM7Zv63hLtdHAoxvCDOtv6ML010AJWNBXQ4IoYIePlFjg7rtJK_Y7lqnMFCPFYOnavMWhqjyFBM6bh90LyjjTKcqAlwhxVW-tNiaeTY5_5m6SiQnOhcCobiAqmDkfkYqAptAeC7sLRAyoKOaGpr-bfifoaa3hPZSF5nuQV2K17NcIM0xzVsneZOgoJdp0UvSluW1Hs8Ctq_-XybSLfboTCktdZb65peAF5Ta_Sljc0gnI6hKvA1-QLjF-lfb2yNM6bpVfS1lk1cDuI2RRgB&sig=AOD64_3Hn1szSGF-AjMmtfU9CQjH8-RcCQ&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.437475499%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23433746371
            - generic [ref=f29e18]:
              - generic [ref=f29e19]: Download
              - img [ref=f29e20]
        - img [ref=f29e25] [cursor=pointer]
        - button [ref=f29e27] [cursor=pointer]:
          - img [ref=f29e28]
        - iframe
```

# Test source

```ts
  1 | import {expect,test} from '@playwright/test';
  2 | 
  3 | test('Task2',async({page})=>{
  4 |     await page.goto('https://automationexercise.com/');
  5 |     await page.getByText(' Signup / Login').click();
> 6 |     await page.getByPlaceholder('Email Address').fill("jeri@gmail.com");
    |                                                  ^ Error: locator.fill: Error: strict mode violation: getByPlaceholder('Email Address') resolved to 3 elements:
  7 |     await page.getByPlaceholder('Password').fill("jeri");
  8 | })
```