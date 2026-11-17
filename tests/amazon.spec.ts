import { test } from '@playwright/test';

test('Search laptop', async ({ page }) => {
    await page.goto('https://www.amazon.in');

    const searchBox = page.getByPlaceholder('Search Amazon.in');
    

    await searchBox.fill('Laptop');
    await page.waitForLoadState('load');
    console.log('ayush');
    console.log('ayush');
    console.log('ayush');
    console.log('ayush');
    console.log('ayush');
    console.log('ayush');
    console.log('bhaj lo ram ram');
    console.log('ayush');
    console.log('ayush');
    console.log('ayush');
    console.log('ayush');
    console.log('ayush');
    console.log('ayush');
    console.log('bhaj lo ram ram');
});







    
