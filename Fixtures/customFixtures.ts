import { test as baseTest, expect } from '@playwright/test';
import { Leftpanelpage } from '../Pages/Leftpanelpage';
import { Adminpage } from '../Pages/Adminpage';
import { PIMpage } from '../Pages/PIMpage';
import { Leave } from '../Pages/Leavepage';
import { Leavepage1 } from '../Pages/Leavepage1';
import { Timesheetpage } from '../Pages/Timesheetpage';


type MyFixtures = {
  leftPanelPage: Leftpanelpage;
  adminPage: Adminpage;
  pimPage: PIMpage;
  leavePage: Leave;
  leavePage1:Leavepage1;
  timesheetpage:Timesheetpage;
  dashboardInit: void;
};

export const test = baseTest.extend<MyFixtures>({
  // Auto fixture: navigates to dashboard before tests run
  dashboardInit: [
    async ({ page }, use) => {
      const baseUrl = process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com';
      await page.goto(`${baseUrl}/web/index.php/dashboard/index`);
      await page.waitForLoadState('networkidle');
      await use();
    },
    { auto: true },
  ],

  leftPanelPage: async ({ page }, use) => {
   
    await use(new Leftpanelpage(page));
  },

  adminPage: async ({ page }, use) => {
    await use(new Adminpage(page));
  },

  pimPage: async ({ page }, use) => {
    await use(new PIMpage(page));
  },

  leavePage: async ({ page }, use) => {
    await use(new Leave(page));
  },
  leavePage1: async({page}, use)=>{
    await use(new Leavepage1(page));
  },
  timesheetpage:async({page},use)=>{
    await use(new Timesheetpage(page));
  },
});

export { expect };