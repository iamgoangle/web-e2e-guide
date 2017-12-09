/**
 * @author  GOLF <Teerapong>
 * @see https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/world.md
 * @description World is an isolated context for each scenario
 */

const { defineSupportCode } = require('cucumber');
const seleniumWebdriver = require('selenium-webdriver');

function CustomWorld() {
  global.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();

  // Returns a promise that resolves to the element
  global.waitForElement = (locator) => {
    const condition = seleniumWebdriver.until.elementLocated(locator);
    return global.driver.wait(condition);
  };
}

defineSupportCode(function({ setWorldConstructor }) {
  setWorldConstructor(CustomWorld);
});
