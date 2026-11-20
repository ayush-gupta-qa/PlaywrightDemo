
import { test, expect } from '@playwright/test';
import { Leftpanelpage } from '../Pages/Leftpanelpage';
import { Timesheetpage } from '../Pages/Timesheetpage';

test.describe.serial('Timesheet module', () => {

    let timesheetPage: Timesheetpage;
    let leftPanelPage: Leftpanelpage;

    // BEFORE EACH
    test.beforeEach(async ({ page }) => {

        await page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );

        await page.waitForLoadState('domcontentloaded');

        timesheetPage = new Timesheetpage(page);
        leftPanelPage = new Leftpanelpage(page);

        await leftPanelPage.clickOnTime();
    });

    // TC01
    test('TC01 - Verify Timesheet page opens', async ({ page }) => {

        await expect(page).toHaveURL(/time\/viewEmployeeTimesheet/);

        console.log('Current URL:', page.url());
        console.log('Page title:', await page.title());
    });

    // TC02
    test('TC02 - Verify Timesheet heading', async ({ page }) => {

        await timesheetPage.enterEmployeeName('a');

    });

});
