import { test as setup } from '@playwright/test';
import { HRMloginpage } from '../Pages/HRMloginpage';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
  setup.setTimeout(60000);

  const baseUrl = process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com';
  const username = process.env.ADMIN_USERNAME || 'Admin';
  const password = process.env.ADMIN_PASSWORD || 'admin123';

  await page.goto(`${baseUrl}/web/index.php/auth/login`);

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName(username);
  await hrmLoginPage.enterPassword(password);
  await hrmLoginPage.clicksubmitButton();
  await hrmLoginPage.dbPageVisible();

  await page.context().storageState({ path: authFile });
});