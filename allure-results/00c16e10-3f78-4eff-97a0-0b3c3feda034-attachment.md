# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: crudPOM.spec.ts >> Admin module >> Verify Admin User CRUD Operations
- Location: tests\crudPOM.spec.ts:7:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('textbox')

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
  31  |        this.adminTabLoc=page.getByText('Admin', { exact: true });
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
  58  |      await this.adminTabLoc.click();
  59  |      await this.page.waitForLoadState('networkidle');
  60  |    }
  61  |    async clickOnAddbutton(){
> 62  |      await this.addButton.click();
      |                           ^ Error: locator.click: Target page, context or browser has been closed
  63  |      await this.page.waitForLoadState('load');
  64  |    }
  65  |    async selectOnUserrole(){
  66  |      await this.Userrole.click();
  67  |      await this.selectuserrole.click();
  68  |    }
  69  |    async selectStatus(){
  70  |      await this.status.click();
  71  |      await this.selectstatus.click();
  72  |    }
  73  |    async selectEmployeename(){
  74  |      await this.employeename.fill('a');
  75  |      await this.page.waitForTimeout(5000);
  76  |      //await this.page.waitForLoadState('load');
  77  |      //await this.page.waitForLoadState('networkidle');
  78  |      await this.selectemployeename.click();
  79  |    }
  80  |    async userName(username:string){
  81  |      await this.username.fill(username);
  82  |    }
  83  |    async Password(password:string){
  84  |      await this.password.fill(password);
  85  |    }
  86  |    async confirmPassword(confirmpassword:string){
  87  |      await this.confirmpassword.fill(confirmpassword);
  88  |    }
  89  |    async saveButton(){
  90  |      await this.savebutton.click();
  91  |      await this.page.waitForTimeout(5000);
  92  |     //  await this.page.waitForLoadState('domcontentloaded');
  93  |     //  await this.page.waitForLoadState('networkidle');
  94  |    }
  95  |    async Username(username:string){
  96  |      await this.UserName.fill(username);
  97  |    }
  98  |    async searchButton(){
  99  |      await this.SearchButton.click();
  100 |      await this.page.waitForTimeout(5000);
  101 |     //  await this.page.waitForLoadState('domcontentloaded');
  102 |     //  await this.page.waitForLoadState('networkidle');
  103 |    }
  104 |    async EditButton(){
  105 |      await this.editButton.click();
  106 |    }
  107 |    async UserRole(){
  108 |      await this.userRole.click();
  109 |    }
  110 |    async SelectUserRole(){
  111 |      await this.selectUserRole.click();
  112 |    }
  113 |    async savebuttOn(){
  114 |      await this.SaveButton.click();
  115 |      await this.page.waitForTimeout(5000);
  116 |     //  await this.page.waitForLoadState('load');
  117 |     //  await this.page.waitForLoadState('networkidle');
  118 |    }
  119 |    async USErname(username:string){
  120 |      await this.USERname.fill(username);
  121 |      await this.page.waitForTimeout(5000);
  122 |    }
  123 |    async Searchbutton(){
  124 |      await this.SEARCHbutton.click();
  125 |      await this.page.waitForTimeout(5000);
  126 |     //  await this.page.waitForLoadState('domcontentloaded');
  127 |     //  await this.page.waitForLoadState('networkidle');
  128 |    }
  129 |    async DeleteButton(){
  130 |      await this.deleteButton.click();
  131 |    }
  132 |    async YesButton(){
  133 |      await this.yesButton.click();
  134 |      await this.page.waitForLoadState('load');
  135 |      await this.page.waitForLoadState('networkidle');
  136 |    }
  137 | }
```