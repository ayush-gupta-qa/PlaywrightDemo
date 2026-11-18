import {Page, Locator, expect} from '@playwright/test';
export class Leave{

    readonly page : Page;
    readonly userNameLoc: Locator;
    readonly passwordLoc: Locator;
    readonly submitButtonLoc: Locator;
    readonly dbpagevisible: Locator;
    readonly leaveTabLoc : Locator;
    readonly leaveTabvisibility : Locator;
    readonly employeeName : Locator;

    
    constructor(page: Page) {

     this.page=page;
     this.userNameLoc=page.getByRole('textbox',{name:'username'});
     this.passwordLoc=page.getByRole('textbox',{name:'password'});
     this.submitButtonLoc=page.getByRole('button',{name:'Login'});
     this.dbpagevisible=page.getByRole('heading',{name:'Dashboard'});
     this.leaveTabLoc = page.getByRole('link', { name: 'Leave' });
     this.leaveTabvisibility=page.getByRole('heading', { name: 'Leave', exact: true });
     this.employeeName=page.getByPlaceholder('Type for hints...');
    }
    async enterUserName(username:string){
        await this.userNameLoc.fill(username);
    }
    async enterPassword(password:string){
        await this.passwordLoc.fill(password);
    }
    async clicksubmitButton(){
      await this.submitButtonLoc.click();
    }
    async dbPageVisible(){
      await expect(this.dbpagevisible).toBeVisible();
      await this.page.waitForLoadState('domcontentloaded');
    }
    async ClickonLeavebutton() {
        await this.leaveTabLoc.click();
        await this.page.waitForLoadState('load');
        await this.page.waitForLoadState('networkidle');
    }
    async validateLeavePageVisibility(){
     await expect(this.leaveTabvisibility).toBeVisible({timeout:5000});
 }
    async clickOnEmployeeName(){
     await this.employeeName.click();
    }
}