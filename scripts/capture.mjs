import { chromium } from '@playwright/test';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle' });
await page.screenshot({ path: 'docs/visual/home-desktop.png', fullPage: false });
await page.evaluate(() => window.scrollTo(0, 930));
await page.waitForTimeout(250);
await page.screenshot({ path: 'docs/visual/home-compact-header.png', fullPage: false });
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, deviceScaleFactor: 1 });
await mobile.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle' });
await mobile.screenshot({ path: 'docs/visual/home-mobile.png', fullPage: false });
await browser.close();
