import {test,expect} from '@playwright/test';
import loginData from "../testData/loginData.json" with { type: "json" };

interface LoginData{
    testname: string
    username: string
    password: string
    expextedResult: "Success" | "Failure"
    expectedMessage:string
}

const users = loginData as LoginData[];

for(const data of users){
    test(`${data.testname}`,async({page})=>{
        await page.goto("https://demoblaze.com/")

        await page.click("#login2")
        await page.fill("#loginusername",data.username)
        await page.fill("#loginpassword",data.password)

        if(data.expextedResult=="Failure"){
            page.once("dialog",async dialog=>{
                expect(dialog.message()).toBe(data.expectedMessage)
                await dialog.accept()
            })
        }

        await page.click("//button[text()='Log in']");

        if(data.expextedResult==="Success"){
            await expect(page.locator("#nameofuser")).toBeVisible({timeout:10000})

            await expect(page.locator("#nameofuser")).toContainText(`Welcome ${data.username}`)
        }
    })
}