import{test, expect} from '@playwright/test';
import { HRMloginpage } from '../Pages/HRMloginpage';
import { crudPOMpage } from '../Pages/crudPOMpage';
import * as allure from 'allure-js-commons';

test.describe('Admin module', () => {
test('Verify Admin User CRUD Operations', async({page}) => {
    test.setTimeout(120000);

    // Add Allure metadata
    await allure.epic('User Management');
    await allure.feature('Admin');
    await allure.story('Verify Admin User CRUD Operations');
    await allure.severity('critical');
    await allure.owner('Ayush Gupta');

      const hrmLoginPage = new HRMloginpage(page);
      await test.step('Navigate to the HRM login page', async () => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')});

      
      await test.step('Enter valid login credentials', async () => {
      await hrmLoginPage.enterUserName("Admin");
      await hrmLoginPage.enterPassword("admin123");
      await hrmLoginPage.clicksubmitButton()});
      
      const crudpompage = new crudPOMpage(page);
      await test.step('Add a new user', async () => {
      await crudpompage.clickOnAdmin();
      await crudpompage.clickOnAddbutton();
      await crudpompage.selectOnUserrole();
      await crudpompage.selectStatus();
      await crudpompage.selectEmployeename();
      await crudpompage.userName("Ayush21");
      await crudpompage.Password("Ashu@321");
      await crudpompage.confirmPassword("Ashu@321");
      await crudpompage.saveButton()});

      await test.step('Search and verify the user.', async () => {
      await crudpompage.Username('Ayush21');
      await crudpompage.searchButton()});

      await test.step('Edit the user', async () => {
      await crudpompage.EditButton();
      await crudpompage.UserRole();
      await crudpompage.SelectUserRole();
      await crudpompage.savebuttOn()});

      await test.step('Delete the user and verify deletion', async () => {
      await crudpompage.USErname('Ayush21');
      await crudpompage.Searchbutton();
      await crudpompage.DeleteButton();
      await crudpompage.YesButton();
      });  
});
});