import {Page, Locator, expect} from '@playwright/test';
export class Adminpage{

   readonly page: Page;
   readonly adminDBLoc: Locator;
   
   constructor(page: Page)
   {
       this.page=page;
       this.adminDBLoc=page.locator("//h6[text()='User Management']");
  }
  async validateAdminPageVisibility(){
     await expect(this.adminDBLoc).toBeVisible();
 }
}