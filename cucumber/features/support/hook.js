/**
 * @author  Teerapong Singthong
 * @see https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/hooks.md
 */

// const { defineSupportCode } = require('cucumber');

// defineSupportCode(function({ After, Before }) {
//   // Synchronous
//   Before(function() {
//     this.count = 0;
//   });

//   // Asynchronous Callback
//   Before(function(testCase, callback) {
//     const world = this;
//     tmp.dir({ unsafeCleanup: true }, function(error, dir) {
//       if (error) {
//         callback(error);
//       } else {
//         world.tmpDir = dir;
//         callback();
//       }
//     });
//   });

//   // Asynchronous Promise
//   After(function() {
//     // Assuming this.driver is a selenium webdriver
//     return this.driver.quit();
//   });
// });
