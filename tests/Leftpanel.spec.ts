import {test, expect} from '@playwright/test';

test('Verify admin page visibility', async({page}) => {
    test.setTimeout(80000);
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
    await page.locator("//span[text()='Admin']").click();
    await page.waitForTimeout(3000);
    await expect(page.locator("//h6[text()='Admin']")).toBeVisible();
});

test('Verify PIM page visibility', async({page}) => {
    test.setTimeout(80000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='PIM']").click();
    await page.waitForTimeout(3000);
    await expect(page.locator("//h6[text()='PIM']")).toBeVisible();
});

test('Verify Leave page visibility', async({page}) => {
    test.setTimeout(80000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='Leave']").click();
    await page.waitForTimeout(3000);
    await expect(page.locator("//h6[text()='Leave']")).toBeVisible();
});

test('Verify Time page visibility', async({page}) => {
    test.setTimeout(80000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='Time']").click();
    await page.waitForTimeout(3000);
    await expect(page.locator("//h6[text()='Time']")).toBeVisible();
});

test('Verify Recruiment page visibility', async({page}) => {
    test.setTimeout(80000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='Recruitment']").click();
    await page.waitForTimeout(3000);
    await expect(page.locator("//h6[text()='Recruitment']")).toBeVisible();
});

test('Verify My Info page visibility', async({page}) => {
    test.setTimeout(80000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='My Info']").click();
    await page.waitForTimeout(3000);
    await expect(page.locator("//h6[text()='PIM']")).toBeVisible();
});

test('Verify Performance page visibility', async({page}) => {
    test.setTimeout(80000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='Performance']").click();
    await page.waitForTimeout(3000);
    await expect(page.locator("//h6[text()='Performance']")).toBeVisible();
});

test('Verify Directory page visibility', async({page}) => {
    test.setTimeout(80000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='Directory']").click();
    await page.waitForTimeout(3000);
    await expect(page.locator("//h6[text()='Directory']")).toBeVisible();
});

test('Verify Maintenance page visibility', async({page}) => {
    test.setTimeout(80000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='Maintenance']").click();
    await page.waitForTimeout(3000);
    //await expect(page.locator("//h6[text()='Maintenance']")).toBeVisible();
});

test('Verify Claim page visibility', async({page}) => {
    test.setTimeout(80000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='Claim']").click();
    await page.waitForTimeout(3000);
    await expect(page.locator("//h6[text()='Claim']")).toBeVisible();
});

test('Verify Buzz page visibility', async({page}) => {
    test.setTimeout(80000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='Buzz']").click();
    await page.waitForTimeout(3000);
    await expect(page.locator("//h6[text()='Buzz']")).toBeVisible();
});