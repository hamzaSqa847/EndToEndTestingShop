import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';


test('VerifyContact', async ({ page }) => {
    
    const Home = new HomePage(page);
    const contact = new ContactPage(page);
    await Home.goto();
    await Home.verifyHomePageVisible()
    await contact.VerifyContactPage()
    await page.waitForTimeout(2000); // pause to see page
    await contact.VerifyContactFormFill('Hamza', "hamzaicp54@gmail.com", 'I need Toy Car in white color', 'can I pay shipping cahrges or its free delivery');
});