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
  - [Cucumber](#cucumber)
  - [RobotFramework](#robotframework)
  - [Nightwatch.js](#nightwatch)
# Cucumber :shower:
**Features:**
 - Gherkin syntax
 - Selenium driver
 - Chai expect
 - Javascript for step definition

## Installation
```sh
yarn install
```
## Usage
```sh
yarn test
```
## Show cucumber HTML report
```sh
yarn report
```
------
# Robotframework :hatched_chick:
## Install dependencies
### Mac
```sh
brew install python
sudo -H pip install robotframework
sudo -H pip install --pre --upgrade robotframework-seleniumlibrary
brew install chromedriver
```
### Window