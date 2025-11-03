import { Page, expect } from '@playwright/test';

export class PurchaseProductFlow {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async PurchaseItemFlow() {

        await this.page.getByRole('link', { name: 'Shop Now' }).click();
        await this.page.getByRole('button', { name: 'Add to Cart' }).first().click();
        await expect(this.page.getByText('Product added to cart!')).toBeVisible();

    }

    async verifyProductPurchase() {

        await this.page.getByText('🛒').click();
        await this.page.getByRole('button', { name: '+' }).click();
        await this.page.getByRole('button', { name: 'Proceed to Checkout' }).click();
        await expect(this.page.getByText('Order placed successfully!')).toBeVisible();
        await this.page.getByRole('link', { name: 'Logout' }).click();
        await expect(this.page.getByText('Logged out successfully!')).toBeVisible();

    }



}

