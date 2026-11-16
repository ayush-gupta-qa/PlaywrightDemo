import {test,expect} from '@playwright/test';

  test("New tab link test", async ({page, context}) => {
    // Open the first tab and navigate to a URL
    await page.goto('https://the-internet.herokuapp.com/windows');

    // Click on the link that opens a new tab
    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link', { name: 'Click Here' }).click(),
  ]);
   await page.waitForTimeout(5000);
   await expect(newTab.getByRole('heading')).toHaveText('New Window');
   await newTab.close();
   await page.waitForLoadState('domcontentloaded');
   await expect(page.getByRole('heading')).toHaveText('Opening a new window');
});