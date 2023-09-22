import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import axios from 'axios';

let apiUrl;
let response;

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

Then(/^I should see the following text relate to factorial of 0 "([^"]*)"$/, async(text) => {
    await expect(FactorialPage.resultText).toHaveTextContaining(text);
});

Then(/^I should see on the screen an error "([^"]*)"$/, async(text) => {
    await expect(FactorialPage.resultText).toHaveTextContaining(text);
});


//API
Given(/^I have the API endpoint "([^"]*)"$/, function (endpoint) {
    apiUrl = endpoint;
});

When(/^I make a GET request to the endpoint$/, async function () {
    try {
        response = await axios.get(apiUrl);
    } catch (error) {
        throw new Error(`Failed to make GET request to ${apiUrl}: ${error.message}`);
    }
});

When(/^I make a GET request to the endpoint with the query parameter "number" set to "([^"]*)"$/, async function (param) {
    try {
        response = await axios.get(apiUrl, { params: { param } });
    } catch (error) {
        throw new Error(`Failed to make GET request to ${apiUrl}: ${error.message}`);
    }
});

Then(/^the response should have a status code of 200 OK$/, function () {
    expect(response.statusText).toEqual("OK")
});

Then(/^the response should contain the text "([^"]*)"$/, function (text) {
    const responseBody = response.data;
    expect(responseBody).toEqual(text);
});
