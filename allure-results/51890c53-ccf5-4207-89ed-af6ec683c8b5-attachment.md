# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: crudPOM.spec.ts >> Admin module >> Verify Admin User CRUD Operations
- Location: tests\crudPOM.spec.ts:7:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link') resolved to 5 elements:
    1) <a target="_blank" data-v-0af708be="" href="https://www.linkedin.com/company/orangehrm/mycompany/">…</a> aka getByRole('link').first()
    2) <a target="_blank" data-v-0af708be="" href="https://www.facebook.com/OrangeHRM/">…</a> aka getByRole('link').nth(1)
    3) <a target="_blank" data-v-0af708be="" href="https://twitter.com/orangehrm?lang=en">…</a> aka getByRole('link').nth(2)
    4) <a target="_blank" data-v-0af708be="" href="https://www.youtube.com/c/OrangeHRMInc">…</a> aka getByRole('link').nth(3)
    5) <a target="_blank" href="http://www.orangehrm.com">OrangeHRM, Inc</a> aka getByRole('link', { name: 'OrangeHRM, Inc' })

Call log:
  - waiting for getByRole('link')

```

# Test source

```ts
  1   | import {Page, Locator, expect} from '@playwright/test';
  2   | export class crudPOMpage{
  3   | 
  4   |    readonly page: Page;
  5   |    readonly adminTabLoc: Locator;
  6   |    readonly addButton: Locator;
  7   |    readonly Userrole: Locator;
  8   |    readonly selectuserrole: Locator;
  9   |    readonly status: Locator;
  10  |    readonly selectstatus: Locator;
  11  |    readonly employeename: Locator;
  12  |    readonly selectemployeename: Locator;
  13  |    readonly username: Locator;
  14  |    readonly password: Locator;
  15  |    readonly confirmpassword: Locator;
  16  |    readonly savebutton: Locator;
  17  |    readonly UserName: Locator;
  18  |    readonly SearchButton: Locator;
  19  |    readonly editButton: Locator;
  20  |    readonly userRole: Locator;
  21  |    readonly selectUserRole: Locator;
  22  |    readonly SaveButton: Locator;
  23  |    readonly USERname: Locator;
  24  |    readonly SEARCHbutton: Locator;
  25  |    readonly deleteButton: Locator;
  26  |    readonly yesButton: Locator;
  27  | 
  28  |    constructor(page: Page)
  29  |    {
  30  |        this.page=page;
  31  |        this.adminTabLoc=page.getByRole('link'),{name:'Admin'};
  32  |        this.addButton=page.locator('textbox'),{name:'button'};
  33  |        this.Userrole=page.locator("//label[text()='User Role']//following::div[1]");
  34  |        this.selectuserrole=page.locator("(//span[text()='Admin'])[2]");
  35  |        this.status=page.locator("//label[text()='Status']//following::div[1]");
  36  |        this.selectstatus=page.locator("//span[text()='Enabled']");
  37  |        this.employeename=page.locator("//label[text()='Employee Name']//following::input[1]");
  38  |        this.selectemployeename=page.locator("(//div[@role='option'])[1]");
  39  |        this.username=page.locator("//label[text()='Username']//following::input[1]");
  40  |        this.password=page.locator("//label[text()='Password']//following::input[1]");
  41  |        this.confirmpassword=page.locator("//label[text()='Confirm Password']//following::input[1]");
  42  |        this.savebutton=page.locator("//button[@type='submit']");
  43  | 
  44  |        this.UserName=page.locator("(//label[text()='Username']//following::input['oxd-input oxd-input--focus'])[1]");
  45  |        this.SearchButton=page.locator("//button[@type='submit']");
  46  |        this.editButton=page.locator("(//button[@type='button'])[8]");
  47  |        this.userRole=page.locator("//label[text()='User Role']//following::div[1]");
  48  |        this.selectUserRole=page.locator("//span[text()='ESS']");
  49  |        this.SaveButton=page.locator("//button[@type='submit']");
  50  |    
  51  |        this.USERname=page.locator("(//label[text()='Username']//following::input['oxd-input oxd-input--focus'])[1]");
  52  |        this.SEARCHbutton=page.locator("//button[@type='submit']");
  53  |        this.deleteButton=page.locator("//i[@class='oxd-icon bi-trash']");
  54  |        this.yesButton=page.locator("//button[text()=' Yes, Delete ']");
  55  |        }
  56  |   
  57  |   async clickOnAdmin(){
> 58  |      await this.adminTabLoc.click();
      |                             ^ Error: locator.click: Error: strict mode violation: getByRole('link') resolved to 5 elements:
  59  |    }
  60  |    async clickOnAddbutton(){
  61  |      await this.addButton.click();
  62  |    }
  63  |    async selectOnUserrole(){
  64  |      await this.Userrole.click();
  65  |      await this.selectuserrole.click();
  66  |    }
  67  |    async selectStatus(){
  68  |      await this.status.click();
  69  |      await this.selectstatus.click();
  70  |    }
  71  |    async selectEmployeename(){
  72  |      await this.employeename.fill('a');
  73  |      await this.page.waitForTimeout(5000);
  74  |      //await this.page.waitForLoadState('load');
  75  |      //await this.page.waitForLoadState('networkidle');
  76  |      await this.selectemployeename.click();
  77  |    }
  78  |    async userName(username:string){
  79  |      await this.username.fill(username);
  80  |    }
  81  |    async Password(password:string){
  82  |      await this.password.fill(password);
  83  |    }
  84  |    async confirmPassword(confirmpassword:string){
  85  |      await this.confirmpassword.fill(confirmpassword);
  86  |    }
  87  |    async saveButton(){
  88  |      await this.savebutton.click();
  89  |      await this.page.waitForTimeout(5000);
  90  |     //  await this.page.waitForLoadState('domcontentloaded');
  91  |     //  await this.page.waitForLoadState('networkidle');
  92  |    }
  93  |    async Username(username:string){
  94  |      await this.UserName.fill(username);
  95  |    }
  96  |    async searchButton(){
  97  |      await this.SearchButton.click();
  98  |      await this.page.waitForTimeout(5000);
  99  |     //  await this.page.waitForLoadState('domcontentloaded');
  100 |     //  await this.page.waitForLoadState('networkidle');
  101 |    }
  102 |    async EditButton(){
  103 |      await this.editButton.click();
  104 |    }
  105 |    async UserRole(){
  106 |      await this.userRole.click();
  107 |    }
  108 |    async SelectUserRole(){
  109 |      await this.selectUserRole.click();
  110 |    }
  111 |    async savebuttOn(){
  112 |      await this.SaveButton.click();
  113 |      await this.page.waitForTimeout(5000);
  114 |     //  await this.page.waitForLoadState('load');
  115 |     //  await this.page.waitForLoadState('networkidle');
  116 |    }
  117 |    async USErname(username:string){
  118 |      await this.USERname.fill(username);
  119 |      await this.page.waitForTimeout(5000);
  120 |    }
  121 |    async Searchbutton(){
  122 |      await this.SEARCHbutton.click();
  123 |      await this.page.waitForTimeout(5000);
  124 |     //  await this.page.waitForLoadState('domcontentloaded');
  125 |     //  await this.page.waitForLoadState('networkidle');
  126 |    }
  127 |    async DeleteButton(){
  128 |      await this.deleteButton.click();
  129 |    }
  130 |    async YesButton(){
  131 |      await this.yesButton.click();
  132 |      await this.page.waitForLoadState('load');
  133 |      await this.page.waitForLoadState('networkidle');
  134 |    }
  135 | }
```