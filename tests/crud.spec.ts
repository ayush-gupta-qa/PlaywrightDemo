import {test, expect} from '@playwright/test';

test('Verify Admin CRUD functionality', async({page}) => {
    test.setTimeout(80000);
    //(Verify login functionality)
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();

    //(Verify Admin page visibility)
    await page.locator("//span[text()='Admin']").click();
    await page.waitForTimeout(3000);
    await expect(page.locator("//h6[text()='Admin']")).toBeVisible();

    //(Verify Admin user creation functionality)
    await page.locator("//i[@class='oxd-icon bi-plus oxd-button-icon']").click();
    await expect(page.locator("//h6[text()='Add User']")).toBeVisible();
    await page.locator("//label[text()='User Role']//following::div[1]").click();
    await page.locator("(//span[text()='Admin'])[2]").click();
    await page.locator("//label[text()='Status']//following::div[1]").click();
    await page.locator("//span[text()='Enabled']").click();
    await page.locator("//label[text()='Employee Name']//following::input[1]").fill("a");
    await page.waitForTimeout(5000);
    await page.locator("(//div[@role='option'])[1]").click();
    await page.locator("//label[text()='Username']//following::input[1]").fill("Ayush21");
    await page.locator("//label[text()='Password']//following::input[1]").fill("Ashu@321");
    await page.locator("//label[text()='Confirm Password']//following::input[1]").fill("Ashu@321");
    await page.locator("//button[text()=' Save ']").click();
    await page.waitForTimeout(5000);

    //(Verify Admin user search functionality)
    await page.locator("(//label[text()='Username']//following::input['oxd-input oxd-input--focus'])[1]").fill("Ayush21");
    await page.locator("(//label[text()='User Role']//following::div['Select'])[2]").click();
    await page.locator("(//span[text()='Admin'])[2]").click();
    await page.locator("//label[text()='Employee Name']//following::input[1]").fill("a");
    await page.locator("(//div[@class='oxd-autocomplete-option'])[1]").click();
    await page.locator("//label[text()='Status']//following::div[1]").click();
    await page.locator("//span[text()='Enabled']").click();
    await page.locator("//button[text()=' Search ']").click();
    await page.waitForTimeout(3000);

    //(Verify Admin user role update functionality)
    await page.locator("(//button[@type='button'])[8]").click();
    await expect(page.locator("//h6[text()='Edit User']")).toBeVisible();
    await page.locator("//label[text()='User Role']//following::div[1]").click();
    await page.locator("//span[text()='ESS']").click();
    await page.locator("//button[text()=' Save ']").click();
    await page.waitForTimeout(5000);

    //(Verify Admin user deletion functionality)
    await page.locator("(//label[text()='Username']//following::input['oxd-input oxd-input--focus'])[1]").fill("Ayush21");
    await page.locator("//button[text()=' Search ']").click();
    await page.waitForTimeout(3000);
    
    await page.locator("(//button[@type='button'])[9]").click();
    await page.waitForTimeout(3000);
    await page.locator("//button[text()=' Yes, Delete ']").click();
    await page.waitForTimeout(10000);
});