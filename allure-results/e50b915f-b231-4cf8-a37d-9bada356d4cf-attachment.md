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
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
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
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - iframe [ref=f24e1]:
        - generic [ref=f28e2]:
          - link "Advertisement" [ref=f28e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjss_ePvgm7wwCMhqLm8I5wAeGKRKdInWBSrv4kM9QrUVheBgClDFS_dBR1_0yPPPa-JO5HocXEcuMd2aK4gcZ_2E_-507Zacy9XAAFqZCBVguiXF6nXk9jLfOQK8zeYTzDrePMU4sguNGRL0JBPPIPGciyl4WfBpxEpwYhwJlc6GKhSxEI0IM3piD1Wbb8n1C7ZGih_5x4bGFl6K3eF1jJ5iSHuIrFLdth7fSeX88wryMgxofBjzE1qlIZG_5agvbrZKpL2u5DAUq4ubbPyxVbN2h4Gc7--x6QLCxnJX4s2eqxqnX0-WpRYmYXTeFhX68wdvYFvIr31FaZUIv58VtTxXEQAHwr3dG-zlXXIx2V-JwMeSdIVa4ImficgfX9aTxghbLqQzozd7-yC-2F82JaWJf5H_vZZaLIwX0VjtchzmzZ5XDmaZoSA-dswX6_8Ka1lvyDGfxzywli3UDO7nk2_izfgBkQcwKUJKqtE5w3s65h-10hnKP58xAyoPEg-DPuDaloy7HD80LE1VIpk5sNEo4ptIH7mtsJlglz5OpHnaR_qIQseIzQJGZE8q8y_4nNpyjMKE8y6wAcq8T4KUDQS_vcLk0N9YnDx0rYaqDQoOdIxC02739GNmXcfwI-Jerh70BMcAl7LhJnpWSAa4r8Thk9Dmko9cocbgYJkHpXxuPcq8N4iPBY3vtnApf8T5BMENi71-Rr9iIuohkFt8EEf_XAcqQ9B7daa4_N6bcquh2j-8U4gOtu-cLTI1UvlwFOVCtZ9SmVOCnbZ0lg3r9LIEKx4kkVqeVpSwqwJy3Fzp1_WK4nuWhSER-604TGl-pUOislS0MTlcZKIlPsRtg038fdzBSLDiKLWzaeBr0dd6F_JbGy8Y9VWjUhljcBaxiCqpXuB9TWv4w066LYxDam-fbaA3qay1iy7onXaUi9UzPuIsNDUHS5KhLbAz9DLq-EBy5M_0yy7YVD0cto7-K-jQ46wn2d4S4aUP14DC_a2T1efYXKHkmlhiv4BkViDHOtssh1nMqxxqxYbtuv_uAipA4vFTXlnjedl8yO3Ive2MMlJe_ozUU0KWkz9xKDJn4SDyA3lrRZjdJaAqX3bSe1fzjzZqpV7-DLiZ1EWw9CzvVKQKCCHrUIudNQEcR6VU9RbVdWc-oIU86YTMnAW6RAOfmfJjh9X4wLM9toEXxrEkufNPBJ7xD4uRMV0nePFoPwAeKQpm1M1cuhPED-rHcojezx7knlzEuycqgysRRBhT76YXjFCt_T1JtEVWJ6UIgAQB5gvDFXBTy_LT-HhOdMFqqpd4Iq_9AeLU7ttFT9ooln4dosKqSNcQCwZ4IdYUba_BuOJFOO86CZH2Zii4HbfylsKXGSAlOa1U1M5YO3HQmWnWAbAIBkrnHuc11vTdJ2iPUsZ-_8KTG6pcg92G4-BrmB7uYQYoUvXeaQzngQMowRA9GGdIyf6H6prBdPU1clSnn5WEuocXpQkHVln4XNj22AWhIjLgxnaLACAF8TREH_VS55W4sPdqqIC0BgsrpgqCdyCLi9GvkoJ1h3Ufg6qJiieTrY18UxOWPck3FlminA8-lOGaFPvPu76d7dVrdfaYaDUgjqDGl6unaHT0KpN32i1ltNgqf7H3rfg89NR7dR8Zlg0NA4PUelj6sTQpTLhVzcl_qLgiu7rWJEB1LBiGVYunxuCqanhtsboscqRhw0_YanV8GEoY96A6-P4gda-XU3KhJHHpTQshiY39I-GGqJnELCb2O-Wh50u1fazJpWJRmMdaJrE9fNVOsRPt1xUnvvOesf6BQkumCpB29sVOqrSPbBYav50j&sai=AMfl-YRwxIDNdOwM-IYlKEQJmAd_HN6e84N05WMpKodPjDXKRUU1gu5CCQTm_8FwbIsZqyoN8d7BGI-sUJX--8DWKg_RIvh6PLhBzFFXxtEY88bSyhjRJnlJsjGJyq3ai5Jsrkxsa9q1GkiAhzZv7iqv3XD6s7gELtxXSSWSnEp9EY5eT1pxB3Kpfs3FxBCz1oZvEgQ05aQokh6BO3sPNe2c5p4a7cqvv3MYJMJVAIJPL6BqulYHCUDLv10Eg8lIAcfOT13nS7lUFRSZ5bXORTzoeXhD07SguX9hXcr-tim3kyd1L4bni0aICFKtCoH1Ek_UtwBZeaPwureFJyoeWtZzoIraY471wWKROYww8ieqgCgu6bI-jrjMjgY3zxDbZvVrNqls2h90EgS5eNR2GcgmfPgzRXDZTcGp9fr4vtWvvvHbLTlbGrD_D9TdDOEMqu1ggRTPg3CKiAi_1R8tlPaAfjl_g3fp6siINBsGubvP41Rkk830fEPgz1ScTrVsGzmyj37lhrbJnW7By_NlepGHeCOLz9mXTi1KE_12xr2R45FD7feHCtp2F4SjNaoW9qk5PCrhyw7wMDtRYxTLOFqug0qUYpgn5CgPgIi0Dtu_4Ebb6eMe8LPoPF8cXvKDMX7IKqELbGaLdEA4iNS-KBztj6q60nuaEOpXs8qQ2gxBmThmiDTK4r9h_JZnNWz0FQObcn1JJM-OOfutXF8OkSqNF9i8wy9PDV-NtByjwyz597robj-TWfgVVNmCmcXR6ysg37gbE0yIZKAAUqaViLCxcgIz_xfilYsALs3pVg6MTSBQRhDpzCrs7-nO5jYyYNzsY9qEV76_Ge-KjFut3LWl1aXExx-zegCqe28_Dg&sig=Cg0ArKJSzI-jeLEuqVmK&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly90aS5jb20&urlfix=1&adurl=https://careers.ti.com/en/sites/CX/jobs%3Flocation%3DIndia%26locationId%3D300000000361484%26locationLevel%3Dcountry%26mode%3Dlocation%26HQS%3Dcorp-emp-rec-workplacein_null-dspbspros-car-gdv360_728x90-in_en_awr%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23756364381
            - img "Advertisement" [ref=f28e5]
          - generic [ref=f28e6]:
            - generic:
              - img [ref=f28e10] [cursor=pointer]
              - button [ref=f28e12] [cursor=pointer]:
                - img [ref=f28e13]
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