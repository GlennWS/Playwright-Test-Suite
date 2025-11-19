import { type Page, type Locator } from '@playwright/test';
 
export class InventoryPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly shoppingCartButton: Locator;
  readonly shoppingCartBadge: Locator;
 
  constructor(page: Page) {
    this.page = page;
    //this.addToCartButton = page.getByRole('button', {name: 'Add to cart'});
    this.addToCartButton = page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]');
    this.shoppingCartButton = page.locator('[class="shopping_cart_link"]');
    this.shoppingCartBadge = page.locator('//span[@class="shopping_cart_badge"][text()="1"]');
  }

  async AddItemToCart() {
    await this.addToCartButton.click();
  }

  async GoToCart() {
    await this.shoppingCartButton.click();
  }
}