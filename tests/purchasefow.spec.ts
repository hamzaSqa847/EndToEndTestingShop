import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AuthPage } from '../pages/AuthPage';
import { PurchaseProductFlow } from '../pages/PurchaseProductFlow';



test('Purchase flow  ', async ({ page }) => {

    const Home = new HomePage(page);
    const Auth = new AuthPage(page);
    const Purchase = new PurchaseProductFlow(page);

    await Home.goto();
    await page.waitForTimeout(2000); // pause to see page
    await Home.verifyHomePageVisible();
    await page.waitForTimeout(2000); // pause to see page


    await Auth.register('Muhammad Hamza', 'hamzaicp54@gmail.com', 'Applemango1!', 'Applemango1!');

    await Auth.verifyRegisteration();
    await page.waitForTimeout(2000); // pause to see page

    await Auth.login('hamzaicp54@gmail.com', 'Applemango1!')

    await Auth.verifyLogin();
    await page.waitForTimeout(2000); // pause to see page

    await Purchase.PurchaseItemFlow();

    await page.waitForTimeout(2000);
    await Purchase.verifyProductPurchase();
    await page.waitForTimeout(2000);

});