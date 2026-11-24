import { Page,Locator,expect } from "@playwright/test";
export class Timesheetpage{
     readonly page:Page;
     readonly employeeName:Locator;
     readonly employeeView:Locator;

     constructor(page: Page)
  { 
     this.page=page;
     this.employeeName=page.locator("//label[text()='Employee Name']/following::input[1]");
     this.employeeView=page.locator("(//button[text()=' View '])[1]");


  }
  async enterEmployeeName(name:string){
    
        // Enter employee name
        await this.employeeName.fill(name);
        await this.page.waitForTimeout(3000);
        const employeesuggest = this.page.locator("(//div[@role='option'])[1]");
        await employeesuggest.click();

        
  }
  async clickView(){
    await this.employeeView.click();
 
  }
}