const defineSupportCode = require('cucumber').defineSupportCode;
const expect = require('chai').expect;

defineSupportCode(({ Given, Then, When }) => {
  let answer = 0;

  Given('I start with {int}', input => {
    answer = input;
  });

  When('I add {int}', input => {
    answer = answer + input;
  });

  Then('I end up with {int}', input => {
    expect(answer).to.eql(input);
  });
});
