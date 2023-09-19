import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import FactorialPage from '../pageobjects/factorial.page.js';

Given(/^I am on the The greatest factorial calculator landing page$/, async() => {
    await FactorialPage.open();
});

Given(/^I enter the number "([^"]*)" on the input$/, async (valeur) => {
    await FactorialPage.setNumberInput(valeur);
});

When(/^I click on the button calculate$/, async () => {
    await FactorialPage.calculateButton.click();
});

Then(/^I see the result display on page$/, async() => {
    await expect(FactorialPage.resultText).toBeExisting();
});

Then(/^I see the following text "([^"]*)"$/, async(text) => {
    await expect(FactorialPage.resultText).toHaveTextContaining(text);
});

Then(/^I see the following text relate to factorial of 0 "([^"]*)"$/, async(text) => {
    await expect(FactorialPage.resultText).toHaveTextContaining(text);
});
