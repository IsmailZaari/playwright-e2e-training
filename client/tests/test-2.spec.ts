import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://www.bol.com/nl/nl/');
await page.getByRole('button', { name: 'Alles accepteren' }).click();
await page.locator('[data-test="continue-button"]').click();
await page.getByRole('link', { name: 'JBL Tune 770NC - Draadloze' }).first().click();
await page.locator('[data-test="default-buy-block"]').getByRole('button', { name: 'In winkelwagen' }).click();
});