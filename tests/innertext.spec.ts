import { test, expect } from '@playwright/test';

test('Verify login functionality without credentials', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//button[@type='submit']").click();
    const errorMessage1 = await page.locator("(//span[text()='Required'])[1]").innerText();
    const errorMessage2 = await page.locator("(//span[text()='Required'])[2]").innerText();
    console.log(errorMessage1);
    console.log(errorMessage2);
    expect(errorMessage1).toBe('Required');
    expect(errorMessage2).toBe('Required');
    await page.waitForTimeout(5000);
});

// test('Verify login functionality with invalid credentials', async ({ page }) => {

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.locator("//input[starts-with(@name,'user') and not (contains(@placeholder,'fwfdf'))]").fill("Abc");
//     await page.locator("//input[contains(@name,'ssw')]").fill("xyz");
//     await page.locator("//button[@type='submit']").click();
//     const errorMessage = await page.locator("//p[text()='Invalid credentials']").innerText();
//     console.log(errorMessage);
//     expect(errorMessage).toBe('Invalid credentials');
//     await page.waitForTimeout(5000);
// });

// test('Verify success message after creating a user', async ({ page }) => {
//     test.setTimeout(80000);
//     await page.goto('https://opensource-demo.orangehrmlive.com/');
//     await page.locator("//input[@name='username']").fill("Admin");
//     await page.locator("//input[@name='password']").fill("admin123");
//     await page.locator("//button[@type='submit']").click();
//     await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
//     await page.locator("//span[text()='Admin']").click();
//     await page.waitForTimeout(3000);
//     await expect(page.locator("//h6[text()='Admin']")).toBeVisible();
//     await page.locator("//i[@class='oxd-icon bi-plus oxd-button-icon']").click();
//     await expect(page.locator("//h6[text()='Add User']")).toBeVisible();
//     await page.locator("//label[text()='User Role']//following::div[1]").click();
//     await page.locator("(//span[text()='Admin'])[2]").click();
//     await page.locator("//label[text()='Status']//following::div[1]").click();
//     await page.locator("//span[text()='Enabled']").click();
//     await page.locator("//label[text()='Employee Name']//following::input[1]").fill("a");
//     await page.waitForTimeout(5000);
//     await page.locator("div[role='listbox']>div:nth-child(1)").click();
//     await page.locator("//label[text()='Username']//following::input[1]").fill("Ayush21");
//     await page.locator("//label[text()='Password']//following::input[1]").fill("Ashu@321");
//     await page.locator("//label[text()='Confirm Password']//following::input[1]").fill("Ashu@321");
//     await page.locator("//button[text()=' Save ']").click();
//     await page.waitForTimeout(5000);

//     await page.locator("(//label[text()='Username']//following::input['oxd-input oxd-input--focus'])[1]").fill("Ayush21");
//     await page.locator("//button[text()=' Search ']").click();
    
//     await page.locator("(//button[@type='button'])[9]").click();
//     await page.locator("//button[text()=' Yes, Delete ']").click();

//     const successMessage = await page.locator("//p[text()='Success']").innerText();
//     console.log(successMessage);
//     expect(successMessage).toBe('Success');
// });
