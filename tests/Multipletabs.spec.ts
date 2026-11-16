import {test, expect} from '@playwright/test';

test("Multiple tabs test", async ({page, context}) => {
    test.setTimeout(120000);
    // Open the first tab and navigate to a URL
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.waitForLoadState('networkidle');

    // Open a new tab and navigate to another URL
    const newTab = await context.newPage();
    await newTab.goto('https://www.google.com');
    await newTab.locator("textarea[name='q']").fill('Playwright');
    //await newTab.close();
    await page.waitForLoadState('domcontentloaded');
    await page.bringToFront();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.waitForTimeout(5000);
    await newTab.bringToFront();
    await newTab.getByRole('button', {name: 'Google Search'}).first().click();
    await newTab.waitForLoadState('networkidle');
    await newTab.close();

});