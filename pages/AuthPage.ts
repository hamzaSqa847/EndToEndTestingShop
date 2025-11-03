import { Page, expect } from '@playwright/test';

export class AuthPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async register(name: String, email: string, password: string, comfirmpasword: string) {
        await this.page.getByRole('link', { name: 'Register' }).click();
        await this.page.getByRole('textbox', { name: 'Enter your full name' }).fill('Hamza');
        await this.page.getByRole('textbox', { name: 'Enter your email' }).fill('hamzaicp54@gmail.com');
        await this.page.getByRole('textbox', { name: 'Create a password' }).fill('Applemango1!');
        await this.page.getByRole('textbox', { name: 'Confirm your password' }).fill('Applemango1!');

    }





    async verifyRegisteration() {

        await this.page.getByRole('button', { name: 'Register' }).click();
        await expect(this.page.getByText('Registration successful!')).toBeVisible();

    }



    async login(email: string, password: string) {
        await this.page.getByRole('link', { name: 'Login' }).click();
        await this.page.getByRole('textbox', { name: 'Enter your email' }).fill('hamzaicp54@gmail.com');
        await this.page.locator("#loginPassword").fill('Applemango1!');
    }

    async verifyLogin() {

        await this.page.getByRole('button', { name: 'Login' }).click();
        await expect(this.page.getByText('Welcome back, Hamza!')).toBeVisible();

    }


}


