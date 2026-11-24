//import { test, expect } from '@playwright/test';
import { Leavepage1 } from '../Pages/Leavepage1';
import {test} from '../Fixtures/customFixtures';
import * as allure from 'allure-js-commons';
test.describe.serial('Leave tab work', () => {
      //let leavepage1:Leavepage1;
//test.beforeEach(async ({ page }) => {
    // Session is already authenticated via storageState (.auth/user.json)
    //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    //await page.waitForLoadState('domcontentloaded');
     //leavepage1=new Leavepage1(page);
  //});
  test('Assign leave',async({leavePage1})=>{
            await allure.epic('Leave tab');
            await allure.feature('Leave');
            await allure.story('assign leave operate');
            await allure.severity('critical');
            await allure.owner('Shivam Dubey');
 test.setTimeout(80000)
 await test.step('click on leave panel', async () => {
 await leavePage1.clickOnLeftTab();
 });
 await test.step('click on Assign Leave Tab', async () => {
 await leavePage1.clickOnAssignTab();
 });
 await test.step('click on select employee name', async () => {
 await leavePage1.selectEmpoyee();
 });
 await test.step('select leave type', async () => {
 await leavePage1.selectLeaveType11();
 });
 await test.step('select from date', async () => {
 await leavePage1.clickONFormdate();
 });
 await test.step('select to date', async () => {
 await leavePage1.ClickAndSelectToDate();
 });
 await test.step('click on assign button', async () => {
 await leavePage1.clickOnAssignButton();
 });

});
test('work on leavelist',async({leavePage1})=>{
    test.setTimeout(80000);
    await leavePage1.clickOnLeftTab();
    await leavePage1.clickONFormdate();
    await leavePage1.ClickAndSelectToDate();
    await leavePage1.selectshowleave();
    await leavePage1.selectLeaveType();
    await leavePage1.selectEmpoyee();
    await leavePage1.selectSubUnit1();
    await leavePage1.selectsearchButton();
});
});