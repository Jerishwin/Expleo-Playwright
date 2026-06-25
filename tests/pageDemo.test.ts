import{firefox,test} from '@playwright/test';

test("Test pages",async()=>{
    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demoblaze.com/');
    

    await page.click("//a[@id='login2']");
    await page.fill("//input[@id='loginusername']","Banton24");
    await page.fill("//input[@id='loginpassword']","JeriJose.1");
    await page.click("//button[text()='Log in']");
    console.log(await page.title());
    const html = await page.content();
    console.log(html.substring(0,300));

    const url = await page.url();
    console.log(url);

    const page1= await context.newPage();
    await page1.goto('https://demoblaze.com/');
    await page1.waitForTimeout(5000);
    await page1.close();
    await browser.close();
});