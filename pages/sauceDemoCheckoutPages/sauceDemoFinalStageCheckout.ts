import { type Page, type Locator } from '@playwright/test';
 
export class FinalStageCheckoutPage {
  readonly page: Page;
  readonly thankYouMessage: Locator;
  readonly backHomeButton: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.thankYouMessage = page.getByText('Thank you for your order!');
    this.backHomeButton = page.getByRole('button', { name: 'Back Home' });
  }

  async ReturnToHomePage() {
    await this.backHomeButton.click();
  }
}