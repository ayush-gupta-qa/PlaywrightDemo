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
      - generic [ref=f1e148]:
        - generic [ref=f1e150]:
          - generic [ref=f1e151]: 
          - paragraph [ref=f1e152]: My Actions
        - separator [ref=f1e153]
        - generic [ref=f1e156]:
          - button [ref=f1e157] [cursor=pointer]
          - paragraph [ref=f1e163] [cursor=pointer]: (1) Pending Self Review
      - generic [ref=f1e165]:
        - generic [ref=f1e167]:
          - generic [ref=f1e168]: 
          - paragraph [ref=f1e169]: Quick Launch
        - separator [ref=f1e170]
        - generic [ref=f1e172]:
          - generic [ref=f1e173]:
            - button "Assign Leave" [ref=f1e174] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e177]:
              - paragraph [ref=f1e178]: Assign Leave
          - generic [ref=f1e179]:
            - button "Leave List" [ref=f1e180] [cursor=pointer]
            - generic "Leave List" [ref=f1e187]:
              - paragraph [ref=f1e188]: Leave List
          - generic [ref=f1e189]:
            - button "Timesheets" [ref=f1e190] [cursor=pointer]
            - generic "Timesheets" [ref=f1e196]:
              - paragraph [ref=f1e197]: Timesheets
          - generic [ref=f1e198]:
            - button "Apply Leave" [ref=f1e199] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e202]:
              - paragraph [ref=f1e203]: Apply Leave
          - generic [ref=f1e204]:
            - button "My Leave" [ref=f1e205] [cursor=pointer]
            - generic "My Leave" [ref=f1e210]:
              - paragraph [ref=f1e211]: My Leave
          - generic [ref=f1e212]:
            - button "My Timesheet" [ref=f1e213] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e216]:
              - paragraph [ref=f1e217]: My Timesheet
      - generic [ref=f1e219]:
        - generic [ref=f1e221]:
          - generic [ref=f1e222]: 
          - paragraph [ref=f1e223]: Buzz Latest Posts
        - separator [ref=f1e224]
        - generic [ref=f1e226]:
          - generic [ref=f1e227]:
            - generic [ref=f1e228] [cursor=pointer]:
              - img "profile picture" [ref=f1e230]
              - generic [ref=f1e231]:
                - paragraph [ref=f1e232]: John Mike Doe
                - paragraph [ref=f1e233]: 2026-16-11 02:44 PM
            - separator [ref=f1e234]
            - paragraph [ref=f1e235]: hWIxpPFWVB
          - generic [ref=f1e236]:
            - generic [ref=f1e237] [cursor=pointer]:
              - img "profile picture" [ref=f1e239]
              - generic [ref=f1e240]:
                - paragraph [ref=f1e241]: John Mike Doe
                - paragraph [ref=f1e242]: 2026-16-11 02:44 PM
            - separator [ref=f1e243]
            - paragraph [ref=f1e244]: TpggwSOnsE
          - generic [ref=f1e245]:
            - generic [ref=f1e246] [cursor=pointer]:
              - img "profile picture" [ref=f1e248]
              - generic [ref=f1e249]:
                - paragraph [ref=f1e250]: John Mike Doe
                - paragraph [ref=f1e251]: 2026-16-11 02:43 PM
            - separator [ref=f1e252]
            - paragraph [ref=f1e253]: PsfPBGcYOm
      - generic [ref=f1e255]:
        - generic [ref=f1e256]:
          - paragraph [ref=f1e261]: Employees on Leave Today
          - generic [ref=f1e262] [cursor=pointer]: 
        - separator [ref=f1e263]
        - generic [ref=f1e265]:
          - img "No Content" [ref=f1e266]
          - paragraph [ref=f1e267]: No Employees are on Leave Today
      - generic [ref=f1e269]:
        - generic [ref=f1e271]:
          - generic [ref=f1e272]: 
          - paragraph [ref=f1e273]: Employee Distribution by Sub Unit
        - separator [ref=f1e274]
      - generic [ref=f1e278]:
        - generic [ref=f1e280]:
          - generic [ref=f1e281]: 
          - paragraph [ref=f1e282]: Employee Distribution by Location
        - separator [ref=f1e283]
    - generic [ref=f1e286]:
      - paragraph [ref=f1e287]: OrangeHRM OS 5.9
      - paragraph [ref=f1e288]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e289] [cursor=pointer]:
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