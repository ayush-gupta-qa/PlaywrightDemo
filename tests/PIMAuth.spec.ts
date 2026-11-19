import{test, expect} from '@playwright/test';
import { crudPIMpage } from '../Pages/crudPIMpage';

test.describe.serial('PIM panel POM Tests - Reusing Auth State', () => {
    test.setTimeout(120000);
    let crudpimpage: crudPIMpage;
    test.beforeEach(async ({ page }) => {
        // Session is already authenticated via storageState (.auth/user.json)
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await page.waitForLoadState('domcontentloaded');
        crudpimpage = new crudPIMpage(page);
        await crudpimpage.clickOnPIM();
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