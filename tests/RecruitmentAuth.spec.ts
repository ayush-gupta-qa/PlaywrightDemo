import { test } from '../Fixtures/customFixtures';
import * as allure from 'allure-js-commons';

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

    // 1. Add Candidate
    test('1. Add Candidate', async ({ leftPanelPage, recruitmentpage }) => {

        // Allure metadata
        await allure.epic('Employee Management');
        await allure.feature('Recruitment');
        await allure.story('Recruitment Module CRUD Operations');
        await allure.severity('Critical');
        await allure.owner('Ayush Gupta');

        await test.step('Navigate to Recruitment Module', async () => {
            await leftPanelPage.clickOnRecruitment();
        });

        await test.step('Click on Add Candidate button', async () => {
            await recruitmentpage.clickOnaddButton();
        });

        await test.step('Enter Candidate First Name', async () => {
            await recruitmentpage.enterFirstName('Ayush');
        });

        await test.step('Enter Candidate Last Name', async () => {
            await recruitmentpage.enterLastName('Gupta');
        });

        await test.step('Enter Candidate Email Address', async () => {
            await recruitmentpage.enterEmailAddress('abc@gmail.com');
        });

        await test.step('Save Candidate Details', async () => {
            await recruitmentpage.clickOnsavebutton();
        });
    });


    // 2. Read and Edit Candidate
    test('2. Read and Edit Candidate', async ({ leftPanelPage, recruitmentpage }) => {

        await test.step('Navigate to Recruitment Module', async () => {
            await leftPanelPage.clickOnRecruitment();
        });

        await test.step('Search Candidate by Name', async () => {
            await recruitmentpage.enterCandidateName('Ayush');
            await recruitmentpage.clickOnSearchbutton();
        });

        await test.step('Edit Candidate Details', async () => {
            await recruitmentpage.clickOnEditButton();
        });

        await test.step('Expand Additional Candidate Details', async () => {
            await recruitmentpage.clickOnToggleButton();
        });

        await test.step('Enter Candidate Middle Name', async () => {
            await recruitmentpage.enterMiddleName('kumar');
        });

        await test.step('Save Updated Candidate Details', async () => {
            await recruitmentpage.clickOnSaveButton();
        });
    });


    // 3. Delete Candidate
    test('3. Delete Candidate', async ({ leftPanelPage, recruitmentpage }) => {

        await test.step('Navigate to Recruitment Module', async () => {
            await leftPanelPage.clickOnRecruitment();
        });

        await test.step('Search Candidate', async () => {
            await recruitmentpage.entercandidateName('Ayush');
            await recruitmentpage.clickOnsearchbutton();
        });

        await test.step('Click on Delete Candidate Button', async () => {
            await recruitmentpage.clickOnDeleteButton();
        });

        await test.step('Confirm Candidate Deletion', async () => {
            await recruitmentpage.clickOnYesButton();
        });
    });


    // 4. Add Vacancy
    test('4. Add Vacancies', async ({ leftPanelPage, recruitmentpage }) => {

        await test.step('Navigate to Recruitment Module', async () => {
            await leftPanelPage.clickOnRecruitment();
        });

        await test.step('Navigate to Vacancies Section', async () => {
            await recruitmentpage.clickOnvacancies();
        });

        await test.step('Click on Add Vacancy Button', async () => {
            await recruitmentpage.clickOnAddButton();
        });

        await test.step('Enter Vacancy Name', async () => {
            await recruitmentpage.enterVacancyname();
        });

        await test.step('Select Job Title', async () => {
            await recruitmentpage.SelectJobtitle();
        });

        await test.step('Select Hiring Manager', async () => {
            await recruitmentpage.Selecthiringmanager();
        });

        await test.step('Save Vacancy Details', async () => {
            await recruitmentpage.ClickOnSaveButton();
        });
    });


    // 5. Read and Edit Vacancy
    test('5. Read and Edit Vacancies', async ({ leftPanelPage, recruitmentpage }) => {

        await test.step('Navigate to Recruitment Module', async () => {
            await leftPanelPage.clickOnRecruitment();
        });

        await test.step('Navigate to Vacancies Section', async () => {
            await recruitmentpage.clickOnvacancies();
        });

        await test.step('Search Vacancy', async () => {
            await recruitmentpage.SelectVacancy();
            await recruitmentpage.clickOnSearchButton();
        });

        await test.step('Click on Edit Vacancy Button', async () => {
            await recruitmentpage.clickOneditButton();
        });

        await test.step('Update Vacancy Description', async () => {
            await recruitmentpage.enterdescription();
        });

        await test.step('Save Updated Vacancy Details', async () => {
            await recruitmentpage.clickOnSavebutton();
        });
    });


    // 6. Delete Vacancy
    test('6. Delete Vacancies', async ({ leftPanelPage, recruitmentpage }) => {

        await test.step('Navigate to Recruitment Module', async () => {
            await leftPanelPage.clickOnRecruitment();
        });

        await test.step('Navigate to Vacancies Section', async () => {
            await recruitmentpage.clickOnvacancies();
        });

        await test.step('Search Vacancy', async () => {
            await recruitmentpage.Selectvacancy();
            await recruitmentpage.clickOnsearchButton();
        });

        await test.step('Click on Delete Vacancy Button', async () => {
            await recruitmentpage.clickOndeleteButton();
        });

        await test.step('Confirm Vacancy Deletion', async () => {
            await recruitmentpage.clickOnyesbutton();
        });
    });
});