import { Page, expect } from '@playwright/test';

export class AddProductCard {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    // async AddProductinCard() {

    //     await this.page.getByRole('button', { name: 'Add to Cart' }).first().click();
    //     await expect(this.page.getByText('Product added to cart!')).toBeVisible();

    // }

    async VerifyProductinCard() {
        await this.page.getByText('🛒').click();
        await expect(this.page.getByRole('heading', { name: 'Shopping Cart' })).toBeVisible();
        await expect(this.page.locator('#cartItems').getByText('Laptop Pro')).toBeVisible();

    }

}







