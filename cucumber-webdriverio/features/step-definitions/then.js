const { defineSupportCode } = require('cucumber');
const webdriverio = require('webdriverio');
const expect = require('chai').expect;

// support file
const checkTitle = require('../support/checkTitle');

defineSupportCode(({ Then }) => {
  Then('the page title should {string}', checkTitle);
});