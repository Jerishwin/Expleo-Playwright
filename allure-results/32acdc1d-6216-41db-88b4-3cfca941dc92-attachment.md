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
        - generic: 4mP4xps9uBVr4djZXdrKHyi1IIg0xV6G3WhJXrleu8sRfxJA8uec46lNY2XdrmDq
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: 4mP4xps9uBVr4djZXdrKHyi1IIg0xV6G3WhJXrleu8sRfxJA8uec46lNY2XdrmDq
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
              - link "Download Google Chrome" [ref=f27e10] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CVC0ydgI9atLTL-7ss8IPnqDdiAOIl9i7hwGyhomvwxWwkB8QASD9tJ6VAWDlmuiD2A6gAY6Q3LEoyAEBqAMByAPLBKoE_gFP0AkmFzHYC1OBw8oanwedjbmpgwXDgJstzGY4AiDO3lKYZbH_75JjZLOhfKWDAjoLOCNc4idyXI-EzyVvUHkg_0gQg5CMnTHfY2AQUmPWUeirrn4eCVbp89CgfdNtDBOKYQ_ZKNocWYZ-bvk_zzgyhkN8jU0Lb0l85qktxfL3SoJtRRCfPddLgJNlWfY0HGQnDEvcaqV3qXJDizurDVlcyCMGzkMQZZVI-QL39fJppbw_drdaw2Dg2pxXw_zQ5dHccSalKnJBv116ei0db_FzgQETT1WFWCHxz3rNkXul3Oe_IG90imYUxzDpWC2eW-b7jWn90gHpeHFMkB-r6cAE7JbXhMsFiAWzwPejV4AH44nNIqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgHwsixAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYn5Pi9pailQNgAZoJKmh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vY2hyb21lL2RyL2Rvd25sb2FkL7EJSy4tBLJWCIKACgHICwHgCwGiDDEqCgoIjt-xApXisQJiFwoVY29tLmdvb2dsZS5jaHJvbWUuaW9zagIKAHgBiAEBkAEBqg0CSU7IDQHqDRMIju3j9pailQMVbvZMAh0eUBcxiA4J2BMMiBQC0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAt5oGAEiAQDQGAHoGAGyGQEvwhkCCAE&gclid=EAIaIQobChMI0ubj9pailQMVbvZMAh0eUBcxEAEYASAAEgLIPvD_BwE&num=1&cid=CAQSiAIAEQoqgQEKD1vU3svyPxuXx3m-m-PEgw89p1aktfB5iv6NdQyj0BMX3QJ58iVJRpvVqe_EjLsdPCg4YXZm5NHbH3DYeWZuw1uqHwS7g5YSn4zAQYjZ0swNJX907xtG2b9zfyJWrSw3F1VStUqS0Ekroqeg0uBdJDuMRqDzJ7-vFyMy94HsJs4TWLvC9asJpQpSQYXrCe0Xt4RLQ4c_yO5ymCVJIcE8RDXrE1Jgil09DQSK4c3tVvSEIBiGdhEjMoL6lPAb30j91HZX6Ud0G-69DbUDSN4V6YZoA5z9xdUtJre670Rc1tAALS5E1OWnALzYdACfo5G2B_YWYDy3CyVv_132cQQ0qnkYAQ&sig=AOD64_2yOjMuiaA-UYDkzvbm-hQ2b0r-sA&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.436605945%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23429242931
            - link "Browse securely with Chrome's built-in protection from malware, phishing, and other scams. Google Chrome" [ref=f27e12] [cursor=pointer]:
              - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CVC0ydgI9atLTL-7ss8IPnqDdiAOIl9i7hwGyhomvwxWwkB8QASD9tJ6VAWDlmuiD2A6gAY6Q3LEoyAEBqAMByAPLBKoE_gFP0AkmFzHYC1OBw8oanwedjbmpgwXDgJstzGY4AiDO3lKYZbH_75JjZLOhfKWDAjoLOCNc4idyXI-EzyVvUHkg_0gQg5CMnTHfY2AQUmPWUeirrn4eCVbp89CgfdNtDBOKYQ_ZKNocWYZ-bvk_zzgyhkN8jU0Lb0l85qktxfL3SoJtRRCfPddLgJNlWfY0HGQnDEvcaqV3qXJDizurDVlcyCMGzkMQZZVI-QL39fJppbw_drdaw2Dg2pxXw_zQ5dHccSalKnJBv116ei0db_FzgQETT1WFWCHxz3rNkXul3Oe_IG90imYUxzDpWC2eW-b7jWn90gHpeHFMkB-r6cAE7JbXhMsFiAWzwPejV4AH44nNIqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgHwsixAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYn5Pi9pailQNgAZoJKmh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vY2hyb21lL2RyL2Rvd25sb2FkL7EJSy4tBLJWCIKACgHICwHgCwGiDDEqCgoIjt-xApXisQJiFwoVY29tLmdvb2dsZS5jaHJvbWUuaW9zagIKAHgBiAEBkAEBqg0CSU7IDQHqDRMIju3j9pailQMVbvZMAh0eUBcxiA4J2BMMiBQC0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAt5oGAEiAQDQGAHoGAGyGQEvwhkCCAE&gclid=EAIaIQobChMI0ubj9pailQMVbvZMAh0eUBcxEAEYASAAEgLIPvD_BwE&num=1&cid=CAQSiAIAEQoqgQEKD1vU3svyPxuXx3m-m-PEgw89p1aktfB5iv6NdQyj0BMX3QJ58iVJRpvVqe_EjLsdPCg4YXZm5NHbH3DYeWZuw1uqHwS7g5YSn4zAQYjZ0swNJX907xtG2b9zfyJWrSw3F1VStUqS0Ekroqeg0uBdJDuMRqDzJ7-vFyMy94HsJs4TWLvC9asJpQpSQYXrCe0Xt4RLQ4c_yO5ymCVJIcE8RDXrE1Jgil09DQSK4c3tVvSEIBiGdhEjMoL6lPAb30j91HZX6Ud0G-69DbUDSN4V6YZoA5z9xdUtJre670Rc1tAALS5E1OWnALzYdACfo5G2B_YWYDy3CyVv_132cQQ0qnkYAQ&sig=AOD64_2yOjMuiaA-UYDkzvbm-hQ2b0r-sA&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.436605945%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23429242931
              - text: Browse securely with Chrome's built-in protection from malware, phishing, and other
              - text: scams. Google Chrome
          - link "Download" [ref=f27e15] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CVC0ydgI9atLTL-7ss8IPnqDdiAOIl9i7hwGyhomvwxWwkB8QASD9tJ6VAWDlmuiD2A6gAY6Q3LEoyAEBqAMByAPLBKoE_gFP0AkmFzHYC1OBw8oanwedjbmpgwXDgJstzGY4AiDO3lKYZbH_75JjZLOhfKWDAjoLOCNc4idyXI-EzyVvUHkg_0gQg5CMnTHfY2AQUmPWUeirrn4eCVbp89CgfdNtDBOKYQ_ZKNocWYZ-bvk_zzgyhkN8jU0Lb0l85qktxfL3SoJtRRCfPddLgJNlWfY0HGQnDEvcaqV3qXJDizurDVlcyCMGzkMQZZVI-QL39fJppbw_drdaw2Dg2pxXw_zQ5dHccSalKnJBv116ei0db_FzgQETT1WFWCHxz3rNkXul3Oe_IG90imYUxzDpWC2eW-b7jWn90gHpeHFMkB-r6cAE7JbXhMsFiAWzwPejV4AH44nNIqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgHwsixAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYn5Pi9pailQNgAZoJKmh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vY2hyb21lL2RyL2Rvd25sb2FkL7EJSy4tBLJWCIKACgHICwHgCwGiDDEqCgoIjt-xApXisQJiFwoVY29tLmdvb2dsZS5jaHJvbWUuaW9zagIKAHgBiAEBkAEBqg0CSU7IDQHqDRMIju3j9pailQMVbvZMAh0eUBcxiA4J2BMMiBQC0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAt5oGAEiAQDQGAHoGAGyGQEvwhkCCAE&gclid=EAIaIQobChMI0ubj9pailQMVbvZMAh0eUBcxEAEYASAAEgLIPvD_BwE&num=1&cid=CAQSiAIAEQoqgQEKD1vU3svyPxuXx3m-m-PEgw89p1aktfB5iv6NdQyj0BMX3QJ58iVJRpvVqe_EjLsdPCg4YXZm5NHbH3DYeWZuw1uqHwS7g5YSn4zAQYjZ0swNJX907xtG2b9zfyJWrSw3F1VStUqS0Ekroqeg0uBdJDuMRqDzJ7-vFyMy94HsJs4TWLvC9asJpQpSQYXrCe0Xt4RLQ4c_yO5ymCVJIcE8RDXrE1Jgil09DQSK4c3tVvSEIBiGdhEjMoL6lPAb30j91HZX6Ud0G-69DbUDSN4V6YZoA5z9xdUtJre670Rc1tAALS5E1OWnALzYdACfo5G2B_YWYDy3CyVv_132cQQ0qnkYAQ&sig=AOD64_2yOjMuiaA-UYDkzvbm-hQ2b0r-sA&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://ad.doubleclick.net/ddm/trackclk/N5295.5087813DEMANDGEN/B34618049.436605945%3Bdc_trk_aid%3D629327307%3Bdc_trk_cid%3D246757563%3Bdc_lat%3D%3Bdc_rdid%3D%3Btag_for_child_directed_treatment%3D%3Btfua%3D%3Bgdpr%3D%24%7BGDPR%7D%3Bgdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%3Bltd%3D%3Bdc_tdv%3D1%3Bdc_pubid%3D8%3Fgad_source%3D5%26gad_campaignid%3D23429242931
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