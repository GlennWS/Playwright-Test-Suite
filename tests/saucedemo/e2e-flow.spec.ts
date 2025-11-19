import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/sauceDemoLoginPage';
import { InventoryPage } from '../../pages/sauceDemoInventoryPage';
import { CartPage } from '../../pages/sauceDemoCartPage';
import { FirstStageCheckoutPage } from '../../pages/sauceDemoCheckoutPages/sauceDemoFirstStageCheckout';
import { SecondStageCheckoutPage } from '../../pages/sauceDemoCheckoutPages/sauceDemoSecondStageCheckout';
import { FinalStageCheckoutPage } from '../../pages/sauceDemoCheckoutPages/sauceDemoFinalStageCheckout';
 
test.describe('SauceDemo E2E Tests', () => {
  test('SDTC-03: Standard user can add item to cart and check the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const firstStageCheckoutPage = new FirstStageCheckoutPage(page);
    const secondStageCheckoutPage = new SecondStageCheckoutPage(page);
    const finalStageCheckoutPage = new FinalStageCheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory.html/);
    await !inventoryPage.shoppingCartBadge.isVisible();
    await inventoryPage.AddItemToCart();
    await inventoryPage.shoppingCartBadge.isVisible();
    await inventoryPage.GoToCart();
    await expect(page).toHaveURL(/.*cart.html/);
    await cartPage.backpackItem.isVisible();
    await cartPage.Checkout();
    await expect(page).toHaveURL(/.*checkout-step-one.html/);
    await firstStageCheckoutPage.FillCheckoutDetails('Test', 'User', '12345');
    await firstStageCheckoutPage.continueButton.click();
    await expect(page).toHaveURL(/.*checkout-step-two.html/);
    await secondStageCheckoutPage.backpackItem.isVisible();
    await secondStageCheckoutPage.FinaliseCheckout();
    await expect(page).toHaveURL(/.*checkout-complete.html/);
    await finalStageCheckoutPage.thankYouMessage.isVisible();
    await finalStageCheckoutPage.ReturnToHomePage();
    await expect(page).toHaveURL(/.*inventory.html/);
  });
});