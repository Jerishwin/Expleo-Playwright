import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { worker } from 'node:cluster';
  const envName = process.env.ENV||'qa';
  dotenv.config({ path: `./env/.env.${envName}` });

export default defineConfig({
  testDir: './tests',
  workers:process.env.CI?1:undefined,
  //testMatch:['/tests/file.test.ts'],
  //repeatEach:2,
  retries:2,
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'always' }],
    ['allure-playwright', { outputFolder: 'allure-results', detail: true }],
  ],
  fullyParallel:true,
  use: {
    browserName: 'firefox',
    headless: true,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized']
    },
    trace: 'on',
    screenshot: 'only-on-failure',
    video:'on'
  }
});
