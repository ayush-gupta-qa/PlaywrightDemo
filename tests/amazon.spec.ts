import { test } from '@playwright/test';

test('Search laptop', async ({ page }) => {
    await page.goto('https://www.amazon.in');

    const searchBox = page.getByPlaceholder('Search Amazon.in');
    

    await searchBox.fill('Laptop');
    await page.waitForTimeout(5000);
});







    