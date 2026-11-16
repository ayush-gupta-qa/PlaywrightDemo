import {Page, Locator, expect} from '@playwright/test';
export class PIMpage{
      
     readonly page : Page;
     readonly PIMDBloc : Locator;

     constructor(page: Page){
      
          this.page=page;
          this.PIMDBloc=page.locator("//h6[text()='PIM']");
 }
     async validatePIMPageVisibility(){
     await expect(this.PIMDBloc).toBeVisible();
 }
}