const expect = require('chai').expect;

module.exports = (expectedTitle) => {
  const title = browser.getTitle();
  expect(title).to.eq(expectedTitle);
};
