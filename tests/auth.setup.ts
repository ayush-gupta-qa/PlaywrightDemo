import { test as setup } from '@playwright/test';
import { HRMloginpage } from '../Pages/HRMloginpage';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
  setup.setTimeout(60000);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  const hrmLoginPage = new HRMloginpage(page);
  await hrmLoginPage.enterUserName('Admin');
  await hrmLoginPage.enterPassword('admin123');
  await hrmLoginPage.clicksubmitButton();
  await hrmLoginPage.dbPageVisible();

  await page.context().storageState({ path: authFile });
});
