import { Page, expect } from '@playwright/test';

export class AboutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async VerifyAboutPage() {
        await this.page.getByRole('link', { name: 'About' }).click();
        await expect(this.page.getByRole('heading', { name: 'About ShopHub' })).toBeVisible();
    }


}