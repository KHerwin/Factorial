const { Given, When, Then } = require('cucumber');

Given(/^I am on the The greatest factorial calculator landing page$/, () => {
    browser.url('https://pandaqaetest.pythonanywhere.com/');
});

Given(/^I enter the number "(.*)" on the input $/, (valeur) => {
    const number = $("//input[@id='number']");
    number.setValue(valeur);
});

When(/^I click on the button calculate$/, () => {
    const link = $("//button[@id='getFactorial']");
    link.click();
});

Then(/^I see the result display on page$/, () => {
    const result = $("//button[@id='getFactorial']");
    expect(result).toBeDisplayed();
});
