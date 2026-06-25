# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegenDemo.test.ts >> test
- Location: tests\codegenDemo.test.ts:3:5

# Error details

```
Error: page.waitForEvent: Test ended.
=========================== logs ===========================
waiting for event "popup"
============================================================
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://www.amazon.in/');
  5  |   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  6  |   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('pixel');
  7  |   await page.getByRole('button', { name: 'pixel 9a' }).click();
> 8  |   const page2Promise = page.waitForEvent('popup');
     |                             ^ Error: page.waitForEvent: Test ended.
  9  |   await page.getByRole('link', { name: 'Pixel 9A (Obsidian, 256 GB) (' }).click();
  10 |   const page2 = await page2Promise;
  11 |   await page2.goto('https://www.amazon.in/Google-Pixel-Obsidian-256-RAM/dp/B0F6CY1S9Z/ref=sr_1_2?crid=18QLSTCJI1HT5&dib=eyJ2IjoiMSJ9.t_rL2Kj4w6zxqdNqBOd9liXzeIFfXdtf8blO5_QourUcap3qRmOWyVkSoEAjpePZDb0JJVneEhilA7GERKu05uGcLMe7sxAnIbEFbV_AV1OrO8CTtporenVrwijPx6zz0IxRkCq7bMLUROF_JjStMJByPZlEcoOZ-VAc-xBljsG_IXDT1Tk8nrTykoOQLvFe00uFFe6EP_OyIGwNrV_ApT0AHnQ2k0JphqLIEdVuiJQ.Lfd1-9WeegT-4R90xHbmB6IqZr_BSJSJV3IYMqZeoWw&dib_tag=se&keywords=pixel%2B9a&qid=1782364287&sprefix=pixel%2Caps%2C265&sr=8-2&th=1');
  12 |   await expect(page2.locator('#title')).toContainText('Google Pixel 9A (Obsidian, 256 GB) (8 GB RAM)');
  13 |   await page2.getByRole('button', { name: 'Add to cart' }).click();
  14 |   await page2.locator('#sw-gtc').getByRole('link', { name: 'Go to Cart' }).click();
  15 |   await expect(page2.getByLabel('Shopping Cart', { exact: true })).toContainText('Google Pixel 9A (Obsidian, 256 GB) (8 GB RAM)');
  16 | });
```