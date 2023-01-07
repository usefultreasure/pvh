import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get btnCookies () {
        return $('[data-testid="Button-primary"]');
    }

    public get txtHeader(){
        return $('[data-testid="modal-heading"]');
    }

    public get btnLogin () {
        return $('[data-testid="sign-in-button"]');
    }

    public get inputUsername () {
        return $('//*[@id="signin-email"]');
    }

    public get inputPassword () {
        return $('//*[@id="signin-password"]');
    }

    public get btnSubmit () {
        return $('[data-testid="Button-primary"]');
    }

    public get errorEmail () {
        return $('#signin-email-helper-text');
    }

    public get errorPassword () {
        return $('#signin-password-helper-text');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async openLogin () {
        await this.btnLogin.click();
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        if (username!="null"){await this.inputUsername.setValue(username);}
        if (password!="null"){await this.inputPassword.setValue(password);}
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new LoginPage();
