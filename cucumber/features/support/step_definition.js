const { defineSupportCode } = require('cucumber');
const fs = require('fs');
const mzFs = require('mz/fs');
const webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;
const expect = require('chai').expect;

let url, keyword, browser;

defineSupportCode(({ Given, Then, When }) => {
  Given('I have url {string} to open', value => {
    url = value;
  });

  Given('I have keyword {string} to {string} for element', (value, ele) => {
    keyword = value;
    global.driver.findElement(By.name(ele)).sendKeys(value);
  });

  When('open the browser', () => {
    global.driver.get(url);
  });

  When('click {string} button', element => {
    global.driver.findElement(By.name(element)).click();
  });

  Then('the page title should {string}', async (title) => {
    // global.driver.wait(until.titleIs(title), 1000);

    const pageTitle = await global.driver.getTitle();
    console.log(pageTitle);
    // expect(pageTitle).to.eql('test');
  });
});
