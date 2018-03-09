import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('google-example-typeNSearch', () => {
    beforeEach(() => {
        browser.ignoreSynchronization = true;
        browser.get('http://www.google.com');
    });

    it('search box should be visible', () => {
        element(by.css('#tsf > div:nth-child(2) > div._Iis.emca > div._Jis > div > div._Chs > input')).isDisplayed();  
    })

    it('search works correctly', () => {
        element(by.css('#tsf > div:nth-child(2) > div._Iis.emca > div._Jis > div > div._Chs > input')).sendKeys('Protractor and Typescript')
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    })
})