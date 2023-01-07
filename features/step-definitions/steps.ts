import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage,
    securePage: SecurePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
    try {
        await LoginPage.btnCookies.click();
    } catch {
        console.warn('no cookies');
    }
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.btnLogin.click();
    await LoginPage.txtHeader.waitForExist({ timeout: 5000 });
    await LoginPage.login(username, password);
});

When(/^I add new (.+)$/, async (address) => {
    await SecurePage.btnMyAccount.click();
    await SecurePage.btnMyAddress.click();
    await SecurePage.addressHeader.waitForExist({ timeout: 5000 });
    await SecurePage.btnAddAddress.click();
    await SecurePage.addAddress(address);
});

Then(/^I should see a flash message about missing (.*)$/, async (element) => {
    if (element=='email' || element=='both'){
        await expect(LoginPage.errorEmail).toBeDisplayed();
        await expect(LoginPage.errorEmail).toHaveTextContaining('Vul het veld in');
    }
    if (element=='password' || element=='both'){
        await expect(LoginPage.errorPassword).toBeDisplayed();
        await expect(LoginPage.errorPassword).toHaveTextContaining('Vul het veld in');
    }
    if (element=='nonemail'){
        await expect(LoginPage.errorEmail).toBeDisplayed();
        await expect(LoginPage.errorEmail).toHaveTextContaining('Sorry, dit is geen geldig e-mailadres');
    }
});

Then(/^I should see my account$/, async () => {
    await expect(SecurePage.myAccount).toBeExisting();
});

Then(/^I should see new (.*) added$/, async (address) => {
    
});