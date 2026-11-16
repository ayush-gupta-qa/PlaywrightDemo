# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.ts >> PIM module >> 1. Create Employee
- Location: tests\pim.spec.ts:25:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import loginData from '../Test-Data1/login.json';
  3  | import { crudPIMpage } from '../Pages/crudPIMpage';
  4  | 
  5  | test.describe.serial('PIM module', () => {
  6  |     test.setTimeout(120000);
  7  | 
  8  |     // Declare POM globally inside describe
  9  |     let crudpimpage: crudPIMpage;
  10 | 
  11 |     // Login before every test
  12 |     test.beforeEach(async ({ page }) => {
> 13 |         await page.goto(loginData.url);
     |                    ^ Error: page.goto: Target page, context or browser has been closed
  14 |         await page.getByPlaceholder('Username').fill(loginData.username);
  15 |         await page.getByPlaceholder('Password').fill(loginData.password);
  16 |         await page.getByRole('button', { name: 'Login' }).click();
  17 |         await expect(page).toHaveURL(/dashboard/);
  18 | 
  19 |         crudpimpage = new crudPIMpage(page);
  20 |         await crudpimpage.clickOnPIM();
  21 |         await crudpimpage.validatePIMPageVisibility();
  22 |     });
  23 | 
  24 |     // 1. CREATE EMPLOYEE
  25 |     test('1. Create Employee',{tag: ['@smoke']}, async ({ page }) => {
  26 | 
  27 |         await crudpimpage.clickOnaddButton();
  28 |         await crudpimpage.ProfilePic();
  29 |         await crudpimpage.enteremployeeFirstName('Ayush');
  30 |         await crudpimpage.enteremployeeLastName('Gupta');
  31 |         await crudpimpage.clickOntoggleButton();
  32 |         await crudpimpage.enterusername('Ashu12');
  33 |         await crudpimpage.enterpassword('Ashugupta@12345');
  34 |         await crudpimpage.enterconfirmpassword('Ashugupta@12345');
  35 |         await crudpimpage.clickOnsaveButton();
  36 |     });
  37 | 
  38 |     // 2. READ EMPLOYEE
  39 |     test('2. Read Employee',{tag: ['@read']}, async ({ page }) => {
  40 | 
  41 |         await crudpimpage.clickOnEmployeeListLoc();
  42 |         await crudpimpage.enteremployeeName('Ayush');
  43 |         await crudpimpage.clickOnsearchButton();
  44 |         await expect(page.getByText('Ayush')).toBeVisible();
  45 |     });
  46 | 
  47 |     // 3. UPDATE EMPLOYEE
  48 |     test('3. Update Employee',{tag: ['@update']}, async ({ page }) => {
  49 | 
  50 |         await crudpimpage.clickOnEmployeeListLoc();
  51 |         await crudpimpage.enteremployeeName('Ayush');
  52 |         await crudpimpage.clickOnsearchButton();
  53 |         await crudpimpage.clickOnEditButton();
  54 |         await crudpimpage.enterMiddleName('abc');
  55 |         await crudpimpage.clickOnSaveButton();
  56 |     });
  57 | 
  58 |     // 4. DELETE EMPLOYEE
  59 |     test('4. Delete Employee',{tag: ['@delete']}, async ({ page }) => {
  60 | 
  61 |         await crudpimpage.clickOnEmployeeListLoc();
  62 |         await crudpimpage.enteremployeeNAME('Ayush');
  63 |         await crudpimpage.clickOnsearchBUTTON();
  64 |         await crudpimpage.clickOndeleteButton();
  65 |         await crudpimpage.clickOnyesButton();
  66 |     });
  67 | });
```