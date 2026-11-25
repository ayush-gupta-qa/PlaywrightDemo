import {Page, Locator, expect} from '@playwright/test';
export class Recruitmentpage {

   readonly page : Page
   readonly recruitmenttab: Locator;
   readonly addButton: Locator;
   readonly firstname: Locator;
   readonly lastname: Locator;
   readonly emailaddress: Locator;
   readonly savebutton: Locator;

   readonly candidatename: Locator;
   readonly selectcandidatename: Locator;
   readonly searchbutton: Locator;
   readonly editbutton: Locator;
   readonly togglebutton: Locator;
   readonly middlename: Locator;
   readonly saveButton: Locator;

   readonly CandidateName: Locator;
   readonly SelectCandidateName: Locator;
   readonly SearchButton: Locator;
   readonly deletebutton: Locator; 
   readonly yesButton: Locator;

   readonly vacancies: Locator;
   readonly AddButton: Locator;
   readonly vacancyname: Locator;
   readonly Jobtitle: Locator;
   readonly selectjobtitle: Locator;
   readonly hiringmanager: Locator;
   readonly selecthiringmanager: Locator;
   readonly SaveButton: Locator;

   readonly vacancy: Locator;
   readonly selectvacancy: Locator;
   readonly Searchbutton: Locator;
   readonly editButton: Locator;
   readonly description: Locator;
   readonly Savebutton: Locator;

   readonly Vacancy: Locator;
   readonly selectVacancy: Locator;
   readonly searchButton: Locator;
   readonly deleteButton: Locator;
   readonly yesbutton: Locator;

   constructor(page : Page)
   {
       this.page=page;
       this.recruitmenttab=page.getByText('Recruitment', { exact: true });
       this.addButton=page.getByRole('button', { name: ' Add ' });
       this.firstname=page.getByPlaceholder('First Name');
       this.lastname=page.getByPlaceholder('Last Name');
       this.emailaddress=page.getByPlaceholder('Type here').nth(0);
       this.savebutton=page.getByRole('button', { name: ' Save ' });

       this.candidatename=page.getByPlaceholder('Type for hints...').nth(0);
       this.selectcandidatename=page.locator("//span[normalize-space()='Ayush Gupta']");
       this.searchbutton=page.getByRole('button', { name: ' Search ' });
       this.editbutton=page.locator(".oxd-icon.bi-eye-fill");
       this.togglebutton=page.locator('input[type="checkbox"] + span').nth(0);
       this.middlename=page.getByPlaceholder('Middle Name');
       this.saveButton=page.getByRole('button', { name: ' Save ' });

       this.CandidateName=page.getByPlaceholder('Type for hints...').nth(0);
       this.SelectCandidateName=page.locator("//span[normalize-space()='Ayush kumar Gupta']");
       this.SearchButton=page.getByRole('button', { name: ' Search ' });
       this.deletebutton=page.locator(".oxd-icon.bi-trash");
       this.yesButton=page.locator("//button[text()=' Yes, Delete ']");

       this.vacancies=page.getByRole('link',{name: 'Vacancies'});
       this.AddButton=page.getByRole('button', { name: ' Add ' });
       this.vacancyname=page.locator("//label[text()='Vacancy Name']//following::input[1]");
       this.Jobtitle=page.locator("//label[text()='Job Title']/../following-sibling::div//div[contains(@class,'oxd-select-text-input')]");
       this.selectjobtitle=page.locator("//span[normalize-space()='Account Assistant']");
       this.hiringmanager=page.locator("//label[text()='Hiring Manager']//following::input[1]");
       this.selecthiringmanager=page.locator("(//div[@role='option'])[1]");
       this.SaveButton=page.getByRole('button', { name: ' Save ' });

       this.vacancy=page.locator("//label[text()='Vacancy']/../following-sibling::div//div[contains(@class,'oxd-select-text-input')]");
       this.selectvacancy=page.locator("(//span[text()='manual'])[1]");
       this.Searchbutton=page.getByRole('button', { name: ' Search ' });
       this.editButton=page.locator(".oxd-icon.bi-pencil-fill");
       this.description=page.getByPlaceholder('Type description here');
       this.Savebutton=page.getByRole('button', { name: ' Save ' });

       this.Vacancy=page.locator("//label[text()='Vacancy']/../following-sibling::div//div[contains(@class,'oxd-select-text-input')]");
       this.selectVacancy=page.locator("(//span[text()='manual'])[1]");
       this.searchButton=page.getByRole('button', { name: ' Search ' });
       this.deleteButton=page.locator(".oxd-icon.bi-trash");
       this.yesbutton=page.locator("//button[text()=' Yes, Delete ']");
   }
   async clickOnrecruitment(){
     await this.recruitmenttab.click();
     await this.page.waitForLoadState('networkidle');
   }
   async clickOnaddButton(){
     await this.addButton.click();
     await this.page.waitForLoadState('networkidle');
   }
   async enterFirstName(firstname:string){
     await this.firstname.fill(firstname);
   }
   async enterLastName(lastname:string){
     await this.lastname.fill(lastname);
     
   }
   async enterEmailAddress(emailaddress:string){
     await this.emailaddress.fill(emailaddress);
   }
   async clickOnsavebutton(){
     await this.savebutton.click();
     await this.page.waitForTimeout(5000);
   }
   async enterCandidateName(candidatename:string){
     await this.candidatename.fill(candidatename);
     await this.page.waitForTimeout(5000);
     await this.selectcandidatename.click();
   }
   async clickOnSearchbutton(){
     await this.searchbutton.click();
     await this.page.waitForLoadState('domcontentloaded');
   }
   async clickOnEditButton(){
     await this.editbutton.click();
    }
   async clickOnToggleButton(){
     await this.togglebutton.click();
    }
   async enterMiddleName(middlename:string){
     await this.middlename.fill(middlename);
     await this.page.waitForLoadState('load');
    }
   async clickOnSaveButton(){
     await this.saveButton.click();
     await this.page.waitForLoadState('load');
    }
   async entercandidateName(candidatename:string){
     await this.CandidateName.fill(candidatename);
     await this.page.waitForTimeout(5000);
     await this.SelectCandidateName.click();
   }
   async clickOnsearchbutton(){
     await this.SearchButton.click();
     await this.page.waitForLoadState('domcontentloaded');
   }
   async clickOnDeleteButton(){
     await this.deletebutton.click();
     await this.page.waitForLoadState('domcontentloaded');
    }
   async clickOnYesButton(){
     await this.yesButton.click();
     await this.page.waitForLoadState('domcontentloaded');
    }
   async clickOnvacancies(){
     await this.vacancies.click();
     await this.page.waitForLoadState('domcontentloaded');
    }
   async clickOnAddButton(){
     await this.AddButton.click();
     await this.page.waitForLoadState('domcontentloaded');
    }
   async enterVacancyname(){
     await this.vacancyname.fill('manual');
     await this.page.waitForLoadState('domcontentloaded');
    }
   async SelectJobtitle(){
     await this.Jobtitle.click();
     await this.page.waitForLoadState('domcontentloaded');
     await this.selectjobtitle.click();
    }
   async Selecthiringmanager(){
     await this.hiringmanager.fill('a');
     await this.page.waitForTimeout(5000);
     await this.selecthiringmanager.click();
    }
   async ClickOnSaveButton(){
     await this.SaveButton.click();
     await this.page.waitForTimeout(5000);
    }
   async SelectVacancy(){
     await this.vacancy.click();
     await this.page.waitForTimeout(5000);
     await this.selectvacancy.click();
    }
   async clickOnSearchButton(){
     await this.Searchbutton.click();
     await this.page.waitForLoadState('domcontentloaded');
    }
   async clickOneditButton(){
     await this.editButton.click();
     await this.page.waitForLoadState('domcontentloaded');
    }
   async enterdescription(){
     await this.description.fill('abc');
    }
   async clickOnSavebutton(){
     await this.Savebutton.click();
     await this.page.waitForTimeout(5000);
    }
   async Selectvacancy(){
     await this.Vacancy.click();
     await this.page.waitForLoadState('domcontentloaded');
     await this.selectVacancy.click();
    }
   async clickOnsearchButton(){
     await this.searchButton.click();
     await this.page.waitForLoadState('domcontentloaded');
    }
   async clickOndeleteButton(){
     await this.deleteButton.click();
     await this.page.waitForLoadState('domcontentloaded');
    }
   async clickOnyesbutton(){
     await this.yesbutton.click();
     await this.page.waitForLoadState('domcontentloaded');
    }
   }
  
