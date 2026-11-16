import {test, expect} from '@playwright/test';
import loginData from '../Test-Data1/login.json';

test('Data Driven Test', async ({page}) => {
  
 await page.goto(loginData.url);
 await page.getByPlaceholder('Username').fill(loginData.username);
 await page.getByPlaceholder('Password').fill(loginData.password);
 await page.getByRole('button', {name: 'Login'}).click();
 await expect(page).toHaveURL(/dashboard/);
 await page.waitForLoadState('networkidle');

});