import { expect, test } from '@playwright/test';

test('floating header opens the Solutions menu and compacts on scroll', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: "Powering Africa's digital future." })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Next Go Tech' }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Solutions' }).click();
  await expect(page.getByRole('region', { name: 'Solutions' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Communication Solutions' })).toBeVisible();
  await page.evaluate(() => window.scrollTo(0, 900));
  await expect.poll(() => page.locator('.site-header').evaluate((element) => element.classList.contains('is-compact'))).toBe(true);
});

test('mobile navigation is reachable and the contact form submits an enquiry', async ({ browser }) => {
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true });
  await mobile.route('**/api/v1/leads', async (route) => route.fulfill({ status: 201, contentType: 'application/json', body: JSON.stringify({ message: 'Thank you. We will be in touch shortly.' }) }));
  await mobile.goto('/');
  await mobile.getByRole('button', { name: 'Open menu' }).click();
  await expect(mobile.locator('.mobile-menu').getByRole('link', { name: 'What we do' })).toBeVisible();
  await mobile.locator('.mobile-menu').getByRole('link', { name: 'Contact' }).click();
  await expect(mobile).toHaveURL(/\/contact$/);
  await mobile.getByRole('button', { name: 'Send message' }).click();
  await expect(mobile.locator('.form-error')).toBeVisible();
  await mobile.locator('input[placeholder="Amina"]').fill('Amina');
  await mobile.locator('input[placeholder="amina@example.com"]').fill('amina@example.com');
  await mobile.locator('textarea').fill('We need help shaping an accessible member platform.');
  await mobile.locator('input[type="checkbox"]').check();
  await mobile.getByRole('button', { name: 'Send message' }).click();
  await expect(mobile.getByRole('heading', { name: 'Thank you — your message has been sent.' })).toBeVisible();
  await mobile.close();
});

test('representative public routes render', async ({ page }) => {
  for (const route of ['/about', '/services', '/solutions', '/case-studies', '/careers', '/internships', '/life-at-next-go', '/book-a-call', '/data-protection']) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
  }
});
