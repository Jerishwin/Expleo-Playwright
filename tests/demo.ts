import{firefox,Browser,Page} from 'playwright';

(async()=>{
    const browser = await firefox.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demoblaze.com/');

    await page.click("//a[@id='login2']");
    await page.fill("//input[@id='loginusername']","Banton24");
    await page.fill("//input[@id='loginpassword']","JeriJose.1");
    await page.click("//button[text()='Log in']");

    page.waitForTimeout(5000);

    const page1= await context.newPage();
    await page1.goto('https://demoblaze.com/');
    page1.waitForTimeout(5000);
    await browser.close();
})();