import {test, expect} from '@playwright/test';
import {HRMloginpage} from '../Pages/HRMloginpage';
import {crudPIMpage} from '../Pages/crudPIMpage';
import * as allure from 'allure-js-commons';

test.describe('PIM module', () => {
  test.setTimeout(1200000);
test('Verify PIM crud operation', async({page}) => {

    // Add Allure metadata
        await allure.epic('Employee Management');
        await allure.feature('PIM');
        await allure.story('Verify PIM CRUD Operations');
        await allure.severity('critical');
        await allure.owner('Ayush Gupta');
    
    const hrmLoginPage = new HRMloginpage(page);
      await test.step('Navigate to the HRM login page', async () => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')});

      await test.step('Enter valid login credentials', async () => {
      await hrmLoginPage.enterUserName("Admin");
      await hrmLoginPage.enterPassword("admin123");
      await hrmLoginPage.clicksubmitButton()});

    
      const crudpimpage = new crudPIMpage(page);
      await test.step('Add a new Employee', async () => {
      await crudpimpage.clickOnPIM();
      await crudpimpage.validatePIMPageVisibility();
      await crudpimpage.clickOnaddButton();
      await crudpimpage.ProfilePic();
      await crudpimpage.enteremployeeFirstName('Ayush');
      await crudpimpage.enteremployeeLastName('Gupta');
      await crudpimpage.clickOntoggleButton();
      await crudpimpage.enterusername("Ashu12");
      await crudpimpage.enterpassword("Ashugupta@12345");
      await crudpimpage.enterconfirmpassword("Ashugupta@12345");
      await crudpimpage.clickOnsaveButton()});

      await test.step('Search and verify the Employee.', async () => {
      await crudpimpage.clickOnEmployeeListLoc();
      await crudpimpage.enteremployeeName('Ayush');
      await crudpimpage.clickOnsearchButton()});

      await test.step('Edit the Employee', async () => {
      await crudpimpage.clickOnEditButton();
      await crudpimpage.enterMiddleName('abc');
      await crudpimpage.clickOnSaveButton()});

      await test.step('Delete the Employee and verify deletion', async () => {
      await crudpimpage.clickOnpimtabLoc();
      await crudpimpage.enteremployeeNAME('Ayush');
      await crudpimpage.clickOnsearchBUTTON();
      await crudpimpage.clickOndeleteButton();
      await crudpimpage.clickOnyesButton()});
   });
   });