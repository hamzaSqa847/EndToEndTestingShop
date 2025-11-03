import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test('VerifyProducts', async ({ page }) => {

    const Home = new HomePage(page);
    const Products =  new ProductsPage(page);

    await Home.goto();
    await Home.verifyHomePageVisible();
   await Products.VerifyProductPageVisible()
   await Products.verifyproductsCategoriesVisible()
   await Products.verifyProdutVisible()
});