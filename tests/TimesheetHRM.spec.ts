import { test, expect } from '@playwright/test';
import { Leftpanelpage } from '../Pages/Leftpanelpage';
import { Timesheetpage } from '../Pages/Timesheetpage';
import * as allure from 'allure-js-commons';

test.describe('Timesheet module', () => {

    test.setTimeout(120000);

    test('Verify Timesheet operations', async ({ page }) => {

        // Allure metadata
        await allure.epic('Employee Management');
        await allure.feature('TIME');
        await allure.story('Verify Timesheet Operations');
        await allure.severity('critical');
        await allure.owner('Megha Lonare');

        const timesheetPage = new Timesheetpage(page);
        const leftPanelPage = new Leftpanelpage(page);

        // STEP 1 - Navigate to HRM
        await test.step('Step 1 - Navigate to HRM login page', async () => {

            await page.goto(
                'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
            );

            await page.waitForLoadState('domcontentloaded');

            console.log('HRM application opened successfully');
        });

        // STEP 2 - Open Timesheet
        await test.step('Step 2 - Click on Time module', async () => {

            await leftPanelPage.clickOnTime();

            console.log('Time module clicked successfully');
        });

        // TC01 - Verify Timesheet page
        await test.step('TC01 - Verify Timesheet page opens', async () => {

            await expect(page).toHaveURL(/time\/viewEmployeeTimesheet/);

            console.log('Current URL:', page.url());
            console.log('Page title:', await page.title());

            console.log('Timesheet page opened successfully');
        });

        // TC02 - Search employee
        await test.step('TC02 - Search employee in Timesheet', async () => {

            await timesheetPage.enterEmployeeName('a');

            console.log('Employee name entered successfully');
        });

        // TC03 - Click View button
        await test.step('TC03 - Click View button and verify action', async () => {

            await timesheetPage.clickView();

            console.log('View button clicked successfully');
        });

    });

});