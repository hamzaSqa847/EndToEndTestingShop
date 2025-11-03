import { Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://hamzasqa847.github.io/Shop-web/');
    }

    async verifyHomePageVisible() {
        await expect(this.page.getByRole('heading', { name: 'Welcome to ShopHub' })).toBeVisible();
    }

}