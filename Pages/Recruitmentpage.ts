import {Page, Locator, expect} from '@playwright/test';
export class Recruitmentpage {

   readonly page : Page
   readonly recruitmenttab: Locator;
   readonly addButton: Locator;
   readonly firstname: Locator;
   readonly lastname: Locator;
   readonly vacancydropdown: Locator;
   readonly vacancyoption: Locator;
   readonly emailaddress: Locator;
   readonly savebutton: Locator;

   constructor(page : Page)
   {
       this.page=page;
       this.recruitmenttab=page.getByText('Recruitment', { exact: true });
       this.addButton=page.getByRole('button', { name: ' Add ' });
       this.firstname=page.getByPlaceholder('First Name');
       this.lastname=page.getByPlaceholder('Last Name');
       this.vacancydropdown=page.locator("//label[text()='Vacancy']//following::div[1]");
       this.vacancyoption=page.locator('(//div[contains(@class,"oxd-select-option")])[2]')
       this.emailaddress=page.getByPlaceholder('Type here').nth(0);
       this.savebutton=page.getByRole('button', { name: ' Save ' });
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
   async selectVacancy(){
     await this.vacancydropdown.click();
     await this.vacancyoption.click();
     await this.page.waitForLoadState('domcontentloaded');
   }
   async enterEmailAddress(emailaddress:string){
     await this.emailaddress.fill(emailaddress);
   }
   async clickOnsavebutton(){
     await this.savebutton.click();
     await this.page.waitForTimeout(5000);
   }
}