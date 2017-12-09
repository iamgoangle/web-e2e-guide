# End-to-End test boiler plate :beer:
```
  ______ _   _ _____      _______ ____         ______ _   _ _____  
 |  ____| \ | |  __ \    |__   __/ __ \       |  ____| \ | |  __ \ 
 | |__  |  \| | |  | |______| | | |  | |______| |__  |  \| | |  | |
 |  __| | . ` | |  | |______| | | |  | |______|  __| | . ` | |  | |
 | |____| |\  | |__| |      | | | |__| |      | |____| |\  | |__| |
 |______|_| \_|_____/       |_|  \____/       |______|_| \_|_____/ 
 
 By Teerapong Singthong
```

According to end-to-end testing in web application, there are several choices to decide it into exist project.
To be not waste time with it, I have created public repository to build a place where you can fork end-to-emd template and execute the test easier.

Repository are includes the testing tools ie. cucumber, selenium web driver, robotframework and nightwatch.js

# Table of Contents
  - [Cucumber simple](#cucumber)
  - [Cucumber with Webdriver I/O](#cucumber-with-webdriver-io)
  - [RobotFramework](#robotframework)
  - [Nightwatch.js](#nightwatch)
# Cucumber :shower:

## Installation
```sh
yarn install
```
## Run test
```sh
yarn test
```
## Show cucumber HTML report
```sh
yarn report
```
---

# Cucumber with Webdriver I/O
BDD with Gherkin syntax and using WebdriverIO for on top selenium web driver.

## Installation
```
yarn install
```
## Usage
1. Write your feature file as a Gherkin syntax like below.
```
Feature: Test the page title
    As a developer
    I want to be able to test if a page has a certain title

    Scenario: Test "Google"
        Given I open the url "https://google.co.th/"
        And   the page url is "https://www.google.co.th/"
        Then  I expect that the title is "Google"

```
2. Add your step definition to `given.js` `when.js` and `then.js`

## Run test
```
yarn test
```
## Refs
[http://webdriver.io/guide/testrunner/frameworks.html](http://webdriver.io/guide/testrunner/frameworks.html)

---

# Robotframework :hatched_chick: [Updating]
## Install dependencies
### Mac
```sh
brew install python
sudo -H pip install robotframework
sudo -H pip install --pre --upgrade robotframework-seleniumlibrary
brew install chromedriver
```
### Window
---
# Nightwatch.js [Updating]