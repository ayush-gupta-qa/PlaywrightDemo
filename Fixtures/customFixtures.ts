import { test as baseTest, expect } from '@playwright/test';
import { Leftpanelpage } from '../Pages/Leftpanelpage';
import { Adminpage } from '../Pages/Adminpage';
import { PIMpage } from '../Pages/PIMpage';
import { Leave } from '../Pages/Leavepage';
import {Recruitmentpage} from '../Pages/Recruitmentpage';

type MyFixtures = {
  leftPanelPage: Leftpanelpage;
  adminPage: Adminpage;
  pimPage: PIMpage;
  leavePage: Leave;
  recruitmentpage: Recruitmentpage;
  dashboardInit: void;
};

export const test = baseTest.extend<MyFixtures>({
  // Auto fixture: navigates to dashboard before tests run
  dashboardInit: [
    async ({ page }, use) => {
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
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
  
  recruitmentpage: async ({ page }, use) => {
     await use (new Recruitmentpage(page));
  },
});

export { expect };
