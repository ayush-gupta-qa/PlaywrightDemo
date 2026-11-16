
import { test, expect } from '@playwright/test';

test('Verify login heading using textContent', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const heading = await page.locator("//h5[text()='Login']").textContent();
    console.log(heading);
    expect(heading).toBe('Login');
    await page.waitForTimeout(3000);
});


test('Verify required message using textContent', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('//button[normalize-space()="Login"]').click();
    const message = await page.locator('(//span[text()="Required"])[1]').textContent();
    console.log(message);
    expect(message).toBe('Required');
    await page.waitForTimeout(3000);
});
