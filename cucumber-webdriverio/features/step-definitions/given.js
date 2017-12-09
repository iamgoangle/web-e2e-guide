const { defineSupportCode } = require('cucumber');
const webdriverio = require('webdriverio');
const expect = require('chai').expect;

defineSupportCode(({ Given }) => {
  Given("I have url {string} to open", url => {
    browser.url(url);
  });
});
