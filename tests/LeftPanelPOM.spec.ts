import { test } from '../Fixtures/customFixtures';

test.describe('Left Panel POM Tests - Reusing Auth State & Custom Fixtures', () => {

  test('Verify Admin page visibility', async ({ leftPanelPage, adminPage }) => {
    await leftPanelPage.clickOnAdmin();
    await adminPage.validateAdminPageVisibility();
    console.log('Admin page is visible.');
  });

  test('Verify PIM page visibility', async ({ leftPanelPage, pimPage }) => {
    await leftPanelPage.clickOnPIM();
    await pimPage.validatePIMPageVisibility();
    console.log('PIM page is visible.');
  });

  test('Verify Leave page visibility', async ({ leftPanelPage }) => {
    await leftPanelPage.clickOnLeave();
    console.log('Leave page is visible.');
  });

  test('Verify Time page visibility', async ({ leftPanelPage }) => {
    await leftPanelPage.clickOnTime();
    console.log('Time page is visible.');
  });

  test('Verify Recruitment page visibility', async ({ leftPanelPage }) => {
    await leftPanelPage.clickOnRecruitment();
    console.log('Recruitment page is visible.');
  });

  test('Verify My Info page visibility', async ({ leftPanelPage }) => {
    await leftPanelPage.clickOnMyinfo();
    console.log('My Info page is visible.');
  });

  test('Verify Performance page visibility', async ({ leftPanelPage }) => {
    await leftPanelPage.clickOnPerformance();
    console.log('Performance page is visible.');
  });

  test('Verify Dashboard page visibility', async ({ leftPanelPage }) => {
    await leftPanelPage.clickOnDashboard();
    console.log('Dashboard page is visible.');
  });

  test('Verify Directory page visibility', async ({ leftPanelPage }) => {
    await leftPanelPage.clickOnDirectory();
    console.log('Directory page is visible.');
  });

  test('Verify Maintenance page visibility', async ({ leftPanelPage }) => {
    await leftPanelPage.clickOnMaintenance();
    console.log('Maintenance page is visible.');
  });

  test('Verify Claim page visibility', async ({ leftPanelPage }) => {
    await leftPanelPage.clickOnClaim();
    console.log('Claim page is visible.');
  });

  test('Verify Buzz page visibility', async ({ leftPanelPage }) => {
    await leftPanelPage.clickOnBuzz();
    console.log('Buzz page is visible.');
  });
});
