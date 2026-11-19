import {Page, Locator, expect} from '@playwright/test';
export class crudPOMpage{

   readonly page: Page;
   readonly adminTabLoc: Locator;
   readonly addButton: Locator;
   readonly Userrole: Locator;
   readonly selectuserrole: Locator;
   readonly status: Locator;
   readonly selectstatus: Locator;
   readonly employeename: Locator;
   readonly selectemployeename: Locator;
   readonly username: Locator;
   readonly password: Locator;
   readonly confirmpassword: Locator;
   readonly savebutton: Locator;
   readonly UserName: Locator;
   readonly SearchButton: Locator;
   readonly editButton: Locator;
   readonly userRole: Locator;
   readonly selectUserRole: Locator;
   readonly SaveButton: Locator;
   readonly USERname: Locator;
   readonly SEARCHbutton: Locator;
   readonly deleteButton: Locator;
   readonly yesButton: Locator;

   constructor(page: Page)
   {
       this.page=page;
       this.adminTabLoc=page.getByText('Admin', { exact: true });
       this.addButton = page.getByRole('button', { name: 'Add' });
       this.Userrole=page.locator("//label[text()='User Role']//following::div[1]");
       this.selectuserrole=page.locator("(//span[text()='Admin'])[2]");
       this.status=page.locator("//label[text()='Status']//following::div[1]");
       this.selectstatus=page.locator("//span[text()='Enabled']");
       this.employeename=page.locator("//label[text()='Employee Name']//following::input[1]");
       this.selectemployeename=page.locator("(//div[@role='option'])[1]");
       this.username=page.locator("//label[text()='Username']//following::input[1]");
       this.password=page.locator("//label[text()='Password']//following::input[1]");
       this.confirmpassword=page.locator("//label[text()='Confirm Password']//following::input[1]");
       this.savebutton=page.locator("//button[@type='submit']");

       this.UserName=page.locator("(//label[text()='Username']//following::input['oxd-input oxd-input--focus'])[1]");
       this.SearchButton=page.locator("//button[@type='submit']");
       this.editButton=page.locator("(//button[@type='button'])[8]");
       this.userRole=page.locator("//label[text()='User Role']//following::div[1]");
       this.selectUserRole=page.locator("//span[text()='ESS']");
       this.SaveButton=page.locator("//button[@type='submit']");
   
       this.USERname=page.locator("(//label[text()='Username']//following::input['oxd-input oxd-input--focus'])[1]");
       this.SEARCHbutton=page.locator("//button[@type='submit']");
       this.deleteButton=page.locator("//i[@class='oxd-icon bi-trash']");
       this.yesButton=page.locator("//button[text()=' Yes, Delete ']");
       }
  
  async clickOnAdmin(){
     await this.adminTabLoc.click();
     await this.page.waitForLoadState('networkidle');
   }
   async clickOnAddbutton(){
     await this.addButton.click();
     await this.page.waitForLoadState('load');
   }
   async selectOnUserrole(){
     await this.Userrole.click();
     await this.selectuserrole.click();
   }
   async selectStatus(){
     await this.status.click();
     await this.selectstatus.click();
   }
   async selectEmployeename(){
     await this.employeename.fill('a');
     await this.page.waitForTimeout(5000);
     //await this.page.waitForLoadState('load');
     //await this.page.waitForLoadState('networkidle');
     await this.selectemployeename.click();
   }
   async userName(username:string){
     await this.username.fill(username);
   }
   async Password(password:string){
     await this.password.fill(password);
   }
   async confirmPassword(confirmpassword:string){
     await this.confirmpassword.fill(confirmpassword);
   }
   async saveButton(){
     await this.savebutton.click();
     await this.page.waitForTimeout(5000);
    //  await this.page.waitForLoadState('domcontentloaded');
    //  await this.page.waitForLoadState('networkidle');
   }
   async Username(username:string){
     await this.UserName.fill(username);
   }
   async searchButton(){
     await this.SearchButton.click();
     await this.page.waitForTimeout(5000);
    //  await this.page.waitForLoadState('domcontentloaded');
    //  await this.page.waitForLoadState('networkidle');
   }
   async EditButton(){
     await this.editButton.click();
   }
   async UserRole(){
     await this.userRole.click();
   }
   async SelectUserRole(){
     await this.selectUserRole.click();
   }
   async savebuttOn(){
     await this.SaveButton.click();
     await this.page.waitForTimeout(5000);
    //  await this.page.waitForLoadState('load');
    //  await this.page.waitForLoadState('networkidle');
   }
   async USErname(username:string){
     await this.USERname.fill(username);
     await this.page.waitForTimeout(5000);
   }
   async Searchbutton(){
     await this.SEARCHbutton.click();
     await this.page.waitForTimeout(5000);
    //  await this.page.waitForLoadState('domcontentloaded');
    //  await this.page.waitForLoadState('networkidle');
   }
   async DeleteButton(){
     await this.deleteButton.click();
   }
   async YesButton(){
     await this.yesButton.click();
     await this.page.waitForLoadState('load');
     await this.page.waitForLoadState('networkidle');
   }
}