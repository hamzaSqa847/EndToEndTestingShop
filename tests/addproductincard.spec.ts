import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { AddProductCard } from '../pages/AddProductCard';
test('Verify Add product in card', async ({ page }) => {

    const Home = new HomePage(page);
    const Products =  new ProductsPage(page);
    const AddProduct = new AddProductCard(page);

    await Home.goto();
    await page.waitForTimeout(2000); // pause to see page
    await Home.verifyHomePageVisible();
    await page.waitForTimeout(2000); // pause to see page
   await Products.VerifyProductPageVisible()
   await page.waitForTimeout(2000); // pause to see page
   await AddProduct.AddProductinCard();
   await page.waitForTimeout(2000); // pause to see page
   await AddProduct.VerifyProductinCard();
   await page.waitForTimeout(2000); // pause to see page
 
});