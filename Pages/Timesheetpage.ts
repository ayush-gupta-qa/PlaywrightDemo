import { Page,Locator,expect } from "@playwright/test";
export class Timesheetpage{
     readonly page:Page;
     readonly employeeName:Locator;
     readonly employeeView:Locator;

     readonly clickCreateTimesheet:Locator;
     readonly Clickontimeedit:Locator;
     readonly projectInput:Locator;
     readonly projectDropdownOption:Locator;
     readonly activityDropdown:Locator;
     readonly activityDropdownOption:Locator;
     readonly mondaytiming:Locator;
     readonly clickAddRow:Locator;


     constructor(page: Page)
  { 
     this.page=page;
     this.employeeName=page.locator("//label[text()='Employee Name']/following::input[1]");
     this.employeeView=page.locator("(//button[text()=' View '])[1]");
     this.clickCreateTimesheet = this.page.getByRole('button', {name: 'Create Timesheet',exact: true});
     this.Clickontimeedit=page.locator("//button[text()=' Edit ']");
     this.projectInput=page.getByPlaceholder('Type for hints...');
     this.projectDropdownOption=page.getByRole('listbox').getByRole('option');

     this.activityDropdown=page.locator(".oxd-select-text-input");
     this.activityDropdownOption=page.getByRole('listbox').getByRole("option");
     this.mondaytiming=page.locator("(//input[@class='oxd-input oxd-input--active'])[1]");
     this.clickAddRow=page.locator("//i[@class='oxd-icon bi-plus']");


  }
  async enterEmployeeName(name:string){
    
        // Enter employee name
        await this.employeeName.fill(name);
        await this.page.waitForTimeout(5000);
        const employeesuggest = this.page.locator("(//div[@role='option'])[1]");
        await employeesuggest.click();

        
  }
  async clickView(){
    await this.employeeView.click();
    await this.page.waitForLoadState('load');
  }
  
  async clickonCreateTime(){
    await this.clickCreateTimesheet.click();
    await this.page.waitForLoadState('load');
  }
  async ClickOnTimeEdit(){
    await this.Clickontimeedit.click();
    await this.page.waitForLoadState('load');
  }
  async selectProject(searchText:string,exactProjectName:string){
    await this.projectInput.fill(searchText);
    await this.projectDropdownOption.first().waitFor({state:'visible'});
    await this.projectDropdownOption.filter({hasText:exactProjectName}).click();
  }
  async selectTheActivity(activityName:string){
    await this.activityDropdown.click();
      await this.activityDropdownOption.first().waitFor({state:'visible'});
    await this.activityDropdownOption.filter({hasText:activityName}).click();
  }
  async editMondayTiming(time:string){
    await this.mondaytiming.fill(time);
  }
  async clickOnAddButton(){
    await this.clickAddRow.click();
  }
}