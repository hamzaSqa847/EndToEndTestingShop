import { Page, expect } from '@playwright/test';

export class ContactPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async VerifyContactPage() {
        await this.page.getByRole('link', { name: 'Contact' }).click();
        //Verify contactpage is visibel 
        await expect(this.page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
    }

    async VerifyContactFormFill(name: string, email: string, subject: string, message: string) {
        await this.page.getByRole('textbox', { name: 'Enter your name' }).fill(name);
        await this.page.getByRole('textbox', { name: 'Enter your email' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Enter subject' }).fill(subject);
        await this.page.getByRole('textbox', { name: 'Enter your message' }).fill(message);
        await this.page.getByRole('button', { name: 'Send Message' }).click();
        //Verify successMessageis visible..
        await expect(this.page.getByText('Message sent successfully! We')).toBeVisible();

    }

}
