import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/sauceDemoLoginPage';
 
test.describe('SauceDemo Login Tests', () => {
  test('SDTC-01: Allow standard user to login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory.html/);
  });
  
  test('SDTC-02: Show error for locked-out user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
  });
});