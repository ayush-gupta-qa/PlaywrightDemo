import { test } from '@playwright/test';
import { Leftpanelpage } from '../Pages/Leftpanelpage';
import { Adminpage } from '../Pages/Adminpage';
import { PIMpage } from '../Pages/PIMpage';

test.describe('Left Panel POM Tests - Reusing Auth State', () => {
  let leftPanelPage: Leftpanelpage; 

  test.beforeEach(async ({ page }) => {
    // Session is already authenticated via storageState (.auth/user.json)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.waitForLoadState('domcontentloaded');
    leftPanelPage = new Leftpanelpage(page);
  });

  test('Verify Admin page visibility', async ({ page }) => {
    await leftPanelPage.clickOnAdmin();
    const adminPage = new Adminpage(page);
    await adminPage.validateAdminPageVisibility();
    console.log('Admin page is visible.');
  });

  test('Verify PIM page visibility', async ({ page }) => {
    await leftPanelPage.clickOnPIM();
    const pimPage = new PIMpage(page);
    await pimPage.validatePIMPageVisibility();
    console.log('PIM page is visible.');
  });

  test('Verify Leave page visibility', async () => {
    await leftPanelPage.clickOnLeave();
    console.log('Leave page is visible.');
  });

  test('Verify Time page visibility', async () => {
    await leftPanelPage.clickOnTime();
    console.log('Time page is visible.');
  });

  test('Verify Recruitment page visibility', async () => {
    await leftPanelPage.clickOnRecruitment();
    console.log('Recruitment page is visible.');
  });

  test('Verify My Info page visibility', async () => {
    await leftPanelPage.clickOnMyinfo();
    console.log('My Info page is visible.');
  });

  test('Verify Performance page visibility', async () => {
    await leftPanelPage.clickOnPerformance();
    console.log('Performance page is visible.');
  });

  test('Verify Dashboard page visibility', async () => {
    await leftPanelPage.clickOnDashboard();
    console.log('Dashboard page is visible.');
  });

  test('Verify Directory page visibility', async () => {
    await leftPanelPage.clickOnDirectory();
    console.log('Directory page is visible.');
  });

  test('Verify Maintenance page visibility', async () => {
    await leftPanelPage.clickOnMaintenance();
    console.log('Maintenance page is visible.');
  });

  test('Verify Claim page visibility', async () => {
    await leftPanelPage.clickOnClaim();
    console.log('Claim page is visible.');
  });

  test('Verify Buzz page visibility', async () => {
    await leftPanelPage.clickOnBuzz();
    console.log('Buzz page is visible.');
  });
});
