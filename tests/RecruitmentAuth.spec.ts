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

// 1. Add Recruitment
    test('1. Add Recruitment', async ({ page }) => {

        await recruitmentpage.clickOnaddButton();
        await recruitmentpage.enterFirstName('Ayush');
        await recruitmentpage.enterLastName('Gupta');
        await recruitmentpage.selectVacancy();
        await recruitmentpage.enterEmailAddress('abc@gmail.com');
        await recruitmentpage.clickOnsavebutton();
    });
});