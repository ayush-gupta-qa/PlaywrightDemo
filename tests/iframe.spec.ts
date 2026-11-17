import { test, expect } from '@playwright/test';
import path from 'path';

  test('iframe handling example using frameLocator', async ({ page }) => {
   // Navigate to an example page with an iframe 
    await page.goto('https://the-internet.herokuapp.com/iframe');

   // Locate the iframe using frameLocator 
    const iframeLocator = page.frameLocator('#mce_0_ifr');
   // Interact with an element inside the iframe 
    const editorbody = iframeLocator.locator('#tinymce');
    
    await editorbody.click();
    await page.waitForLoadState('domcontentloaded');
    await editorbody.clear();
    await page.waitForLoadState('networkidle');
    await editorbody.fill('This is an example of handling iframe using frameLocator in Playwright.');
    await page.waitForLoadState('networkidle');
    // Assert the text inside the iframe
    await expect(editorbody).toHaveText('This is an example of handling iframe using frameLocator in Playwright.');
});

  test('file upload example', async ({ page }) => {
  // Navigate to file upload demo page
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.waitForLoadState('networkidle');
  
  // Provide path to the file to upload  
   const filepath = path.join(__dirname, '../test-data/sample.txt');
   await page.waitForLoadState('domcontentloaded');
   await page.waitForLoadState('networkidle');

  // Set the file on the input element
   await page.locator('#file-upload').setInputFiles(filepath);
   await page.waitForLoadState('networkidle');

  // Click the Upload button 
   await page.locator('#file-submit').click();
   await page.waitForLoadState('domcontentloaded');
   await page.waitForLoadState('networkidle');

  // Verify successful upload
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
    await expect(page.locator('#uploaded-files')).toContainText('sample.txt');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('networkidle');
    console.log('File upload test completed successfully.');
    });
  
  
  