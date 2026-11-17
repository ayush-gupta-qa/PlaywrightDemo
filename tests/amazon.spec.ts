import { test } from '@playwright/test';

test('Search laptop', async ({ page }) => {
    await page.goto('https://www.amazon.in');

    const searchBox = page.getByPlaceholder('Search Amazon.in');
    

    await searchBox.fill('Laptop');
    await page.waitForLoadState('load');
    console.log("shivam");
    console.log("shivam");
    console.log("shivam");
    console.log("shivam");
    console.log("shivam");
    console.log("shivam");
    console.log("shivam");
    console.log("shivam");
    console.log("shivam");
    console.log("shivam");
    console.log("shivam");
    console.log("shivam");
    console.log("shivam");
    console.log("shivam");
    console.log("shivam");
});







    