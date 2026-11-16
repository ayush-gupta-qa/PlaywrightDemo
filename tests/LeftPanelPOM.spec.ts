import { expect, test} from '@playwright/test';
import { HRMloginpage } from '../Pages/HRMloginpage';
import { Leftpanelpage } from '../Pages/Leftpanelpage'; 
import { Adminpage } from '../Pages/Adminpage';
import {PIMpage} from '../Pages/PIMpage';

test('Verify Admin page visibility', async({page}) => {
  test.setTimeout(80000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName("Admin");
  await hrmLoginPage.enterPassword("admin123");
  await hrmLoginPage.clicksubmitButton();
  
  await page.waitForTimeout(5000);
  const LeftPanelPage = new Leftpanelpage(page);
  await LeftPanelPage.clickOnAdmin();
  const adminPage = new Adminpage(page);
  await adminPage.validateAdminPageVisibility();
  console.log("Admin page is visible.");
});

test('Verify PIM page visibility', async ({ page }) => {
  test.setTimeout(80000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName("Admin");
  await hrmLoginPage.enterPassword("admin123");
  await hrmLoginPage.clicksubmitButton();
  await page.waitForTimeout(5000);
  const leftPanelPage=new Leftpanelpage(page);
  await leftPanelPage.clickOnPIM();
  const pimpage = new PIMpage(page);
  await pimpage.validatePIMPageVisibility();
  console.log("PIM page is visible.");
});

test('Verify Leave page visibility', async ({ page }) => {
    test.setTimeout(80000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName("Admin");
  await hrmLoginPage.enterPassword("admin123");
  await hrmLoginPage.clicksubmitButton();
  await page.waitForTimeout(5000);
  const leftPanelPage=new Leftpanelpage(page);
  await leftPanelPage.clickOnLeave();
  console.log("Leave page is visible.");
});

test('Verify Time page visibility', async ({ page }) => {
    test.setTimeout(80000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName("Admin");
  await hrmLoginPage.enterPassword("admin123");
  await hrmLoginPage.clicksubmitButton();
  await page.waitForTimeout(5000);
  const leftPanelPage=new Leftpanelpage(page);
  await leftPanelPage.clickOnTime();
  console.log("Time page is visible.");
});

test('Verify Recruitment page visibility', async ({ page }) => {
    test.setTimeout(80000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName("Admin");
  await hrmLoginPage.enterPassword("admin123");
  await hrmLoginPage.clicksubmitButton();
  await page.waitForTimeout(5000);
  const leftPanelPage=new Leftpanelpage(page);
  await leftPanelPage.clickOnRecruitment();
  console.log("Recruitment page is visible.");
});

test('Verify My Info page visibility', async ({ page }) => {
    test.setTimeout(80000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName("Admin");
  await hrmLoginPage.enterPassword("admin123");
  await hrmLoginPage.clicksubmitButton();
  await page.waitForTimeout(5000);
  const leftPanelPage=new Leftpanelpage(page);
  await leftPanelPage.clickOnMyinfo();
  console.log("My Info page is visible.");
});

test('Verify Performance page visibility', async ({ page }) => {
    test.setTimeout(80000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName("Admin");
  await hrmLoginPage.enterPassword("admin123");
  await hrmLoginPage.clicksubmitButton();
  await page.waitForTimeout(5000);
  const leftPanelPage=new Leftpanelpage(page);
  await leftPanelPage.clickOnPerformance();
  console.log("Performance page is visible.");
});

test('Verify Dashboard page visibility', async ({ page }) => {
    test.setTimeout(80000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName("Admin");
  await hrmLoginPage.enterPassword("admin123");
  await hrmLoginPage.clicksubmitButton();
  await page.waitForTimeout(5000);
  const leftPanelPage=new Leftpanelpage(page);
  await leftPanelPage.clickOnDashboard();
  console.log("Dashboard page is visible.");
});

test('Verify Directory page visibility', async ({ page }) => {
    test.setTimeout(80000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName("Admin");
  await hrmLoginPage.enterPassword("admin123");
  await hrmLoginPage.clicksubmitButton();
  await page.waitForTimeout(5000);
  const leftPanelPage=new Leftpanelpage(page);
  await leftPanelPage.clickOnDirectory();
  console.log("Directory page is visible.");
});

test('Verify Maintenance page visibility', async ({ page }) => {
    test.setTimeout(80000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName("Admin");
  await hrmLoginPage.enterPassword("admin123");
  await hrmLoginPage.clicksubmitButton();
  await page.waitForTimeout(5000);
  const leftPanelPage=new Leftpanelpage(page);
  await leftPanelPage.clickOnMaintenance();
  console.log("Maintenance page is visible.");
});

test('Verify Claim page visibility', async ({ page }) => {
    test.setTimeout(80000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName("Admin");
  await hrmLoginPage.enterPassword("admin123");
  await hrmLoginPage.clicksubmitButton();
  await page.waitForTimeout(5000);
  const leftPanelPage=new Leftpanelpage(page);
  await leftPanelPage.clickOnClaim();
  console.log("Claim page is visible.");
});

test('Verify Buzz page visibility', async ({ page }) => {
    test.setTimeout(80000);
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName("Admin");
  await hrmLoginPage.enterPassword("admin123");
  await hrmLoginPage.clicksubmitButton();
  await page.waitForTimeout(5000);
  const leftPanelPage=new Leftpanelpage(page);
  await leftPanelPage.clickOnBuzz();
  console.log("Buzz page is visible.");
});

