import {Page, Locator, expect} from '@playwright/test';
import path from 'path';
export class crudPIMpage {

    readonly page: Page;
    readonly pimTabLoc: Locator;
    readonly pimDBLoc: Locator;
    readonly addButton: Locator;
    readonly addEmployeeDB: Locator;
    readonly profilePic: Locator
    readonly employeeFirstName: Locator;
    readonly employeeLastName: Locator;
    readonly toggleButton: Locator;
    readonly enterUsername: Locator;
    readonly enterPassword: Locator;
    readonly enterConfirmPassword: Locator;
    readonly saveButton: Locator;
    readonly employeeListLoc: Locator;
    readonly employeeName: Locator;
    readonly searchButton: Locator;
    readonly EditButton: Locator;
    readonly middleName: Locator;
    readonly SaveButton: Locator;
    readonly pimtabLoc: Locator;
    readonly employeeNAME: Locator;
    readonly searchBUTTON: Locator;
    readonly deleteButton: Locator;
    readonly yesButton: Locator;

    constructor(page: Page)
    { 
         this.page=page;
         this.pimTabLoc=page.locator("//span[text()='PIM']");
         this.pimDBLoc=page.locator(".oxd-topbar-header-breadcrumb");
         this.addButton=page.locator(".oxd-icon.bi-plus.oxd-button-icon")
         this.addEmployeeDB=page.locator(".oxd-text.oxd-text--h6.orangehrm-main-title");
         this.profilePic=page.locator(".oxd-icon.bi-plus");
         this.employeeFirstName=page.locator("input[name='firstName']");
         this.employeeLastName=page.locator("input[name='lastName']");
         this.toggleButton=page.locator("input[type=checkbox] + span");
         this.enterUsername=page.locator("(//label[text()='Username']/following::input)[1]");
         this.enterPassword=page.locator("(//label[text()='Password']/following::input)[1]");
         this.enterConfirmPassword=page.locator("(//label[text()='Confirm Password']/following::input)[1]");
         this.saveButton=page.locator("button[type='submit']");
         this.employeeListLoc=page.locator("//a[text()='Employee List']");
         this.employeeName=page.locator("(//input[@placeholder='Type for hints...'])[1]");
         this.searchButton=page.locator("button[type='submit']");
         this.EditButton=page.locator(".oxd-icon.bi-pencil-fill");
         this.middleName=page.locator("input[name='middleName']");
         this.SaveButton=page.locator("(//button[@type='submit'])[1]");

         this.pimtabLoc=page.locator("//span[text()='PIM']");
         this.employeeNAME=page.locator("(//input[@placeholder='Type for hints...'])[1]");
         this.searchBUTTON=page.locator("button[type='submit']");
         this.deleteButton=page.locator("(//button[@type='button'])[7]");
         this.yesButton=page.locator(".oxd-button.oxd-button--medium.oxd-button--label-danger.orangehrm-button-margin");
}
  async clickOnPIM(){
     await this.pimTabLoc.click();
   }
  async validatePIMPageVisibility(){
     await expect(this.pimDBLoc).toBeVisible({timeout:5000});
 }
  async clickOnaddButton(){
     await this.addButton.click();
     await expect(this.addEmployeeDB).toBeVisible({timeout:5000});
   }
  async ProfilePic(){
     //await this.profilePic.click();
     const filepath = path.join(__dirname, '../Test-Data/demo.png');
     await this.page.waitForLoadState('load');
     await this.page.locator('input[type="file"]').setInputFiles(filepath);
     await this.page.waitForLoadState('load');
  }
  async enteremployeeFirstName(firstname:string){
     await this.employeeFirstName.fill(firstname);
    }
  async enteremployeeLastName(lastname:string){
     await this.employeeLastName.fill(lastname);
    }
  async clickOntoggleButton(){
       await this.toggleButton.click();
       await this.page.waitForLoadState('load');
   }
   async enterusername(username:string){
       await this.enterUsername.fill(username);
       await this.page.waitForLoadState('load');
   }
   async enterpassword(password:string){
       await this.enterPassword.fill(password);
       await this.page.waitForLoadState('load');
       await this.page.waitForLoadState('networkidle');
       
   }
   async enterconfirmpassword(confirmpassword:string){
       await this.enterConfirmPassword.fill(confirmpassword);
       await this.page.waitForLoadState('load');
       await this.page.waitForLoadState('networkidle');
   }
  async clickOnsaveButton(){
       await this.saveButton.click();
       await this.page.waitForTimeout(10000);
     } 
  async clickOnEmployeeListLoc(){
     await this.employeeListLoc.click();
     await this.page.waitForLoadState('load');
    }
  async enteremployeeName(employeename:string){
     await this.employeeName.fill(employeename);
     await this.page.waitForLoadState('load');
    }
  async clickOnsearchButton(){
     await this.searchButton.click();
     await this.page.waitForTimeout(5000);
    }
  async clickOnEditButton(){
     await this.EditButton.click();
    }
  async enterMiddleName(middlename:string){
     await this.middleName.fill(middlename);
     await this.page.waitForLoadState('load');
    }
  async clickOnSaveButton(){
     await this.SaveButton.click();
     await this.page.waitForLoadState('load');
    }
  async clickOnpimtabLoc(){
     await this.pimtabLoc.click();
    }
  async enteremployeeNAME(employeename:string){
     await this.employeeNAME.fill(employeename);
    } 
  async clickOnsearchBUTTON(){
     await this.searchBUTTON.click();
     await this.page.waitForLoadState('domcontentloaded');
    }
  async clickOndeleteButton(){
     await this.deleteButton.click();
     await this.page.waitForLoadState('domcontentloaded');
    }
  async clickOnyesButton(){
     await this.yesButton.click();
     await this.page.waitForLoadState('load');
    }
}