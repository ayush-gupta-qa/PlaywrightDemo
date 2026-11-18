import {test, expect} from '@playwright/test';
import {Leave} from '../Pages/Leavepage';
import LoginData from '../Test-Data1/login.json';
import { HRMloginpage } from '../Pages/HRMloginpage';

test('Verify Leave page', async ({page}) => {
 
    const hrmlogin = new HRMloginpage(page);
    await page.goto(LoginData.url);
    await hrmlogin.enterUserName(LoginData.username);
    await hrmlogin.enterPassword(LoginData.password);
    await hrmlogin.clicksubmitButton();
    await hrmlogin.dbPageVisible();

    const leavepage = new Leave(page);
    await leavepage.ClickonLeavebutton();
    await leavepage.validateLeavePageVisibility();
    await leavepage.ClickonLeavebutton();
});
