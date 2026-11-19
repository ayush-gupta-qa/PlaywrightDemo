import {Page, Locator, expect} from '@playwright/test';
export class Leavepage1{
    readonly page : Page;
    readonly leaveTabLoc: Locator;
    readonly formdate:Locator;
    readonly selectformdate:Locator;
    readonly toDate:Locator;
    readonly selectToDate:Locator;
    readonly showLeave:Locator;
    readonly selectShowLeave:Locator;
    readonly LeaveType:Locator;
    readonly selectLeaveType1:Locator;
    readonly clickEmployee:Locator;
    readonly selectemployeename:Locator;
    readonly selctUnit:Locator;
    readonly selectSubUnit:Locator;
    readonly clickOnSearchbtn:Locator;
    constructor(page:Page){
        this.page=page;
        this.leaveTabLoc = page.getByRole('link', { name: 'Leave' });
        this.formdate=page.locator("(//div[@class='oxd-date-input']/i)[1]");
        this.selectformdate=page.locator("//div[@class='oxd-calendar-date' and text()='15']");
        this.toDate=page.locator("(//div[@class='oxd-date-input']/i)[2]");
        this.selectToDate=page.locator("//div[@class='oxd-calendar-date' and text()='18']");
        this.showLeave=page.locator("(//div[@class='oxd-select-text-input'])[1]");
        this.selectShowLeave=page.locator("//span[text()='Taken']");
        this.LeaveType=page.locator("(//div[@class='oxd-select-text-input'])[2]");
        this.selectLeaveType1=page.locator("//span[text()='CAN - Bereavement']");
        this.clickEmployee=page.locator("//label[text()='Employee Name']//following::input[1]");
        this.selectemployeename=page.locator("(//div[@role='option'])[1]");
        this.selctUnit=page.locator("(//div[@class='oxd-select-text-input'])[3]");
        this.selectSubUnit=page.locator("//span[text()='Administration']");
        this.clickOnSearchbtn=page.locator("//button[ normalize-space()='Search']");
    }
    async clickOnLeftTab(){
        await this.leaveTabLoc.click();
    }
    async clickONFormdate(){
        await this.formdate.click();
        await this.selectformdate.click();
    }
    async ClickAndSelectToDate(){
        await this.toDate.click();
        await this.page.waitForLoadState("domcontentloaded");
        await this.selectToDate.first().click();
    }
    async selectshowleave(){
        await this.showLeave.click();
        await this.selectShowLeave.click();
    }
    async selectLeaveType(){
        await this.LeaveType.click();
        await this.selectLeaveType1.click();
    }
    async selectEmpoyee(){
        await this.clickEmployee.fill('a');
        await this.page.waitForTimeout(5000);
        await this.selectemployeename.click();
    }
    async selectSubUnit1(){
        await this.selctUnit.click();
        await this.selectSubUnit.click();
    }
    async selectsearchButton(){
        await this.clickOnSearchbtn.click();
    }


}