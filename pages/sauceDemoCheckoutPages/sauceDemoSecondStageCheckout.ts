import { type Page, type Locator } from '@playwright/test';
 
export class SecondStageCheckoutPage {
  readonly page: Page;
  readonly backpackItem: Locator;
  readonly finishButton: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.backpackItem = page.getByText('Sauce Labs Backpack');
    this.finishButton = page.getByRole('button', { name: 'Finish' });
  }

  async FinaliseCheckout() {
    await this.finishButton.click();
  }
}