import { Page, expect } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

  async VerifyProductPageVisible(){

  await this.page.getByRole('link', { name: 'Products' }).click();
  await expect(this.page.getByRole('heading', { name: 'Our Products' })).toBeVisible();
  
  
}

async verifyproductsCategoriesVisible(){
    await expect(this.page.getByRole('button', { name: 'All Products' })).toBeVisible();
  await expect(this.page.getByRole('button', { name: 'Electronics' })).toBeVisible();
  await expect(this.page.getByRole('button', { name: 'Fashion' })).toBeVisible();
  await expect(this.page.getByRole('button', { name: 'Fashion' })).toBeVisible();
  await expect(this.page.getByRole('button', { name: 'Sports' })).toBeVisible();
  
}
async verifyProdutVisible(){
    await expect(this.page.getByRole('heading', { name: 'Soccer Ball' })).toBeVisible();
}

  
}

 
  
