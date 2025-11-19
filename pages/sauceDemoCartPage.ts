import { type Page, type Locator } from '@playwright/test';
 
export class CartPage {
  readonly page: Page;
  readonly backpackItem: Locator;
  readonly removeButton: Locator;
  readonly checkoutButton: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.backpackItem = page.getByText('Sauce Labs Backpack');
    this.removeButton = page.getByRole('button', { name: 'Remove' });
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }
 
  async Checkout() {
    await this.checkoutButton.click();
  }
}