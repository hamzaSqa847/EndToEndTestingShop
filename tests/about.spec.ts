import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';

test('VerifyAbouttPage', async ({ page }) => {
const Home = new HomePage(page);
const About = new AboutPage(page);

await Home.goto();
await About.VerifyAboutPage();
});