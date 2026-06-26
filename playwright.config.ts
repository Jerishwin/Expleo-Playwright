import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

  const envName = process.env.ENV||'qa';
  dotenv.config({ path: `./env/.env.${envName}` });

export default defineConfig({
  testDir: './tests',
  testMatch:['/tests/testmu.test.ts'],
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'always' }],
    ['allure-playwright', { outputFolder: 'allure-results', detail: true }],
  ],

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
