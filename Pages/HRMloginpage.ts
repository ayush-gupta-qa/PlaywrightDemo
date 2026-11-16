import {Page, Locator, expect} from '@playwright/test';
export class HRMloginpage {
    
    readonly page: Page;
    readonly userNameLoc: Locator;
    readonly passwordLoc: Locator;
    readonly submitButtonLoc: Locator;
    readonly dbpagevisible: Locator;

    constructor(page:Page)
    {
         this.page=page;
         this.userNameLoc=page.getByRole('textbox',{name:'username'});
         this.passwordLoc=page.getByRole('textbox',{name:'password'});
         this.submitButtonLoc=page.getByRole('button',{name:'Login'});
         this.dbpagevisible=page.getByRole('heading',{name:'Dashboard'});
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
      await this.page.waitForLoadState('networkidle');
    }
  }