import { test } from '../Fixtures/customFixtures';
import * as allure from 'allure-js-commons';

test.describe.serial('My Info Module', () => {
      test.setTimeout(120000);

    test('Verify Personal Details Update', async ({ leftPanelPage, myinfopage }) => {

        // Allure metadata
        await allure.epic('Employee Management');
        await allure.feature('My Info');
        await allure.story('Update Personal Details');
        await allure.severity('critical');
        await allure.owner('Ayush Gupta');

        await test.step('Navigate to My Info module', async () => {
            await leftPanelPage.clickOnMyinfo();
        });

        await test.step('Verify Personal Details page', async () => {
            await myinfopage.validatemyinfoPageVisibility();
        });

        await test.step('Update First Name', async () => {
            await myinfopage.enterFirstName('Ayush');
        });

        await test.step('Update Middle Name', async () => {
            await myinfopage.entermiddlename('Kumar');
        });

        await test.step('Update Last Name', async () => {
            await myinfopage.enterlastname('Gupta');
        });

        await test.step('Update Employee Id', async () => {
            await myinfopage.enteremployeeId('abc');
        });

        await test.step('Save Personal Details', async () => {
            await myinfopage.clickonsavebutton();
        });

        await test.step('Verify success message', async () => {
            await myinfopage.validatesuccessmessageVisibility();
        });
    });
});