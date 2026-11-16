import {test, expect} from '@playwright/test';

 test.describe('4 Simple Fresher Topics Demo', () => {
    test.setTimeout(120000);
    // 1. NAVIGATION: Back, Forward, Reload
    test('1. Navigation Test', async ({page}) => {

      await page.goto('https://www.google.com');
      await page.goto('https://www.wikipedia.org');
      await page.waitForLoadState('load');

    //Go BACK
    await page.goBack();
    await expect(page).toHaveURL('https://www.google.com/');
    await page.waitForLoadState('load');

    //Go FORWARD
    await page.goForward();
    await page.goto('https://www.wikipedia.org');
    await page.waitForLoadState('load');

    //RELOAD / REFRESH
    await page.reload();
    await expect(page.getByRole('heading', { name: 'Wikipedia' })).toBeVisible();
    await page.waitForTimeout(5000);

    });
  // 2. MULTIPLE ELEMENTS: count, allTextContents, looping
  test('2. Multiple Elements', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/');
    
    const links = page.locator('ul li a');
    
    // A. Count matching elements
    const count = await links.count();
    console.log('Total links:', count);
    await page.waitForLoadState('domcontentloaded');

    // // B. Get all text values as an array in one line
    const allTexts = await links.allTextContents();
    console.log('First 6 items:', allTexts.slice(0, 6));
    await page.waitForLoadState('domcontentloaded');

    // C. Loop through elements using all()
    for (const link of (await links.all()).slice(1, 3)) {
      console.log('Link text:', await link.innerText());
      await page.waitForLoadState('domcontentloaded');
    }
  });
  // 3. ATTRIBUTES: getAttribute vs toHaveAttribute
  test('3. element attributes', async ({ page }) => {
     
    await page.goto('https://the-internet.herokuapp.com/login');
    const username = page.locator('#username');
    // Read attribute value into a variable
    const value = await username.getAttribute('type');
    console.log('Attribute value:', value);
    await page.waitForLoadState('networkidle');

    // Or assert attribute directly (auto-retrying, recommended!)
    await expect(username).toHaveAttribute('type', 'text');
   }); 
  // 4. SCROLLING: scrollIntoViewIfNeeded and mouse wheel
  test('4. scrolling', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');

    //Scroll an element at the bottom into view
    const footer = page.locator('#page-footer');
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeVisible();

    // Scroll by pixels using mouse wheel (deltaX, deltaY)
    await page.mouse.wheel(0, 500);
    await page.waitForLoadState('domcontentloaded');
  
  });
});
