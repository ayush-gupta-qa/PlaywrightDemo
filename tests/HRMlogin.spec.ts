import { expect, test } from '@playwright/test';
import { HRMloginpage } from '../Pages/HRMloginpage';


test('Verify login functionality with valid credentials', async ({page}) => {
     test.setTimeout(60000);
  // Step 1: Navigate to the HRM login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName("Admin");
  await hrmLoginPage.enterPassword("admin123");
  await hrmLoginPage.clicksubmitButton();
  await hrmLoginPage.dbPageVisible();
  await page.waitForLoadState('networkidle');
});

// test('Verify login functionality with invalid credentials', async ({ page }) => {
//   // Step 1: Navigate to the HRM login page
  
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   const hrmLoginPage = new HRMloginpage(page);
//   await hrmLoginPage.enterUserName("ajdjd");
//   await hrmLoginPage.enterPassword("4512");
//   await hrmLoginPage.clicksubmitButton();
//   await page.waitForTimeout(10000);

//   // Step 2: Verify that the login failed by checking for an error message
//   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
//   });