# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testmu.test.ts >> frames
- Location: tests\testmu.test.ts:80:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('iframe[name="firstFr"]').contentFrame().locator('p.text-sm font-semibold text-center')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - navigation "main navigation" [ref=e4]:
      - generic [ref=e5]:
        - link "LetCode Home" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "LetCode" [ref=e7]
        - generic [ref=e8]:
          - link "Work-Space" [ref=e9] [cursor=pointer]:
            - /url: /test
          - generic [ref=e10]:
            - button "Products" [ref=e11] [cursor=pointer]:
              - text: Products
              - img [ref=e12]
            - generic:
              - link "Ortoni Report":
                - /url: /product/ortoni-report
              - link "LetXPath":
                - /url: /product/letxpath
              - link "Playwright Runner":
                - /url: /product/playwright-runner
          - generic [ref=e15]:
            - button "Grooming" [ref=e16] [cursor=pointer]:
              - text: Grooming
              - img [ref=e17]
            - generic:
              - link "Test Practice":
                - /url: /test-practice
              - link "Interview Q & A":
                - /url: /interview
              - link "Playwright Quiz":
                - /url: /pw-quiz
          - link "Courses" [ref=e20] [cursor=pointer]:
            - /url: /courses
          - link "Contact" [ref=e21] [cursor=pointer]:
            - /url: /contact
        - button "Switch to dark mode" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
    - main [ref=e26]:
      - generic [ref=e28]:
        - generic [ref=e30]:
          - navigation "Breadcrumb" [ref=e31]:
            - link "Workspace" [ref=e32] [cursor=pointer]:
              - /url: /test
              - img [ref=e33]
              - generic [ref=e38]: Workspace
            - img [ref=e39]
            - generic [ref=e41]: Frame
          - heading "Frame" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e48]:
            - generic [ref=e49]: Let's go for a frame practice 😉
            - iframe [active] [ref=e51]:
              - generic [ref=f1e1]:
                - generic [ref=f1e4]:
                  - heading "Enter Details" [level=1] [ref=f1e5]
                  - generic [ref=f1e6]:
                    - generic [ref=f1e7]:
                      - generic [ref=f1e8]: First Name
                      - textbox "Enter name" [ref=f1e9]: Jerish
                    - generic [ref=f1e10]:
                      - generic [ref=f1e11]: Last Name
                      - textbox "Enter email" [active] [ref=f1e12]: Joseph
                  - paragraph [ref=f1e14]: You have entered Jerish Joseph
                  - iframe [ref=f1e16]:
                    - generic [active] [ref=f6e1]:
                      - generic [ref=f6e5]:
                        - generic [ref=f6e6]: Email
                        - textbox "Enter email" [ref=f6e7]
                      - insertion [ref=f6e9]:
                        - generic [ref=f6e12]:
                          - heading "These are topics related to the article that might interest you" [level=2] [ref=f6e14]: Discover more
                          - link "Selenium Webdriver Training" [ref=f6e15] [cursor=pointer]:
                            - generic "Selenium Webdriver Training" [ref=f6e16]
                            - img [ref=f6e18]
                          - link "Test Automation Courses" [ref=f6e20] [cursor=pointer]:
                            - generic "Test Automation Courses" [ref=f6e21]
                            - img [ref=f6e23]
                - insertion [ref=f1e18]:
                  - generic [ref=f1e21]:
                    - heading "These are topics related to the article that might interest you" [level=2] [ref=f1e23]: Discover more
                    - link "Test Automation Tools" [ref=f1e24] [cursor=pointer]:
                      - generic "Test Automation Tools" [ref=f1e25]
                      - img [ref=f1e27]
                    - link "Test Automation Training" [ref=f1e29] [cursor=pointer]:
                      - generic "Test Automation Training" [ref=f1e30]
                      - img [ref=f1e32]
                    - link "Learning Platform Access" [ref=f1e34] [cursor=pointer]:
                      - generic "Learning Platform Access" [ref=f1e35]
                      - img [ref=f1e37]
          - generic [ref=e53]:
            - generic [ref=e54]:
              - img [ref=e55]
              - heading "Learning Points" [level=3] [ref=e58]
            - list [ref=e59]:
              - listitem [ref=e60]:
                - img [ref=e61]
                - generic [ref=e64]: Target Locator
              - listitem [ref=e65]:
                - img [ref=e66]
                - generic [ref=e69]: switchTo()
              - listitem [ref=e70]:
                - img [ref=e71]
                - generic [ref=e74]: defaultContent()
              - listitem [ref=e75]:
                - img [ref=e76]
                - generic [ref=e79]: parentFrame()
              - listitem [ref=e80]:
                - img [ref=e81]
                - generic [ref=e84]: Overloading concept - JAVA
            - generic [ref=e85]:
              - link "Watch Tutorial" [ref=e86] [cursor=pointer]:
                - /url: /video/frame
                - img [ref=e87]
                - generic [ref=e89]: Watch Tutorial
              - generic [ref=e90]:
                - text: "Practice ID:"
                - code [ref=e91]: frame
          - insertion [ref=e95]:
            - iframe [ref=e97]:
              - generic [active] [ref=f5e1]:
                - generic [ref=f5e7]:
                  - generic [ref=f5e8]:
                    - generic [ref=f5e9]: Coursera
                    - generic [ref=f5e10]: Coursera
                  - generic [ref=f5e13]:
                    - generic "Coursera" [ref=f5e14]:
                      - link "New Google AI Certificate" [ref=f5e15] [cursor=pointer]:
                        - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CaVGCbFA-auO7H4uX4dkP4N6Daa6IzbqFAaKas8bEFYul1J2HKhABINORliJg5Zrog9gOoAGmv6m6A8gBAakCCr8avoe_Rj6oAwHIA8sEqgTpAU_QD8Yh6DrgwXg87RsDKTp6nbp8OIU0NVWIj6GTHVtjqZ5LLtB0K8qGt9ocFPC9Oh5pRnr3Atserrilzv6gqbjVb00-N5Lkq1E7KIzxPtjddZlO94jxH_BCylj2jMlS8q735JaF6AfuU59HlTKupLZ4nLhZ0QL2PK-ILD83o1m1w98SbRIw6ASYIQbFfPDBRDrSYKL0nA3Wy35YejIu87utwtSHKT4QwlPcbqh0HneYR5MnJe506Jr2jeMYRs6k2FhB5sYsHvAwIJz7XBPpO8wBYl9G4yt_S7-dqDbSQZoFvk0UPRQlh1FzwASQ-qb46QWIBb2UoexXgAfR3dL2AqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYk9-ttdWklQNgAbEJvjDLs8VrYl-ACgGYCwHICwGiDDliFwoVb3JnLmNvdXJzZXJhLmNvdXJzZXJhahYKFG9yZy5jb3Vyc2VyYS5hbmRyb2lkeAGIAQGQAQGqDQJJTsgNAeoNEwjnqq-11aSVAxWLSzgFHWDvIA3wDQKIDgmwDoDw2u8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKMzE0NTgzMDY3MVAGuhcCOAGqGBcJ_____x9Z70ASCjMxNDU4MzA2NzEYAbIYCRICgFQYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI46GvtdWklQMVi0s4BR1g7yANEAEYASAAEgKrgvD_BwE&num=1&cid=CAQShwIAEQoqgeQOTWqJ2lUGzoafcKFGYFjzItGfdQ40GuE084QvRs2m3relMuFQ9fSfI1cp30xDqcG7Zxtb0xB7jJ7ohLoKqQPLmAvR0fH2ZlQBbElyUGdrm8DE91PI7TZRN91gSt4bwMhqowp-MCXBI_PIhQT0YZvbQ0la140fei3bebT8e2OrfUzswDJxSvvKBpDEjM1qiGuxtKzM1grd5v70AZhp0KPZPMBBPlSVE0_7YXFJuk8y2VoxdwcMu5wksy7rtUhwZM0bijSO8mrBFV1C7up_bKRpyNdO0Isv2qOAbUm4fHmwaxYBaJuXJLJcwaE1XKZ4zS92Wi3Z5b28SBmwtpd4cQ0LqxgB&sig=AOD64_3uaktTfpBprBvwJINFORyyhwFdxw&client=ca-pub-6251538267574677&rf=1&nb=0&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMI46GvtdWklQMVi0s4BR1g7yANEAEYASAAEgKrgvD_BwE
                        - text: New
                        - text: Google AI
                        - text: Certificate
                    - link "Enroll in the new Google AI Professional Certificate today." [ref=f5e17] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CaVGCbFA-auO7H4uX4dkP4N6Daa6IzbqFAaKas8bEFYul1J2HKhABINORliJg5Zrog9gOoAGmv6m6A8gBAakCCr8avoe_Rj6oAwHIA8sEqgTpAU_QD8Yh6DrgwXg87RsDKTp6nbp8OIU0NVWIj6GTHVtjqZ5LLtB0K8qGt9ocFPC9Oh5pRnr3Atserrilzv6gqbjVb00-N5Lkq1E7KIzxPtjddZlO94jxH_BCylj2jMlS8q735JaF6AfuU59HlTKupLZ4nLhZ0QL2PK-ILD83o1m1w98SbRIw6ASYIQbFfPDBRDrSYKL0nA3Wy35YejIu87utwtSHKT4QwlPcbqh0HneYR5MnJe506Jr2jeMYRs6k2FhB5sYsHvAwIJz7XBPpO8wBYl9G4yt_S7-dqDbSQZoFvk0UPRQlh1FzwASQ-qb46QWIBb2UoexXgAfR3dL2AqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYk9-ttdWklQNgAbEJvjDLs8VrYl-ACgGYCwHICwGiDDliFwoVb3JnLmNvdXJzZXJhLmNvdXJzZXJhahYKFG9yZy5jb3Vyc2VyYS5hbmRyb2lkeAGIAQGQAQGqDQJJTsgNAeoNEwjnqq-11aSVAxWLSzgFHWDvIA3wDQKIDgmwDoDw2u8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKMzE0NTgzMDY3MVAGuhcCOAGqGBcJ_____x9Z70ASCjMxNDU4MzA2NzEYAbIYCRICgFQYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI46GvtdWklQMVi0s4BR1g7yANEAEYASAAEgKrgvD_BwE&num=1&cid=CAQShwIAEQoqgeQOTWqJ2lUGzoafcKFGYFjzItGfdQ40GuE084QvRs2m3relMuFQ9fSfI1cp30xDqcG7Zxtb0xB7jJ7ohLoKqQPLmAvR0fH2ZlQBbElyUGdrm8DE91PI7TZRN91gSt4bwMhqowp-MCXBI_PIhQT0YZvbQ0la140fei3bebT8e2OrfUzswDJxSvvKBpDEjM1qiGuxtKzM1grd5v70AZhp0KPZPMBBPlSVE0_7YXFJuk8y2VoxdwcMu5wksy7rtUhwZM0bijSO8mrBFV1C7up_bKRpyNdO0Isv2qOAbUm4fHmwaxYBaJuXJLJcwaE1XKZ4zS92Wi3Z5b28SBmwtpd4cQ0LqxgB&sig=AOD64_3uaktTfpBprBvwJINFORyyhwFdxw&client=ca-pub-6251538267574677&rf=1&nb=7&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMI46GvtdWklQMVi0s4BR1g7yANEAEYASAAEgKrgvD_BwE
                      - text: Enroll in the new Google
                      - text: AI Professional Certificate
                      - text: today.
                    - generic "Coursera" [ref=f5e19]:
                      - link "Coursera" [ref=f5e21] [cursor=pointer]:
                        - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CaVGCbFA-auO7H4uX4dkP4N6Daa6IzbqFAaKas8bEFYul1J2HKhABINORliJg5Zrog9gOoAGmv6m6A8gBAakCCr8avoe_Rj6oAwHIA8sEqgTpAU_QD8Yh6DrgwXg87RsDKTp6nbp8OIU0NVWIj6GTHVtjqZ5LLtB0K8qGt9ocFPC9Oh5pRnr3Atserrilzv6gqbjVb00-N5Lkq1E7KIzxPtjddZlO94jxH_BCylj2jMlS8q735JaF6AfuU59HlTKupLZ4nLhZ0QL2PK-ILD83o1m1w98SbRIw6ASYIQbFfPDBRDrSYKL0nA3Wy35YejIu87utwtSHKT4QwlPcbqh0HneYR5MnJe506Jr2jeMYRs6k2FhB5sYsHvAwIJz7XBPpO8wBYl9G4yt_S7-dqDbSQZoFvk0UPRQlh1FzwASQ-qb46QWIBb2UoexXgAfR3dL2AqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYk9-ttdWklQNgAbEJvjDLs8VrYl-ACgGYCwHICwGiDDliFwoVb3JnLmNvdXJzZXJhLmNvdXJzZXJhahYKFG9yZy5jb3Vyc2VyYS5hbmRyb2lkeAGIAQGQAQGqDQJJTsgNAeoNEwjnqq-11aSVAxWLSzgFHWDvIA3wDQKIDgmwDoDw2u8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKMzE0NTgzMDY3MVAGuhcCOAGqGBcJ_____x9Z70ASCjMxNDU4MzA2NzEYAbIYCRICgFQYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI46GvtdWklQMVi0s4BR1g7yANEAEYASAAEgKrgvD_BwE&num=1&cid=CAQShwIAEQoqgeQOTWqJ2lUGzoafcKFGYFjzItGfdQ40GuE084QvRs2m3relMuFQ9fSfI1cp30xDqcG7Zxtb0xB7jJ7ohLoKqQPLmAvR0fH2ZlQBbElyUGdrm8DE91PI7TZRN91gSt4bwMhqowp-MCXBI_PIhQT0YZvbQ0la140fei3bebT8e2OrfUzswDJxSvvKBpDEjM1qiGuxtKzM1grd5v70AZhp0KPZPMBBPlSVE0_7YXFJuk8y2VoxdwcMu5wksy7rtUhwZM0bijSO8mrBFV1C7up_bKRpyNdO0Isv2qOAbUm4fHmwaxYBaJuXJLJcwaE1XKZ4zS92Wi3Z5b28SBmwtpd4cQ0LqxgB&sig=AOD64_3uaktTfpBprBvwJINFORyyhwFdxw&client=ca-pub-6251538267574677&rf=1&nb=1&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMI46GvtdWklQMVi0s4BR1g7yANEAEYASAAEgKrgvD_BwE
                  - generic [ref=f5e24]:
                    - link "Learn More" [ref=f5e26] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CaVGCbFA-auO7H4uX4dkP4N6Daa6IzbqFAaKas8bEFYul1J2HKhABINORliJg5Zrog9gOoAGmv6m6A8gBAakCCr8avoe_Rj6oAwHIA8sEqgTpAU_QD8Yh6DrgwXg87RsDKTp6nbp8OIU0NVWIj6GTHVtjqZ5LLtB0K8qGt9ocFPC9Oh5pRnr3Atserrilzv6gqbjVb00-N5Lkq1E7KIzxPtjddZlO94jxH_BCylj2jMlS8q735JaF6AfuU59HlTKupLZ4nLhZ0QL2PK-ILD83o1m1w98SbRIw6ASYIQbFfPDBRDrSYKL0nA3Wy35YejIu87utwtSHKT4QwlPcbqh0HneYR5MnJe506Jr2jeMYRs6k2FhB5sYsHvAwIJz7XBPpO8wBYl9G4yt_S7-dqDbSQZoFvk0UPRQlh1FzwASQ-qb46QWIBb2UoexXgAfR3dL2AqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYk9-ttdWklQNgAbEJvjDLs8VrYl-ACgGYCwHICwGiDDliFwoVb3JnLmNvdXJzZXJhLmNvdXJzZXJhahYKFG9yZy5jb3Vyc2VyYS5hbmRyb2lkeAGIAQGQAQGqDQJJTsgNAeoNEwjnqq-11aSVAxWLSzgFHWDvIA3wDQKIDgmwDoDw2u8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKMzE0NTgzMDY3MVAGuhcCOAGqGBcJ_____x9Z70ASCjMxNDU4MzA2NzEYAbIYCRICgFQYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI46GvtdWklQMVi0s4BR1g7yANEAEYASAAEgKrgvD_BwE&num=1&cid=CAQShwIAEQoqgeQOTWqJ2lUGzoafcKFGYFjzItGfdQ40GuE084QvRs2m3relMuFQ9fSfI1cp30xDqcG7Zxtb0xB7jJ7ohLoKqQPLmAvR0fH2ZlQBbElyUGdrm8DE91PI7TZRN91gSt4bwMhqowp-MCXBI_PIhQT0YZvbQ0la140fei3bebT8e2OrfUzswDJxSvvKBpDEjM1qiGuxtKzM1grd5v70AZhp0KPZPMBBPlSVE0_7YXFJuk8y2VoxdwcMu5wksy7rtUhwZM0bijSO8mrBFV1C7up_bKRpyNdO0Isv2qOAbUm4fHmwaxYBaJuXJLJcwaE1XKZ4zS92Wi3Z5b28SBmwtpd4cQ0LqxgB&sig=AOD64_3uaktTfpBprBvwJINFORyyhwFdxw&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMI46GvtdWklQMVi0s4BR1g7yANEAEYASAAEgKrgvD_BwE
                    - link [ref=f5e27] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CaVGCbFA-auO7H4uX4dkP4N6Daa6IzbqFAaKas8bEFYul1J2HKhABINORliJg5Zrog9gOoAGmv6m6A8gBAakCCr8avoe_Rj6oAwHIA8sEqgTpAU_QD8Yh6DrgwXg87RsDKTp6nbp8OIU0NVWIj6GTHVtjqZ5LLtB0K8qGt9ocFPC9Oh5pRnr3Atserrilzv6gqbjVb00-N5Lkq1E7KIzxPtjddZlO94jxH_BCylj2jMlS8q735JaF6AfuU59HlTKupLZ4nLhZ0QL2PK-ILD83o1m1w98SbRIw6ASYIQbFfPDBRDrSYKL0nA3Wy35YejIu87utwtSHKT4QwlPcbqh0HneYR5MnJe506Jr2jeMYRs6k2FhB5sYsHvAwIJz7XBPpO8wBYl9G4yt_S7-dqDbSQZoFvk0UPRQlh1FzwASQ-qb46QWIBb2UoexXgAfR3dL2AqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYk9-ttdWklQNgAbEJvjDLs8VrYl-ACgGYCwHICwGiDDliFwoVb3JnLmNvdXJzZXJhLmNvdXJzZXJhahYKFG9yZy5jb3Vyc2VyYS5hbmRyb2lkeAGIAQGQAQGqDQJJTsgNAeoNEwjnqq-11aSVAxWLSzgFHWDvIA3wDQKIDgmwDoDw2u8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKMzE0NTgzMDY3MVAGuhcCOAGqGBcJ_____x9Z70ASCjMxNDU4MzA2NzEYAbIYCRICgFQYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI46GvtdWklQMVi0s4BR1g7yANEAEYASAAEgKrgvD_BwE&num=1&cid=CAQShwIAEQoqgeQOTWqJ2lUGzoafcKFGYFjzItGfdQ40GuE084QvRs2m3relMuFQ9fSfI1cp30xDqcG7Zxtb0xB7jJ7ohLoKqQPLmAvR0fH2ZlQBbElyUGdrm8DE91PI7TZRN91gSt4bwMhqowp-MCXBI_PIhQT0YZvbQ0la140fei3bebT8e2OrfUzswDJxSvvKBpDEjM1qiGuxtKzM1grd5v70AZhp0KPZPMBBPlSVE0_7YXFJuk8y2VoxdwcMu5wksy7rtUhwZM0bijSO8mrBFV1C7up_bKRpyNdO0Isv2qOAbUm4fHmwaxYBaJuXJLJcwaE1XKZ4zS92Wi3Z5b28SBmwtpd4cQ0LqxgB&sig=AOD64_3uaktTfpBprBvwJINFORyyhwFdxw&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMI46GvtdWklQMVi0s4BR1g7yANEAEYASAAEgKrgvD_BwE
                      - img [ref=f5e29]
                    - link [ref=f5e31] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CaVGCbFA-auO7H4uX4dkP4N6Daa6IzbqFAaKas8bEFYul1J2HKhABINORliJg5Zrog9gOoAGmv6m6A8gBAakCCr8avoe_Rj6oAwHIA8sEqgTpAU_QD8Yh6DrgwXg87RsDKTp6nbp8OIU0NVWIj6GTHVtjqZ5LLtB0K8qGt9ocFPC9Oh5pRnr3Atserrilzv6gqbjVb00-N5Lkq1E7KIzxPtjddZlO94jxH_BCylj2jMlS8q735JaF6AfuU59HlTKupLZ4nLhZ0QL2PK-ILD83o1m1w98SbRIw6ASYIQbFfPDBRDrSYKL0nA3Wy35YejIu87utwtSHKT4QwlPcbqh0HneYR5MnJe506Jr2jeMYRs6k2FhB5sYsHvAwIJz7XBPpO8wBYl9G4yt_S7-dqDbSQZoFvk0UPRQlh1FzwASQ-qb46QWIBb2UoexXgAfR3dL2AqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYk9-ttdWklQNgAbEJvjDLs8VrYl-ACgGYCwHICwGiDDliFwoVb3JnLmNvdXJzZXJhLmNvdXJzZXJhahYKFG9yZy5jb3Vyc2VyYS5hbmRyb2lkeAGIAQGQAQGqDQJJTsgNAeoNEwjnqq-11aSVAxWLSzgFHWDvIA3wDQKIDgmwDoDw2u8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKMzE0NTgzMDY3MVAGuhcCOAGqGBcJ_____x9Z70ASCjMxNDU4MzA2NzEYAbIYCRICgFQYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI46GvtdWklQMVi0s4BR1g7yANEAEYASAAEgKrgvD_BwE&num=1&cid=CAQShwIAEQoqgeQOTWqJ2lUGzoafcKFGYFjzItGfdQ40GuE084QvRs2m3relMuFQ9fSfI1cp30xDqcG7Zxtb0xB7jJ7ohLoKqQPLmAvR0fH2ZlQBbElyUGdrm8DE91PI7TZRN91gSt4bwMhqowp-MCXBI_PIhQT0YZvbQ0la140fei3bebT8e2OrfUzswDJxSvvKBpDEjM1qiGuxtKzM1grd5v70AZhp0KPZPMBBPlSVE0_7YXFJuk8y2VoxdwcMu5wksy7rtUhwZM0bijSO8mrBFV1C7up_bKRpyNdO0Isv2qOAbUm4fHmwaxYBaJuXJLJcwaE1XKZ4zS92Wi3Z5b28SBmwtpd4cQ0LqxgB&sig=AOD64_3uaktTfpBprBvwJINFORyyhwFdxw&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMI46GvtdWklQMVi0s4BR1g7yANEAEYASAAEgKrgvD_BwE
                - img [ref=f5e35] [cursor=pointer]
                - button [ref=f5e37] [cursor=pointer]:
                  - img [ref=f5e38]
                - iframe
        - insertion [ref=e101]:
          - generic [ref=e103]:
            - generic "These are topics related to the article that might interest you" [ref=e104]: Discover more
            - link "Koushik Chatterjee Consulting" [ref=e105] [cursor=pointer]:
              - img [ref=e107]
              - text: Koushik Chatterjee Consulting
            - link "Target Locator Training" [ref=e109] [cursor=pointer]:
              - img [ref=e111]
              - text: Target Locator Training
            - link "Software" [ref=e113] [cursor=pointer]:
              - img [ref=e115]
              - text: Software
            - link "Web Browsers" [ref=e117] [cursor=pointer]:
              - img [ref=e119]
              - text: Web Browsers
            - link "Online Learning Modules" [ref=e121] [cursor=pointer]:
              - img [ref=e123]
              - text: Online Learning Modules
            - link "Automation Engineer Training" [ref=e125] [cursor=pointer]:
              - img [ref=e127]
              - text: Automation Engineer Training
            - link "Open Source" [ref=e129] [cursor=pointer]:
              - img [ref=e131]
              - text: Open Source
            - link "Automation Strategy Consulting" [ref=e133] [cursor=pointer]:
              - img [ref=e135]
              - text: Automation Strategy Consulting
            - link "Development Tools" [ref=e137] [cursor=pointer]:
              - img [ref=e139]
              - text: Development Tools
            - link "LetCode Courses" [ref=e141] [cursor=pointer]:
              - img [ref=e143]
              - text: LetCode Courses
    - contentinfo [ref=e145]:
      - generic [ref=e146]:
        - paragraph [ref=e147]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e148] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e149] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e150]:
          - link "GitHub" [ref=e151] [cursor=pointer]:
            - /url: https://github.com/ortoniKC
            - img [ref=e152]
          - link "YouTube" [ref=e155] [cursor=pointer]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e156]
          - link "LinkedIn" [ref=e159] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e160]
          - link "Contact" [ref=e165] [cursor=pointer]:
            - /url: /contact
          - link "🍕 Support" [ref=e166] [cursor=pointer]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e167]:
    - iframe [ref=e170]:
      - generic [active] [ref=f11e1]:
        - generic [ref=f11e6]:
          - link "Coursera" [ref=f11e10] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CriFqbFA-arTVHeSX4dkPwpPU0QeuiM26hQGimrPGxBWLpdSdhyoQASDTkZYiYOWa6IPYDqABpr-pugPIAQGpAgq_Gr6Hv0Y-qAMByAPLBKoE6gFP0BB8EeyPh7aaMYXeBjyQX2xlDZEGpUOvLRoa2LI_KS0_CMAyPfkI9NTqhh24gc3xq48pT95zr37NaurzCbDOqkB1vFfw-o9sK32V0OHXRvUfEQNeGgjAe5jnsd4ykl51wnhi1F0YQCaFY0yczCPLYeDMWKtpjOiOxp3y2o-cNTQGYRMJhxgXhVviUsYHQC3b2BPGUavmSQu2wu2-oqrEoI2nIJ6Pbpl6lLiKJ6omLZc9fAOaNyDWQ-7CAKWrElR15HsqP2OELxdPTBfZDuTgFgUUX6iGiJhX8QbXVeUrfySIiQPC4E5r0lTABJD6pvjpBYgFvZSh7FeAB9Hd0vYCqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliD_qu11aSVA2ABsQm-MMuzxWtiX4AKAZgLAcgLAaIMOWIXChVvcmcuY291cnNlcmEuY291cnNlcmFqFgoUb3JnLmNvdXJzZXJhLmFuZHJvaWR4AYgBAZABAaoNAklOyA0B6g0TCIrBrbXVpJUDFeRLOAUdwgk1evANAogOCbAOgPDa7xjYEwvQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICgFQYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMItLuttdWklQMV5Es4BR3CCTV6EAEYASAAEgKjk_D_BwE&num=1&cid=CAQShwIAEQoqgaQI3ztWUOewVZ0XjtQtlr_uxCNEMMfcejhrMLNyj2CO5Mj7V-qDa-XGs6JB374xEynrv7ZFb0qfvgYYD7TsR0zrAIKfKGuPr_KJqTWGQ5mFlatYFAX-biwvtHoJaSqj9EHgCURuU0atCf77zjviTc6xv_dw6wWLSq7VMrmhw8VHmjJvraztLqvQbDwi-uZIrp3QW97i2P5MMPxxhKMezCln8BKLRqYO-8ootl1FJaenilDrlP3EeeOExFOI7P_3AH95dH-vQlf9FOhVZvEsO9Shf2vPgj4aVtfj_wFgWMVi-0pcWNMgBCRilWTuz5sWkz4vSBi3uuP28KH_lhjL5zYpOBgB&sig=AOD64_24D6xenp_zpTaNf_C3uPq2yMrAHw&client=ca-pub-6251538267574677&rf=1&nb=19&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMItLuttdWklQMV5Es4BR3CCTV6EAEYASAAEgKjk_D_BwE
            - img "Coursera" [ref=f11e11]
          - generic [ref=f11e13]:
            - generic "Coursera" [ref=f11e14]:
              - link "Coursera" [ref=f11e15] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CriFqbFA-arTVHeSX4dkPwpPU0QeuiM26hQGimrPGxBWLpdSdhyoQASDTkZYiYOWa6IPYDqABpr-pugPIAQGpAgq_Gr6Hv0Y-qAMByAPLBKoE6gFP0BB8EeyPh7aaMYXeBjyQX2xlDZEGpUOvLRoa2LI_KS0_CMAyPfkI9NTqhh24gc3xq48pT95zr37NaurzCbDOqkB1vFfw-o9sK32V0OHXRvUfEQNeGgjAe5jnsd4ykl51wnhi1F0YQCaFY0yczCPLYeDMWKtpjOiOxp3y2o-cNTQGYRMJhxgXhVviUsYHQC3b2BPGUavmSQu2wu2-oqrEoI2nIJ6Pbpl6lLiKJ6omLZc9fAOaNyDWQ-7CAKWrElR15HsqP2OELxdPTBfZDuTgFgUUX6iGiJhX8QbXVeUrfySIiQPC4E5r0lTABJD6pvjpBYgFvZSh7FeAB9Hd0vYCqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliD_qu11aSVA2ABsQm-MMuzxWtiX4AKAZgLAcgLAaIMOWIXChVvcmcuY291cnNlcmEuY291cnNlcmFqFgoUb3JnLmNvdXJzZXJhLmFuZHJvaWR4AYgBAZABAaoNAklOyA0B6g0TCIrBrbXVpJUDFeRLOAUdwgk1evANAogOCbAOgPDa7xjYEwvQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICgFQYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMItLuttdWklQMV5Es4BR3CCTV6EAEYASAAEgKjk_D_BwE&num=1&cid=CAQShwIAEQoqgaQI3ztWUOewVZ0XjtQtlr_uxCNEMMfcejhrMLNyj2CO5Mj7V-qDa-XGs6JB374xEynrv7ZFb0qfvgYYD7TsR0zrAIKfKGuPr_KJqTWGQ5mFlatYFAX-biwvtHoJaSqj9EHgCURuU0atCf77zjviTc6xv_dw6wWLSq7VMrmhw8VHmjJvraztLqvQbDwi-uZIrp3QW97i2P5MMPxxhKMezCln8BKLRqYO-8ootl1FJaenilDrlP3EeeOExFOI7P_3AH95dH-vQlf9FOhVZvEsO9Shf2vPgj4aVtfj_wFgWMVi-0pcWNMgBCRilWTuz5sWkz4vSBi3uuP28KH_lhjL5zYpOBgB&sig=AOD64_24D6xenp_zpTaNf_C3uPq2yMrAHw&client=ca-pub-6251538267574677&rf=1&nb=1&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMItLuttdWklQMV5Es4BR3CCTV6EAEYASAAEgKjk_D_BwE
            - generic "Coursera" [ref=f11e16]:
              - link "New Google AI Certificate" [ref=f11e17] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CriFqbFA-arTVHeSX4dkPwpPU0QeuiM26hQGimrPGxBWLpdSdhyoQASDTkZYiYOWa6IPYDqABpr-pugPIAQGpAgq_Gr6Hv0Y-qAMByAPLBKoE6gFP0BB8EeyPh7aaMYXeBjyQX2xlDZEGpUOvLRoa2LI_KS0_CMAyPfkI9NTqhh24gc3xq48pT95zr37NaurzCbDOqkB1vFfw-o9sK32V0OHXRvUfEQNeGgjAe5jnsd4ykl51wnhi1F0YQCaFY0yczCPLYeDMWKtpjOiOxp3y2o-cNTQGYRMJhxgXhVviUsYHQC3b2BPGUavmSQu2wu2-oqrEoI2nIJ6Pbpl6lLiKJ6omLZc9fAOaNyDWQ-7CAKWrElR15HsqP2OELxdPTBfZDuTgFgUUX6iGiJhX8QbXVeUrfySIiQPC4E5r0lTABJD6pvjpBYgFvZSh7FeAB9Hd0vYCqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliD_qu11aSVA2ABsQm-MMuzxWtiX4AKAZgLAcgLAaIMOWIXChVvcmcuY291cnNlcmEuY291cnNlcmFqFgoUb3JnLmNvdXJzZXJhLmFuZHJvaWR4AYgBAZABAaoNAklOyA0B6g0TCIrBrbXVpJUDFeRLOAUdwgk1evANAogOCbAOgPDa7xjYEwvQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICgFQYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMItLuttdWklQMV5Es4BR3CCTV6EAEYASAAEgKjk_D_BwE&num=1&cid=CAQShwIAEQoqgaQI3ztWUOewVZ0XjtQtlr_uxCNEMMfcejhrMLNyj2CO5Mj7V-qDa-XGs6JB374xEynrv7ZFb0qfvgYYD7TsR0zrAIKfKGuPr_KJqTWGQ5mFlatYFAX-biwvtHoJaSqj9EHgCURuU0atCf77zjviTc6xv_dw6wWLSq7VMrmhw8VHmjJvraztLqvQbDwi-uZIrp3QW97i2P5MMPxxhKMezCln8BKLRqYO-8ootl1FJaenilDrlP3EeeOExFOI7P_3AH95dH-vQlf9FOhVZvEsO9Shf2vPgj4aVtfj_wFgWMVi-0pcWNMgBCRilWTuz5sWkz4vSBi3uuP28KH_lhjL5zYpOBgB&sig=AOD64_24D6xenp_zpTaNf_C3uPq2yMrAHw&client=ca-pub-6251538267574677&rf=1&nb=0&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMItLuttdWklQMV5Es4BR3CCTV6EAEYASAAEgKjk_D_BwE
            - generic "Coursera" [ref=f11e18]:
              - link "Enroll in the new Google AI Professional Certificate today." [ref=f11e19] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CriFqbFA-arTVHeSX4dkPwpPU0QeuiM26hQGimrPGxBWLpdSdhyoQASDTkZYiYOWa6IPYDqABpr-pugPIAQGpAgq_Gr6Hv0Y-qAMByAPLBKoE6gFP0BB8EeyPh7aaMYXeBjyQX2xlDZEGpUOvLRoa2LI_KS0_CMAyPfkI9NTqhh24gc3xq48pT95zr37NaurzCbDOqkB1vFfw-o9sK32V0OHXRvUfEQNeGgjAe5jnsd4ykl51wnhi1F0YQCaFY0yczCPLYeDMWKtpjOiOxp3y2o-cNTQGYRMJhxgXhVviUsYHQC3b2BPGUavmSQu2wu2-oqrEoI2nIJ6Pbpl6lLiKJ6omLZc9fAOaNyDWQ-7CAKWrElR15HsqP2OELxdPTBfZDuTgFgUUX6iGiJhX8QbXVeUrfySIiQPC4E5r0lTABJD6pvjpBYgFvZSh7FeAB9Hd0vYCqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliD_qu11aSVA2ABsQm-MMuzxWtiX4AKAZgLAcgLAaIMOWIXChVvcmcuY291cnNlcmEuY291cnNlcmFqFgoUb3JnLmNvdXJzZXJhLmFuZHJvaWR4AYgBAZABAaoNAklOyA0B6g0TCIrBrbXVpJUDFeRLOAUdwgk1evANAogOCbAOgPDa7xjYEwvQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICgFQYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMItLuttdWklQMV5Es4BR3CCTV6EAEYASAAEgKjk_D_BwE&num=1&cid=CAQShwIAEQoqgaQI3ztWUOewVZ0XjtQtlr_uxCNEMMfcejhrMLNyj2CO5Mj7V-qDa-XGs6JB374xEynrv7ZFb0qfvgYYD7TsR0zrAIKfKGuPr_KJqTWGQ5mFlatYFAX-biwvtHoJaSqj9EHgCURuU0atCf77zjviTc6xv_dw6wWLSq7VMrmhw8VHmjJvraztLqvQbDwi-uZIrp3QW97i2P5MMPxxhKMezCln8BKLRqYO-8ootl1FJaenilDrlP3EeeOExFOI7P_3AH95dH-vQlf9FOhVZvEsO9Shf2vPgj4aVtfj_wFgWMVi-0pcWNMgBCRilWTuz5sWkz4vSBi3uuP28KH_lhjL5zYpOBgB&sig=AOD64_24D6xenp_zpTaNf_C3uPq2yMrAHw&client=ca-pub-6251538267574677&rf=1&nb=7&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMItLuttdWklQMV5Es4BR3CCTV6EAEYASAAEgKjk_D_BwE
                - text: Enroll in the new Google AI Professional
                - text: Certificate today.
          - link "Learn More" [ref=f11e23] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CriFqbFA-arTVHeSX4dkPwpPU0QeuiM26hQGimrPGxBWLpdSdhyoQASDTkZYiYOWa6IPYDqABpr-pugPIAQGpAgq_Gr6Hv0Y-qAMByAPLBKoE6gFP0BB8EeyPh7aaMYXeBjyQX2xlDZEGpUOvLRoa2LI_KS0_CMAyPfkI9NTqhh24gc3xq48pT95zr37NaurzCbDOqkB1vFfw-o9sK32V0OHXRvUfEQNeGgjAe5jnsd4ykl51wnhi1F0YQCaFY0yczCPLYeDMWKtpjOiOxp3y2o-cNTQGYRMJhxgXhVviUsYHQC3b2BPGUavmSQu2wu2-oqrEoI2nIJ6Pbpl6lLiKJ6omLZc9fAOaNyDWQ-7CAKWrElR15HsqP2OELxdPTBfZDuTgFgUUX6iGiJhX8QbXVeUrfySIiQPC4E5r0lTABJD6pvjpBYgFvZSh7FeAB9Hd0vYCqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliD_qu11aSVA2ABsQm-MMuzxWtiX4AKAZgLAcgLAaIMOWIXChVvcmcuY291cnNlcmEuY291cnNlcmFqFgoUb3JnLmNvdXJzZXJhLmFuZHJvaWR4AYgBAZABAaoNAklOyA0B6g0TCIrBrbXVpJUDFeRLOAUdwgk1evANAogOCbAOgPDa7xjYEwvQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRICgFQYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMItLuttdWklQMV5Es4BR3CCTV6EAEYASAAEgKjk_D_BwE&num=1&cid=CAQShwIAEQoqgaQI3ztWUOewVZ0XjtQtlr_uxCNEMMfcejhrMLNyj2CO5Mj7V-qDa-XGs6JB374xEynrv7ZFb0qfvgYYD7TsR0zrAIKfKGuPr_KJqTWGQ5mFlatYFAX-biwvtHoJaSqj9EHgCURuU0atCf77zjviTc6xv_dw6wWLSq7VMrmhw8VHmjJvraztLqvQbDwi-uZIrp3QW97i2P5MMPxxhKMezCln8BKLRqYO-8ootl1FJaenilDrlP3EeeOExFOI7P_3AH95dH-vQlf9FOhVZvEsO9Shf2vPgj4aVtfj_wFgWMVi-0pcWNMgBCRilWTuz5sWkz4vSBi3uuP28KH_lhjL5zYpOBgB&sig=AOD64_24D6xenp_zpTaNf_C3uPq2yMrAHw&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://www.coursera.org/professional-certificates/google-ai%3Futm_medium%3Dsem%26utm_source%3Dgg%26utm_campaign%3Db2c_india_google-ai_google_ftcof_professional-certificates_cx_dr_bau_gg_pmax_pr_in_all_m_hyb_26-02_desktop%26campaignid%3D23575536696%26adgroupid%3D%26device%3Dc%26keyword%3D%26matchtype%3D%26network%3Dx%26devicemodel%3D%26creativeid%3D%26assetgroupid%3D6676723712%26targetid%3D%26extensionid%3D%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23580920381%26gclid%3DEAIaIQobChMItLuttdWklQMV5Es4BR3CCTV6EAEYASAAEgKjk_D_BwE
            - generic [ref=f11e24]: Learn More
            - img [ref=f11e25]
        - img [ref=f11e30] [cursor=pointer]
        - button [ref=f11e32] [cursor=pointer]:
          - img [ref=f11e33]
        - iframe
```

# Test source

```ts
  1  | import {expect,test} from '@playwright/test';
  2  | 
  3  | test('textTest',async({page})=>{
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
  59 |         await alert.accept("Jerish");
  60 |     });
  61 |     page.waitForTimeout(300);
  62 |     await page.click("//p[text()='Prompt box:']/button");
  63 |     const msg = await page.locator("//p[@id='prompt-demo']");
  64 |     await expect(msg).toContainText("Jerish");
  65 |     console.log(await msg.textContent());
  66 | 
  67 | });
  68 | 
  69 | test('dropdown select',async({page})=>{
  70 |     await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
  71 |     
  72 |     await page.selectOption('#select-demo',{label:'Friday'})
  73 |     await page.waitForTimeout(3000)
  74 | 
  75 |     await page.selectOption('#multi-select',[{label:'Texas'},{value:'Ohio'},{index:2}])
  76 |     await page.waitForTimeout(3000)
  77 | 
  78 | });
  79 | 
  80 | test('frames',async({page})=>{
  81 |     await page.goto("https://letcode.in/frame");
  82 |     const allFrames = page.frames();
  83 |     console.log("No of Frames: "+allFrames.length)
  84 |     const myFrame = page.frame('firstFr')
  85 |     await myFrame?.fill("//input[@name='fname']","Jerish")
  86 |     await myFrame?.fill("//input[@name='lname']","Joseph")
  87 | 
  88 |     const frame = page.frameLocator('iframe[name="firstFr"]')
  89 |     const box = frame.locator("p.text-sm font-semibold text-center")
> 90 |     await box.scrollIntoViewIfNeeded()
     |               ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
  91 |     await expect(box).toContainText("Jerish")
  92 | })
  93 | 
  94 | 
```