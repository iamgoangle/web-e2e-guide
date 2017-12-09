const { defineSupportCode } = require('cucumber');

const openWebsite = require('../support/openWebsite');
const checkUrl = require('../support/checkUrl');

defineSupportCode(({ Given }) => {
  Given(/^I open the (url|site) "([^"]*)?"$/, openWebsite);

  Given(/^the page url is( not)* "([^"]*)?"$/, checkUrl);
});
