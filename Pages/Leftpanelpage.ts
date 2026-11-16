import {Page, Locator} from '@playwright/test';
export class Leftpanelpage {

    readonly page: Page;
    readonly adminTabLoc: Locator;
    readonly pimTabLoc: Locator;
    readonly leaveTabLoc: Locator;
    readonly timeTabLoc: Locator;
    readonly recruitmentTabLoc: Locator;
    readonly myinfoTabLoc: Locator;
    readonly performanceTabLoc: Locator;
    readonly dashboardTabLoc: Locator;
    readonly directoryTabLoc: Locator;
    readonly maintenanceTabLoc: Locator;
    readonly claimTabLoc: Locator;
    readonly buzzTabLoc: Locator;

constructor(page: Page)
  {  this.page=page;
    this.adminTabLoc=page.locator("//span[text()='Admin']");
    this.pimTabLoc=page.locator("//span[text()='PIM']");
    this.leaveTabLoc=page.locator("//span[text()='Leave']");
    this.timeTabLoc=page.locator("//span[text()='Time']");
    this.recruitmentTabLoc=page.locator("//span[text()='Recruitment']");
    this.myinfoTabLoc=page.locator("//span[text()='My Info']");
    this.performanceTabLoc=page.locator("//span[text()='Performance']");
    this.dashboardTabLoc=page.locator("//span[text()='Dashboard']");
    this.directoryTabLoc=page.locator("//span[text()='Directory']");
    this.maintenanceTabLoc=page.locator("//span[text()='Maintenance']");
    this.claimTabLoc=page.locator("//span[text()='Claim']");
    this.buzzTabLoc=page.locator("//span[text()='Buzz']");
}

async clickOnAdmin(){
     await this.adminTabLoc.click();
   }
async clickOnPIM(){
    await this.pimTabLoc.click();
}
async clickOnLeave(){
     await this.leaveTabLoc.click();
}
 async clickOnTime(){
     await this.timeTabLoc.click();
}
async clickOnRecruitment(){
     await this.recruitmentTabLoc.click();
}
async clickOnMyinfo(){
     await this.myinfoTabLoc.click();
}
async clickOnPerformance(){
     await this.performanceTabLoc.click();
}
async clickOnDashboard(){
     await this.dashboardTabLoc.click();
}
async clickOnDirectory(){
     await this.directoryTabLoc.click();
}
async clickOnMaintenance(){
     await this.maintenanceTabLoc.click();
}
async clickOnClaim(){
     await this.claimTabLoc.click();
}
async clickOnBuzz(){
     await this.buzzTabLoc.click();
}
}