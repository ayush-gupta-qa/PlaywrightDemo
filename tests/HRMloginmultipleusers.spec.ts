import { test, expect } from '@playwright/test';
import users from '../Test-Data1/Multiplelogin.json';

test("Single user login test from json", async ({ page }) => {

    // Select first object from JSON
    const singleUser = users[0];

    // Print test data
    console.log(`Username: ${singleUser.username}`);
    console.log(`Password: ${singleUser.password}`);
    console.log(`Expected URL: ${singleUser.expectedUrl}`);

    await page.goto(singleUser.url);
    await page.locator('input[name="username"]').fill(singleUser.username);
    await page.locator('input[name="password"]').fill(singleUser.password);
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('h6')).toBeVisible();
    await page.waitForLoadState('networkidle');
});

users.forEach((user) => {
    test(`Multiple users login from json: ${user.username}`, async ({ page }) => {

        console.log(`Username: ${user.username}`);
        console.log(`Password: ${user.password}`);
        console.log(`Expected URL: ${user.expectedUrl}`);

        await page.goto(user.url);
        await page.locator('input[name="username"]').fill(user.username);
        await page.locator('input[name="password"]').fill(user.password);
        await page.locator('button[type="submit"]').click();
        await page.waitForLoadState('networkidle');
    });
});
