import { test } from '../Fixtures/customFixtures';

test.describe.serial('Recruitment Module', () => {
      test.setTimeout(120000);
    // let recruitmentpage: Recruitmentpage;
    // test.beforeEach(async ({ page }) => {
    //     // Session is already authenticated via storageState (.auth/user.json)
    //     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    //     await page.waitForLoadState('domcontentloaded');
    //     recruitmentpage = new Recruitmentpage(page);
    //     await recruitmentpage.clickOnrecruitment();
    //   });

    test('1. Add Candidate', async ({ leftPanelPage, recruitmentpage }) => {

        await leftPanelPage.clickOnRecruitment();
        await recruitmentpage.clickOnaddButton();
        await recruitmentpage.enterFirstName('Ayush');
        await recruitmentpage.enterLastName('Gupta');
        await recruitmentpage.enterEmailAddress('abc@gmail.com');
        await recruitmentpage.clickOnsavebutton();
    });

    test('2. Read and Edit Candidate', async ({ leftPanelPage, recruitmentpage }) => {

        await leftPanelPage.clickOnRecruitment();
        await recruitmentpage.enterCandidateName('Ayush');
        await recruitmentpage.clickOnSearchbutton();
        await recruitmentpage.clickOnEditButton();
        await recruitmentpage.clickOnToggleButton();
        await recruitmentpage.enterMiddleName('kumar');
        await recruitmentpage.clickOnSaveButton();
    });
     
    test('3. Delete Candidate', async ({ leftPanelPage, recruitmentpage }) => {

        await leftPanelPage.clickOnRecruitment();
        await recruitmentpage.entercandidateName('Ayush');
        await recruitmentpage.clickOnsearchbutton();
        await recruitmentpage.clickOnDeleteButton();
        await recruitmentpage.clickOnYesButton();
    });

    test('4. Add Vacancies', async ({ leftPanelPage, recruitmentpage }) => {

        await leftPanelPage.clickOnRecruitment();
        await recruitmentpage.clickOnvacancies();
        await recruitmentpage.clickOnAddButton();
        await recruitmentpage.enterVacancyname();
        await recruitmentpage.SelectJobtitle();
        await recruitmentpage.Selecthiringmanager();
        await recruitmentpage.ClickOnSaveButton();
    });
});