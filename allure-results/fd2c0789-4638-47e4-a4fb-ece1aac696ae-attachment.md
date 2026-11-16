# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: crudPOM.spec.ts >> Admin module >> Verify Admin User CRUD Operations
- Location: tests\crudPOM.spec.ts:7:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link') resolved to 15 elements:
    1) <a class="oxd-brand" data-v-16e446b0="" data-v-5b6b3cf3="" href="https://www.orangehrm.com/">…</a> aka getByRole('link', { name: 'client brand banner' })
    2) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/admin/viewAdminModule">…</a> aka getByRole('link', { name: 'Admin' })
    3) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/pim/viewPimModule">…</a> aka getByRole('link', { name: 'PIM' })
    4) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/leave/viewLeaveModule">…</a> aka getByRole('link', { name: 'Leave' })
    5) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/time/viewTimeModule">…</a> aka getByRole('link', { name: 'Time' })
    6) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/recruitment/viewRecruitmentModule">…</a> aka getByRole('link', { name: 'Recruitment' })
    7) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/pim/viewMyDetails">…</a> aka getByRole('link', { name: 'My Info' })
    8) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/performance/viewPerformanceModule">…</a> aka getByRole('link', { name: 'Performance' })
    9) <a data-v-6475d26d="" class="oxd-main-menu-item active" href="/web/index.php/dashboard/index">…</a> aka getByRole('link', { name: 'Dashboard' })
    10) <a data-v-6475d26d="" class="oxd-main-menu-item" href="/web/index.php/directory/viewDirectory">…</a> aka getByRole('link', { name: 'Directory' })
    ...

Call log:
  - waiting for getByRole('link')

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary [ref=f1e4]:
      - navigation "Sidepanel" [ref=f1e5]:
        - generic [ref=f1e6]:
          - link [ref=f1e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e9]
          - text: 
        - generic [ref=f1e10]:
          - generic [ref=f1e11]:
            - generic [ref=f1e12]:
              - textbox "Search" [ref=f1e15]
              - button "" [ref=f1e16] [cursor=pointer]
            - separator [ref=f1e18]
          - list [ref=f1e19]:
            - listitem [ref=f1e20]:
              - link "Admin" [ref=f1e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f1e25]:
              - link "PIM" [ref=f1e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f1e41]:
              - link "Leave" [ref=f1e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f1e46]:
              - link "Time" [ref=f1e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f1e54]:
              - link "Recruitment" [ref=f1e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f1e62]:
              - link "My Info" [ref=f1e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f1e70]:
              - link "Performance" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f1e80]:
              - link "Dashboard" [ref=f1e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f1e85]:
              - link "Directory" [ref=f1e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f1e90]:
              - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f1e96]:
              - link "Claim" [ref=f1e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f1e105]:
              - link "Buzz" [ref=f1e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e110]:
      - generic [ref=f1e111]:
        - generic [ref=f1e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f1e114]
        - link [ref=f1e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e117] [cursor=pointer]
        - list [ref=f1e123]:
          - listitem [ref=f1e124]:
            - generic [ref=f1e125] [cursor=pointer]:
              - img "profile picture" [ref=f1e126]
              - paragraph [ref=f1e127]: John Doe
              - generic [ref=f1e128]: 
      - navigation "Topbar Menu" [ref=f1e130]:
        - list [ref=f1e131]:
          - button "" [ref=f1e133] [cursor=pointer]
  - generic [ref=f1e135]:
    - generic [ref=f1e137]:
      - generic [ref=f1e139]:
        - generic [ref=f1e141]:
          - generic [ref=f1e142]: 
          - paragraph [ref=f1e143]: Time at Work
        - separator [ref=f1e144]
        - generic [ref=f1e146]:
          - generic [ref=f1e147]:
            - img "profile picture" [ref=f1e149]
            - generic [ref=f1e150]:
              - paragraph [ref=f1e151]: Punched Out
              - paragraph [ref=f1e152]: "Punched Out: Today at 12:57 AM (GMT -8)"
          - generic [ref=f1e153]:
            - generic [ref=f1e154]: 0h 0m Today
            - button "" [ref=f1e155] [cursor=pointer]
          - separator [ref=f1e157]
          - generic [ref=f1e158]:
            - generic [ref=f1e159]:
              - paragraph [ref=f1e160]: This Week
              - paragraph [ref=f1e161]: Nov 16 - Nov 22
            - generic [ref=f1e162]:
              - generic [ref=f1e163]: 
              - paragraph [ref=f1e164]: 0h 0m
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: My Actions
        - separator [ref=f1e173]
        - generic [ref=f1e175]:
          - img "No Content" [ref=f1e176]
          - paragraph [ref=f1e177]: No Pending Actions to Perform
      - generic [ref=f1e179]:
        - generic [ref=f1e181]:
          - generic [ref=f1e182]: 
          - paragraph [ref=f1e183]: Quick Launch
        - separator [ref=f1e184]
        - generic [ref=f1e186]:
          - generic [ref=f1e187]:
            - button "Assign Leave" [ref=f1e188] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e191]:
              - paragraph [ref=f1e192]: Assign Leave
          - generic [ref=f1e193]:
            - button "Leave List" [ref=f1e194] [cursor=pointer]
            - generic "Leave List" [ref=f1e201]:
              - paragraph [ref=f1e202]: Leave List
          - generic [ref=f1e203]:
            - button "Timesheets" [ref=f1e204] [cursor=pointer]
            - generic "Timesheets" [ref=f1e210]:
              - paragraph [ref=f1e211]: Timesheets
          - generic [ref=f1e212]:
            - button "Apply Leave" [ref=f1e213] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e216]:
              - paragraph [ref=f1e217]: Apply Leave
          - generic [ref=f1e218]:
            - button "My Leave" [ref=f1e219] [cursor=pointer]
            - generic "My Leave" [ref=f1e224]:
              - paragraph [ref=f1e225]: My Leave
          - generic [ref=f1e226]:
            - button "My Timesheet" [ref=f1e227] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e230]:
              - paragraph [ref=f1e231]: My Timesheet
      - generic [ref=f1e233]:
        - generic [ref=f1e235]:
          - generic [ref=f1e236]: 
          - paragraph [ref=f1e237]: Buzz Latest Posts
        - separator [ref=f1e238]
      - generic [ref=f1e242]:
        - generic [ref=f1e243]:
          - paragraph [ref=f1e248]: Employees on Leave Today
          - generic [ref=f1e249] [cursor=pointer]: 
        - separator [ref=f1e250]
      - generic [ref=f1e254]:
        - generic [ref=f1e256]:
          - generic [ref=f1e257]: 
          - paragraph [ref=f1e258]: Employee Distribution by Sub Unit
        - separator [ref=f1e259]
        - list [ref=f1e264]:
          - listitem [ref=f1e265] [cursor=pointer]:
            - generic "Engineering" [ref=f1e267]
          - listitem [ref=f1e268] [cursor=pointer]:
            - generic "Human Resources" [ref=f1e270]
          - listitem [ref=f1e271] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e273]
      - generic [ref=f1e275]:
        - generic [ref=f1e277]:
          - generic [ref=f1e278]: 
          - paragraph [ref=f1e279]: Employee Distribution by Location
        - separator [ref=f1e280]
    - generic [ref=f1e283]:
      - paragraph [ref=f1e284]: OrangeHRM OS 5.9
      - paragraph [ref=f1e285]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e286] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
      |                             ^ Error: locator.click: Error: strict mode violation: getByRole('link') resolved to 15 elements:
  59  |      await this.page.waitForLoadState('networkidle');
  60  |    }
  61  |    async clickOnAddbutton(){
  62  |      await this.addButton.click();
  63  |    }
  64  |    async selectOnUserrole(){
  65  |      await this.Userrole.click();
  66  |      await this.selectuserrole.click();
  67  |    }
  68  |    async selectStatus(){
  69  |      await this.status.click();
  70  |      await this.selectstatus.click();
  71  |    }
  72  |    async selectEmployeename(){
  73  |      await this.employeename.fill('a');
  74  |      await this.page.waitForTimeout(5000);
  75  |      //await this.page.waitForLoadState('load');
  76  |      //await this.page.waitForLoadState('networkidle');
  77  |      await this.selectemployeename.click();
  78  |    }
  79  |    async userName(username:string){
  80  |      await this.username.fill(username);
  81  |    }
  82  |    async Password(password:string){
  83  |      await this.password.fill(password);
  84  |    }
  85  |    async confirmPassword(confirmpassword:string){
  86  |      await this.confirmpassword.fill(confirmpassword);
  87  |    }
  88  |    async saveButton(){
  89  |      await this.savebutton.click();
  90  |      await this.page.waitForTimeout(5000);
  91  |     //  await this.page.waitForLoadState('domcontentloaded');
  92  |     //  await this.page.waitForLoadState('networkidle');
  93  |    }
  94  |    async Username(username:string){
  95  |      await this.UserName.fill(username);
  96  |    }
  97  |    async searchButton(){
  98  |      await this.SearchButton.click();
  99  |      await this.page.waitForTimeout(5000);
  100 |     //  await this.page.waitForLoadState('domcontentloaded');
  101 |     //  await this.page.waitForLoadState('networkidle');
  102 |    }
  103 |    async EditButton(){
  104 |      await this.editButton.click();
  105 |    }
  106 |    async UserRole(){
  107 |      await this.userRole.click();
  108 |    }
  109 |    async SelectUserRole(){
  110 |      await this.selectUserRole.click();
  111 |    }
  112 |    async savebuttOn(){
  113 |      await this.SaveButton.click();
  114 |      await this.page.waitForTimeout(5000);
  115 |     //  await this.page.waitForLoadState('load');
  116 |     //  await this.page.waitForLoadState('networkidle');
  117 |    }
  118 |    async USErname(username:string){
  119 |      await this.USERname.fill(username);
  120 |      await this.page.waitForTimeout(5000);
  121 |    }
  122 |    async Searchbutton(){
  123 |      await this.SEARCHbutton.click();
  124 |      await this.page.waitForTimeout(5000);
  125 |     //  await this.page.waitForLoadState('domcontentloaded');
  126 |     //  await this.page.waitForLoadState('networkidle');
  127 |    }
  128 |    async DeleteButton(){
  129 |      await this.deleteButton.click();
  130 |    }
  131 |    async YesButton(){
  132 |      await this.yesButton.click();
  133 |      await this.page.waitForLoadState('load');
  134 |      await this.page.waitForLoadState('networkidle');
  135 |    }
  136 | }
```