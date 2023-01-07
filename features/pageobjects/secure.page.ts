import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get myAccount () {
        return $('*=myaccount');
    }

    public get btnMyAccount(){
        return $('[data-testid="HeaderAccount-myaccount-button"]');
    }

    public get btnMyAddress(){
        return $('[data-testid="pvh-ResponsiveNavListItem"]');
    }

    public get addressHeader () {
        return $('[data-testid="HeaderAccount-myaccount-button"]');
    }
    
    public get btnAddAddress(){
        return $('[data-testid="icon-utility-account-add-address-svg"]');
    }

    public get txtFirstName(){
        return $('[data-testid="firstName-inputField"]');
    }

    public get txtLastName(){
        return $('[data-testid="lastName-inputField"]');
    }

    public get txtAddress1(){
        return $('[data-testid="address1-inputField"]');
    }

    public get txtAddress2(){
        return $('[data-testid="address2-inputField"]');
    }

    public get txtCity(){
        return $('[data-testid="city-inputField"]');
    }

    public get txtZipcode(){
        return $('[data-testid="zipCode-inputField"]');
    }

    public get btnSaveAddress(){
        return $('[data-testid="address-form-add-pvh-button"]');
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to add new address using full address
     */
    public async addAddress (address: string) {
        const myAddres = address.split(",");
        await this.txtFirstName.setValue(myAddres[0]);
        await this.txtLastName.setValue(myAddres[1]);
        await this.txtAddress1.setValue(myAddres[2]);
        await this.txtAddress2.setValue(myAddres[3]);
        await this.txtCity.setValue(myAddres[4]);
        await this.txtZipcode.setValue(myAddres[5]);
        await this.btnSaveAddress.click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to add new address using full address
     */
    public async verifyAddress (address: string) {
        const myAddres = address.split(",");
        // TODO
    }
}

export default new SecurePage();
