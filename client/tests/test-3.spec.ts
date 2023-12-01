import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=http%2F%2Flocalhost%3A8080&oq=http%2F%2Flocalhost%3A8080&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEJMTI4NDVqMGoyqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page.goto('http://localhost:8080/');
  await page.goto('http://localhost:8080/#/');
  await page.goto('http://localhost:8080/#/songs');
});