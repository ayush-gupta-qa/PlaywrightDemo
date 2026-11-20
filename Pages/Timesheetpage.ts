import { Page,Locator,expect } from "@playwright/test";
export class Timesheetpage{
     readonly page:Page;
     readonly employeeName:Locator;

     constructor(page: Page)
  { 
     this.page=page;
     this.employeeName=page.locator("//label[text()='Employee Name']/following::input[1]");

  }
  async enterEmployeeName(name:string){
    await this.employeeName.fill(name);
    await this.page.waitForLoadState('load');
    const clickviewbutton=this.page.locator("//button[@type='submit']");
    await clickviewbutton.click();
  }

}