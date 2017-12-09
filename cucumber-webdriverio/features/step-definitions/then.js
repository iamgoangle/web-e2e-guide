const { defineSupportCode } = require('cucumber');
const expect = require('chai').expect;

// support file
const checkTitle = require('../support/checkTitle');

defineSupportCode(({ Then }) => {
  Then(/^I expect that the title is( not)* "([^"]*)?"$/, checkTitle);
});
