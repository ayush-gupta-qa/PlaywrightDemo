import { test, expect } from '@playwright/test';
import loginData from '../Test-Data1/login.json';
import { crudPIMpage } from '../Pages/crudPIMpage';

test.describe.serial('PIM module', () => {
    test.setTimeout(120000);

    // Declare POM globally inside describe
    let crudpimpage: crudPIMpage;

    // Login before every test
    test.beforeEach(async ({ page }) => {
        await page.goto(loginData.url);
        await page.getByPlaceholder('Username').fill(loginData.username);
        await page.getByPlaceholder('Password').fill(loginData.password);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL(/dashboard/);

        crudpimpage = new crudPIMpage(page);
        await crudpimpage.clickOnPIM();
        await crudpimpage.validatePIMPageVisibility();
    });

    // 1. CREATE EMPLOYEE
    test('1. Create Employee', async ({ page }) => {

        await crudpimpage.clickOnaddButton();
        await crudpimpage.ProfilePic();
        await crudpimpage.enteremployeeFirstName('Ayush');
        await crudpimpage.enteremployeeLastName('Gupta');
        await crudpimpage.clickOntoggleButton();
        await crudpimpage.enterusername('Ashu12');
        await crudpimpage.enterpassword('Ashugupta@12345');
        await crudpimpage.enterconfirmpassword('Ashugupta@12345');
        await crudpimpage.clickOnsaveButton();
    });

    // 2. READ EMPLOYEE
    test('2. Read Employee', async ({ page }) => {

        await crudpimpage.clickOnEmployeeListLoc();
        await crudpimpage.enteremployeeName('Ayush');
        await crudpimpage.clickOnsearchButton();
        await expect(page.getByText('Ayush')).toBeVisible();
    });

    // 3. UPDATE EMPLOYEE
    test('3. Update Employee', async ({ page }) => {

        await crudpimpage.clickOnEmployeeListLoc();
        await crudpimpage.enteremployeeName('Ayush');
        await crudpimpage.clickOnsearchButton();
        await crudpimpage.clickOnEditButton();
        await crudpimpage.enterMiddleName('abc');
        await crudpimpage.clickOnSaveButton();
    });

    // 4. DELETE EMPLOYEE
    test('4. Delete Employee', async ({ page }) => {

        await crudpimpage.clickOnEmployeeListLoc();
        await crudpimpage.enteremployeeNAME('Ayush');
        await crudpimpage.clickOnsearchBUTTON();
        await crudpimpage.clickOndeleteButton();
        await crudpimpage.clickOnyesButton();
    });
});
