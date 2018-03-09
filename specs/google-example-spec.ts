import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('google-example-typeNSearch', () => {
    beforeEach(() => {
        browser.ignoreSynchronization = true;
        browser.get('http://www.google.com');
    });

    it('search box should be visible', () => {
        element(by.css('#lst-ib')).isDisplayed();  
    })

    it('search works correctly', () => {
        element(by.css('#lst-ib')).sendKeys('Protractor and Typescript')
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        element(by.css('#res')).isDisplayed();
    })
})