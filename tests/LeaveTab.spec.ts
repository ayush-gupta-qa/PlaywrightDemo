import { test, expect } from '@playwright/test';
import { Leavepage1 } from '../Pages/Leavepage1';
test.describe('Leave tab work', () => {
      let leavepage1:Leavepage1;
test.beforeEach(async ({ page }) => {
    // Session is already authenticated via storageState (.auth/user.json)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.waitForLoadState('domcontentloaded');
     leavepage1=new Leavepage1(page);
  });
test('work on leavelist',async({page})=>{
    test.setTimeout(80000);
    await leavepage1.clickOnLeftTab();
    await leavepage1.clickONFormdate();
    await leavepage1.ClickAndSelectToDate();
    await leavepage1.selectshowleave();
    await leavepage1.selectLeaveType();
    await leavepage1.selectEmpoyee();
    await leavepage1.selectSubUnit1();
    await leavepage1.selectsearchButton();
});
});