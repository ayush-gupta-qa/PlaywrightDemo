import{test, expect} from '@playwright/test';
import { crudPOMpage } from '../Pages/crudPOMpage';

test.describe.serial('Admin panel POM Tests - Reusing Auth State', () => {
    test.setTimeout(120000);
    let crudpompage: crudPOMpage;
    test.beforeEach(async ({ page }) => {
        // Session is already authenticated via storageState (.auth/user.json)
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await page.waitForLoadState('domcontentloaded');
        crudpompage = new crudPOMpage(page);
        await crudpompage.clickOnAdmin();
      });

test('1. Add user', async({page}) => {
      await crudpompage.clickOnAddbutton();
      await crudpompage.selectOnUserrole();
      await crudpompage.selectStatus();
      await crudpompage.selectEmployeename();
      await crudpompage.userName("Ayush21");
      await crudpompage.Password("Ashu@321");
      await crudpompage.confirmPassword("Ashu@321");
      await crudpompage.saveButton()});

test('2. Read user ', async({page}) => { 
      await crudpompage.Username('Ayush21');
      await crudpompage.searchButton()});

test('3. Update user ', async({page}) => {
      await crudpompage.EditButton();
      await crudpompage.UserRole();
      await crudpompage.SelectUserRole();
      await crudpompage.savebuttOn()});

test('4. Delete user ', async({page}) => {
      await crudpompage.USErname('Ayush21');
      await crudpompage.Searchbutton();
      await crudpompage.DeleteButton();
      await crudpompage.YesButton();});  
});