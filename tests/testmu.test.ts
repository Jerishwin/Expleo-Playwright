import {expect,test} from '@playwright/test';

test('textTest',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const placeHolder = page.locator("//input[@id='user-message']");
    console.log(await placeHolder.getAttribute('placeholder'));
    console.log('Before entering value: '+ await placeHolder.inputValue());
    await placeHolder.pressSequentially("Jerish",{delay:100});
    await page.click("//button[@id='showInput']");
    console.log('After entering value: '+ await placeHolder.inputValue());
    await expect(page.locator("//p[@id='message']")).toContainText("Jerish");
});

test('sumTest',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const a = 20;
    const b = 30;
    const input1 = page.locator("#sum1");
    const input2 = page.locator("#sum2");
    await input1.pressSequentially(a.toString(),{delay:100});
    await input2.fill(b.toString());
    await page.waitForTimeout(5000);
    const box = page.locator("//button[text()='Get Sum']");
    console.log(await box.boundingBox());
    await box.click();
    const sum = page.locator("//p[@id='addmessage']"); 
    await expect(sum).toContainText((a+b).toString());

});

test('simple alerts',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.on('dialog',async(alert)=>{
        console.log(alert.message());
        await alert.accept();
        console.log("Alert Accepted!");
    });
    await page.click("//p[text()='JavaScript Alerts']/button");

});

test('confirm alerts',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.on('dialog',async(alert)=>{
        console.log(alert.message());
        await alert.dismiss();
        console.log("Alert dismised!");
    });
    await page.click("//p[text()='Confirm box:']/button");
    const msg = await page.locator("//p[@id='confirm-demo']").textContent();
    console.log(msg);

});

test('prompt alerts',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.on('dialog',async(alert)=>{
        console.log(alert.message());
        await alert.accept("Jerish");
    });
    page.waitForTimeout(300);
    await page.click("//p[text()='Prompt box:']/button");
    const msg = await page.locator("//p[@id='prompt-demo']");
    await expect(msg).toContainText("Jerish");
    console.log(await msg.textContent());

});

test('dropdown select',async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");
    
    await page.selectOption('#select-demo',{label:'Friday'})
    await page.waitForTimeout(3000)

    await page.selectOption('#multi-select',[{label:'Texas'},{value:'Ohio'},{index:2}])
    await page.waitForTimeout(3000)

});

test('frames',async({page})=>{
    await page.goto("https://letcode.in/frame");
    const allFrames = page.frames();
    console.log("No of Frames: "+allFrames.length)
    const myFrame = page.frame('firstFr')
    await myFrame?.fill("//input[@name='fname']","Jerish")
    await myFrame?.fill("//input[@name='lname']","Joseph")

    const frame = page.frameLocator('iframe[name="firstFr"]')
    const box = frame.locator("//p[@class='text-sm font-semibold text-center']")
    await box.scrollIntoViewIfNeeded()
    await expect(box).toContainText("Jerish")
    console.log(await box.textContent())

    const innerFrame = frame?.frameLocator("iframe[src='/innerframe']");
    await innerFrame?.locator("input[name='email']").fill('jeri@gmail.com');
})

test('Handle windows',async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows");
    console.log("First window URL: "+page.url())
    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ])
    await newWindow.waitForLoadState("domcontentloaded")

    console.log("New window URL: "+newWindow.url())
    const text = await newWindow.locator("//h1")
    await expect(text).toContainText("This is a sample page")
    console.log(await text.textContent())
    newWindow.close()

})

test('iterate windows',async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows");

    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ])

    await tab.waitForLoadState()
     const [window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ])
    await window.waitForLoadState()



    const pages =context.pages()

    console.log("No of Pages: "+pages.length)

    for(const p of pages){
        console.log("------------")
        console.log("URL: "+p.url())
        console.log("Title: ", await p.title())
    }

    tab.close()
    window.close()
})


test('iterate windows attribute',async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows");

    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ])

    await tab.waitForLoadState()
     const [window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ])
    await window.waitForLoadState()



    const pages =context.pages()

    console.log("No of Pages: "+pages.length)

    for(const p of pages){
        console.log("URL: "+p.url())
        if(p.url().includes("sample")){
            const text = await p.locator("#sampleHeading").textContent()
            console.log("sample Heding"+ text)
        }
    }

    tab.close()
    window.close()
})
