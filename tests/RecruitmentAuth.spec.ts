import{test, expect} from '@playwright/test';
import { Recruitmentpage } from '../Pages/Recruitmentpage';

test.describe.serial('Recruitment Module', () => {
    test.setTimeout(120000);
    let recruitmentpage: Recruitmentpage;
    test.beforeEach(async ({ page }) => {
        // Session is already authenticated via storageState (.auth/user.json)
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await page.waitForLoadState('domcontentloaded');
        recruitmentpage = new Recruitmentpage(page);
        await recruitmentpage.clickOnrecruitment();
      });

    test('1. Add Recruitment', async ({ page }) => {

        await recruitmentpage.clickOnaddButton();
        await recruitmentpage.enterFirstName('Ayush');
        await recruitmentpage.enterLastName('Gupta');
        await recruitmentpage.enterEmailAddress('abc@gmail.com');
        await recruitmentpage.clickOnsavebutton();
    });
    test('2. Read and Edit Recruitment', async ({ page }) => {

        await recruitmentpage.enterCandidateName('Ayush');
        await recruitmentpage.clickOnSearchbutton();
        await recruitmentpage.clickOnEditButton();
        await recruitmentpage.clickOnToggleButton();
        await recruitmentpage.enterMiddleName('kumar');
        await recruitmentpage.clickOnSaveButton();
    });
});