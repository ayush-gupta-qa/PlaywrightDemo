import {Page, Locator, expect} from '@playwright/test';
export class MyInfopage {

   readonly page : Page
   readonly myinfotab: Locator;
   readonly myinfoDBLoc: Locator;
   readonly firstname: Locator;
   readonly middlename: Locator;
   readonly lastname: Locator;
   readonly employeeId: Locator;
   readonly savebutton: Locator;
   readonly successmessage: Locator;

   constructor(page : Page)
   {
       this.page=page;
       this.myinfotab=page.getByRole('link', { name: 'My Info'});
       this.myinfoDBLoc=page.getByRole('heading', { name: 'PIM' });
       this.firstname = page.getByPlaceholder('First Name');
       this.middlename = page.getByPlaceholder('Middle Name');
       this.lastname = page.getByPlaceholder('Last Name');
       this.employeeId=page.locator("(//label[text()='Employee Id']/../following-sibling::div/input)[1]");
       this.savebutton=page.getByRole('button', { name: ' Save ' }).nth(0);
       this.successmessage=page.locator('.oxd-toast-content-text');
   }

   async clickonmyinfo() {
      await this.myinfotab.click();
   }
   async validatemyinfoPageVisibility() {
      await expect(this.myinfoDBLoc).toBeVisible({timeout:5000});
   }
   async enterFirstName(firstname: string) {
      await this.firstname.fill(firstname);

    }
   async entermiddlename(middlename: string) {
      await this.middlename.fill(middlename);
    }
   async enterlastname(lastname: string) {
      await this.lastname.fill(lastname);
    }
   async enteremployeeId(employeeId: string) {
      await this.employeeId.fill(employeeId);
    }
   async clickonsavebutton() {
      await this.savebutton.click();
      await this.page.waitForTimeout(5000);
   }
   async validatesuccessmessageVisibility() {
      await expect(this.myinfoDBLoc).toBeVisible({timeout:5000});
   }
}