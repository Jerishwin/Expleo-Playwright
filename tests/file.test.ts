import {test, expect} from "@playwright/test"

test("File Upload test",async({page})=>{

    await page.goto("https://omayo.blogspot.com/")
    await page.locator("//input[@id='uploadfile']").setInputFiles("C:\\Users\\Jerishwin Joseph\\Downloads\\Copy of Jerishwin Joseph S - CSE.pdf")
    const filePath=await page.locator("//input[@id='uploadfile']").inputValue();
    expect(filePath).toContain("Copy of Jerishwin Joseph S - CSE.pdf");
    
})


test("Download Pdf",async({page})=>{

    await page.goto("https://qwikpdf.com/sample-pdf-with-text-and-images.html")

    await page.click("//button[@id='btn-size-100kb']")

    const promise=await page.waitForEvent("download")

    await expect(await promise.suggestedFilename()).toBe("sample-100kb.pdf")
})