/**
 * @author  GOLF <Teerapong>
 * @see https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/world.md
 * @description World is an isolated context for each scenario
 */
const { setWorldConstructor } = require('cucumber');

class CustomWorld {
  constructor() {
    this.variable = 0;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);
